<script setup>
import {ref} from 'vue'
import axios from 'axios'
import SearchItems from './SearchItems.vue'

const searchRequests= ref("")

const searchData = ref(null)

const errorState = ref(false)
const loadState = ref(false)

const base_url=ref("https://api.dictionaryapi.dev/api/v2/entries/en/");

const handleData = () => {
  loadState.value = true;
  axios({
    method:"get",
    url:`${base_url.value}${searchRequests.value}`,
    responseType:"json",
  }).then(function(response){
    searchData.value = response.data;
    loadState.value = false;
  }).catch(function(error){
    if(error){
      errorState.value = true;
    }
  });
  errorState.value = false;
};

</script>

<template>
  <section>
    <form @submit.prevent="handleData">
      <label for="search-input">
        <input type="text" name="text" id="search-text" placeholder="Search a word" v-model="searchRequests"/>
        <span>
          <i class="fa-solid fa-magnifying-glass | text-base text-primaary_clr"></i>
        </span>
      </label>
    </form>
    <article v-if="errorState">
      <span>Image will come for 404 page</span>
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later.
      </p>
    </article>
    <article v-else-if="searchData">
      <div v-if="loadState"> loading area will be created</div>
      <SearchItems :search-data="searchData" />
    </article>
  </section>
</template>