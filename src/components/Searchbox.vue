<script setup>
import {ref} from 'vue'
import axios from 'axios'
import Directive from './Directive.vue'
import SearchItems from './SearchItems.vue'

const searchRequests= ref("")

const searchData = ref(null)

const errorState = ref(false)

const base_url=ref("https://api.dictionaryapi.dev/api/v2/entries/en/");

const handleData = () => {
  axios({
    method:"get",
    url:`${base_url.value}${searchRequests.value}`,
    responseType:"json",
  }).then(function(response){
    searchData.value = response.data;
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
    <article v-if="errorState" class="not-found-area">
      <div class="not-found">
      <img src="../assets/icons/not-found.svg" alt="not found illustrations" class="not-found-image" />
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later.
      </p>
      </div>
    </article>
    <article class="search-items"  v-else-if="searchData">
      
      <SearchItems :search-data="searchData" />
    </article>
    <Directive v-else />
  </section>
</template>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
  .search-form, .search input[type="text"]{
    width:calc(100% - 44px);
  }
}
@media only screen and (min-width:601px) and (max-width:900px){
  .not-found-area{
    width:calc(100% - 20%);
    margin:20px 20%; 
  }
  .not-found{
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
  }
  .not-found p{
    text-align: left;
    font-size:1.15rem !important;
    margin:0 20px 10px 20px;
  }
}
@media only screen and (min-width:901px) and (max-width:1100px){
  .not-found-area{
    width:calc(100% - 30%);
    margin:40px 15%;
  }
  .not-found{
    display:flex;
    flex-direction:row;
  }
  .not-found p{
    text-align: left;
    font-size:1.15rem !important;
    margin:0 30px 0px 30px;
  }
}
@media only screen and (min-width:1101px) and (max-width:1922px){
  .not-found-area{
    width:calc(100% - 40%);
    margin:40px 20%;
  }
  .not-found{
    display:flex;
    flex-direction:row;
  }
  .not-found p{
    text-align: left;
    font-size:1.15rem !important;
    margin:0 30px 0px 30px;
  }
}
</style>