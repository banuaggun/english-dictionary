<script setup>
  import { ref } from "vue";
  import axios from "axios";

  import Directive from "./Directive.vue";
  import SearchItems from "./SearchItems.vue";

  const searchRequests = ref("");
  const searchData = ref(null);
  const errorState = ref(false);
  const isLoading = ref(false);

  const handleData = async () => {
    const word = searchRequests.value.trim();

    if (!word) {
      return;
    }

    errorState.value = false; 
    searchData.value = null;
    isLoading.value = true;

    try {
      const response = await axios.get(
        `/dictionary-api/api/v2/entries/en/${encodeURIComponent(word)}`,
      );

      searchData.value = response.data;

      searchRequests.value = "";
    } catch (error) {
      errorState.value = true;
      searchData.value = null;
    } finally {
      isLoading.value = false;
    }
  };
</script>

<template>
  <section class="search">
    <form @submit.prevent="handleData" class="search-form">
      <label for="search-text">
        <input
          id="search-text"
          v-model="searchRequests"
          type="text"
          name="text"
          placeholder="Search a word"
          autocomplete="off" />

        <button type="submit" :disabled="isLoading" aria-label="Search">
          <span v-if="!isLoading">
            <i
              class="fa-solid fa-magnifying-glass text-base text-primary_clr"></i>
          </span>

          <span v-else>
            <i
              class="fa-solid fa-spinner fa-spin text-base text-primary_clr"></i>
          </span>
        </button>
      </label>
    </form>

    <article v-if="errorState" class="not-found-area">
      <div class="not-found">
        <img
          src="../assets/icons/not-found.svg"
          alt="Word not found"
          class="not-found-image" />

        <p>
          We're sorry, we're not able to retrieve this information at the
          moment. Please try another word or try again later.
        </p>
      </div>
    </article>

    <article v-else-if="searchData" class="search-items">
      <SearchItems :search-data="searchData" />
    </article>

    <Directive v-else />
  </section>
</template>

<style scoped>
  .search {
    width: 100%;
  }

  .search-form {
    width: 100%;
  }

  .search-form label {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .search-form input[type="text"] {
    flex: 1;
  }

  .search-form button {
    cursor: pointer;
  }

  .search-form button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .not-found-area {
    width: 100%;
  }

  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .not-found-image {
    max-width: 250px;
  }

  .not-found p {
    text-align: center;
  }

  /* Mobile */
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    .search-form {
      width: calc(100% - 44px);
    }

    .search-form,
    .search input[type="text"] {
      border: 1px solid green;
    }

    .not-found {
      flex-direction: column;
    }

    .not-found p {
      text-align: center;
      font-size: 1rem;
      margin: 20px;
    }
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    .not-found-area {
      width: 80%;
      margin: 20px auto;
    }

    .not-found {
      flex-direction: row;
      justify-content: space-between;
    }

    .not-found p {
      text-align: left;
      font-size: 1.15rem !important;
      margin: 0 20px 10px;
    }
  }

  /* Small desktop */
  @media only screen and (min-width: 901px) and (max-width: 1100px) {
    .search-form {
      margin-top: 60px;
    }

    .not-found-area {
      width: 70%;
      margin: 40px auto;
    }

    .not-found {
      flex-direction: row;
    }

    .not-found p {
      text-align: left;
      font-size: 1.15rem !important;
      margin: 0 30px;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1101px) {
    .search-form {
      margin-top: 20px;
    }

    .not-found-area {
      width: 60%;
      margin: 40px auto;
    }

    .not-found {
      flex-direction: row;
    }

    .not-found p {
      text-align: left;
      font-size: 1.15rem !important;
      margin: 0 30px;
    }
  }
</style>
