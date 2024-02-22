<script setup>
const props = defineProps({
  searchData:{
    required:true,
  },
});
</script>
<template>
  <div>
    <h1>{{searchData[0].word}}</h1>
  </div>
  <div v-for="meaning in searchData[0].meanings"
  :key="meaning">
  <span>{{meaning.partOfSpeech}}</span>
   <ul role="list">
          <li
            v-for="definitionData in meaning.definitions"
            :key="definitionData"
          >
            {{ definitionData.definition }}

            <span v-if="definitionData.example">
              Example: "{{ definitionData.example }}"
            </span>
          </li>
        </ul>
    </div>
</template>

<style scoped>
h1{
  text-transform: capitalize;
  font-weight:800;
  font:36px;
}

span{
  text-transform: capitalize;
  font-weight:600;
}

ul li{
  padding:8px;
  border:1px solid red;
  margin-bottom:10px;
  line-height:1.3;
}
</style>