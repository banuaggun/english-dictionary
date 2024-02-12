<template>
  <section id="search-box">
    <form action="" @submit.prevent="handleSubmit()">
      <input type="text" placeholder="Enter a word" v-model="searchText"/>
      <button type="submit">Search</button>
    </form>
  </section>
</template>
<script>
export default {
  name:'search-box',
  data(){
    return{
      searchText:''
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.searchText)
      this.searchText=''
    }
  }
}
</script>
<style>
  
</style>