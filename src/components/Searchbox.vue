<script setup>
import {ref} from 'vue'
import axios from 'axios'

const searchRequests= ref("")

const searchData = ref(null)

const url=ref("https://api.dictionaryapi.dev/api/v2/entries/en/")

const handleData = () => {
  axios({
    method:"get",
    url:`${url.value}${searchRequests.value}`,
    responseType:"json",
  })
}

</script>

<template>
  <section>
    <form @submit.prevent="handleData">
      <label for="search-input">
        <input type="text" name="text" placeholder="Search a word" v-model="searchRequests"/>
        <span>
          <i class="fa-solid fa-magnifying-glass | text-base text-primaary_clr"></i>
        </span>
      </label>
    </form>
  </section>
</template>