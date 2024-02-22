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
     searchRequests.value = '';
  }).catch(function(error){
    if(error){
      errorState.value = true;
    }
  });
  errorState.value = false;
};


</script>

<template>
  <section class="search">
    <form @submit.prevent="handleData" class="search-form">
      <label for="search-input">
        <input type="text" name="text" id="search-text" placeholder="Search a word" v-model="searchRequests"/>
        <button type="submit" @submit="handleData">
        <span>
          <i class="fa-solid fa-magnifying-glass | text-base text-primary_clr"></i>
        </span>
        </button>
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

<style scoped>
.search-form{
  border:2px solid red;
  overflow:auto;
  border-radius:4px;
}
.search input[type="text"]{
  border:8px;
  width:67%;
  padding:10px;
}
.search input[type="text"]:focus{
  outline:0;
}
.search button{
  border:0;
  background:none;
  background-color:red;
  color:#fff;
  float:right;
  right:0;
  padding:10px;
  border-top-right-radius:4px;
  border-bottom-right-radius: 4px;
  cursor:pointer;
}

@media only screen and (min-width:300px) and (max-width:1040px){
  .search{
    width:95%;
    margin:0 auto;
  }
}
</style>