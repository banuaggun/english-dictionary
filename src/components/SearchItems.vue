<script setup>
const props = defineProps({
  searchData: {
    required: true,
  },
});

let soundPlaying = false;

const playPauseAudio = () => {
  !soundPlaying ? playAudio() : pauseAudio();
};

const playAudio = () => {
  soundPlaying = true;
  document.querySelector("audio").play();
  document.querySelector("#audio-icon").classList.remove("fa-play");
  document.querySelector("#audio-icon").classList.add("fa-pause");
};

const pauseAudio = () => {
  soundPlaying = false;
  document.querySelector("audio").pause();
  document.querySelector("#audio-icon").classList.remove("fa-pause");
  document.querySelector("#audio-icon").classList.add("fa-play");
};

const removeAudio = () => {
  document.querySelector("#audio-icon").classList.remove("fa-pause");
  document.querySelector("#audio-icon").classList.add("fa-play");
};
</script>
<template>
  <div class="items">
    <!-- phonetic text and audio phonetics area -->
    <div class="items-word-phonetic-audio">

      <div class="items-word-phonetic">
        <!-- word phonetic area -->

        <div class="items-word">
          <h1>{{ searchData[0].word }}</h1>
          <!-- word area -->
        </div>

        <div class="items-phonetic">
          <p v-if="searchData[0].phonetic || searchData[0].word">
            {{ searchData[0].phonetic || searchData[0].word }}
            <!-- phonetic text area -->
          </p>
        </div>
        
      </div>
    
      <div class="items-audio">
        <div v-if="searchData[0].phonetics.length">
          <audio @ended="removeAudio"
              :src="
                  searchData[0].phonetics[0].audio ||
                  searchData[0].phonetics[1].audio ||
                  searchData[0].phonetics[2].audio
              "
          ></audio>
        </div>
        <button v-if="searchData[0].phonetics.length" type="button" @click="playPauseAudio" class="items-audio-button">
          <i
            id="audio-icon"
            class="fa-solid fa-play | text-[1.25rem] text-primary_clr md:text-[1.5rem]"
          ></i>
        </button>
      </div>
    </div>

    <div 
      v-for="meaning in searchData[0].meanings" 
      :key="meaning"
      class="items-meaning"
    >
      <h5 class="items-meaning-type">
        {{ meaning.partOfSpeech }}
      </h5>
      <ul role="list" class="items-list">
        <li
          v-for="definitionData in meaning.definitions"
          :key="definitionData"
        >
          <p> 
            {{ definitionData.definition }} 
          </p>
          <span v-if="definitionData.example">
            <b><i>Example:</i></b> "{{ definitionData.example }}"
          </span>
        </li>
        <li class="items-synonyms"> 
          <span v-if="meaning.synonyms[0]">
            <b><i>Synonyms:</i></b> {{meaning.synonyms[0]}}
          </span>
        </li>
        <li class="items-antonyms"> 
          <span v-if="meaning.antonyms[0]">
            <b><i>Antonyms:</i></b> {{meaning.antonyms[0]}}
          </span>
        </li>
        <li class="items-source"> 
          <span>
            <b><i>Source:</i></b> <a :href="searchData[0].sourceUrls[0]" target="_blank">
                {{searchData[0].sourceUrls[0]}}  <i class="fa-solid fa-arrow-up-right-from-square | text-[0.8125rem] ml-1"></i>
          </a>
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
  .items-word-phonetic-audio{
    margin:10px 0;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  .items-word-phonetic{
    display:flex;
    flex-direction: column;
  }
  .items-audio-button{
    width:60px;
    height:60px;
    padding:20px;
    font-size:1.5rem;
  }
  .items-audio-button:after{
    top:7%;
    left:7%;
    width:85%;
    height:85%;
  }
}
@media only screen and (min-width:601px) and (max-width:1921px){
  .items-word-phonetic-audio{
    width:100%;
    margin:20px 0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
  }
  .items-word-phonetic{
    display:flex;
    flex-direction:row !important;
    align-items:center;
    justify-content: space-between;
    width:calc(100% - (100% / 2));
  }
}
</style>
