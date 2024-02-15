<script setup>
import Header from './components/Header.vue'
import SearchBox from './components/Searchbox.vue'
import axios from 'axios'
import {ref} from 'vue'

const searchText = ref()

const screenOutput = ref()

async function getData(word){
  const result = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => console.log(response.data[0].meanings[0].definitions[0].definition))

  return result
}

getData("color")

</script>

<template>
  <div id="wrapper">
    <Header/>
    <main>
      <SearchBox v-model:searchText="searchText" placeholder="Enter a Word" />
      <button @click="clickHandler">Search</button>
      <p>{{screenOutput}}</p>
    </main>
  </div>
</template>
