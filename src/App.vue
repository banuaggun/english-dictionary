<script setup>
import Header from './components/Header.vue'
import SearchBox from './components/Searchbox.vue'
import {ref} from 'vue'

const searchText = ref()

</script>

<template>
  <div id="wrapper">
    <Header/>
    <main>
      <SearchBox v-model:searchText="searchtext"/>

    </main>
  </div>
</template>
