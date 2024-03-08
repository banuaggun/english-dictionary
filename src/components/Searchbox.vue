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
      <div v-if="loadState"> loading area will be created</div>
      <SearchItems :search-data="searchData" />
    </article>
  </section>
</template>

<style scoped>
.search{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-items{
  display: flex;
  flex-direction: column;
  width:90%;
  
}
.search-form{
  box-shadow:2px 2px 4px lavender;
  overflow:auto;
  background-color: floralwhite;
  width: 67%;
}
.search input[type="text"]{
  outline:none;
  border:2px solid lavender;
  border-radius:4px 0 0 4px;
  width:calc(100% - 44px);
  padding:10px;
}
.search input[type="text"]:focus{
  outline:0;
}
.search button[type="submit"]{
  border:0;
  background:none;
  background-color:steelblue;
  color:#fff;
  float:right;
  padding:10px;
  border-top-right-radius:4px;
  border-bottom-right-radius: 4px;
  cursor:pointer;
  width:44px;
  font-size:1rem;
}

.not-found-area{
  width:calc(100% - 10px);
  margin:0 20px;
}

.not-found{
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  border:1px solid #dcdcdc;
  box-shadow:-1px 2px 3px #dcdcdc;
  border-radius:4px;
  margin:10px 10px;
}

.not-found-image{
  width:18.75rem;
  height:18.75rem;
}
.not-found p{
  text-align:center;
  margin:0 20px 10px 20px;
  font-weight:600;
  letter-spacing:0.25px;
}

@media only screen and (min-width:300px) and (max-width:650px){
  .search-form, .search input[type="text"]{
    width:calc(100% - 44px);
  }
}
@media only screen and (min-width:620px) and (max-width:900px){
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