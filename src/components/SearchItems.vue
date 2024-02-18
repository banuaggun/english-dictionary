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
  {{meaning.partOfSpeech}}
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