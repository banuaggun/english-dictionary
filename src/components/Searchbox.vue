<template>
  <section id="search-box">
    <form action="" @submit.prevent="handleSubmit()">
      <input type="text" :value="props.searchText" class="search-box-input" :placeholder="props.placeholder" @input="searchHandler"/>
      <button type="submit">Search</button>
    </form>
  </section>
</template>
<script setup>
const props=defineProps(["searchText", "placeholder"])

const emits=defineEmits(["update:searchText"])

const searchHandler = (event) => {
  emits("update:searchText", event.target.value)
  console.log(emits);
}
</script>
<style>
  
</style>