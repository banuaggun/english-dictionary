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
  <div class="page-area">
    <!-- phonetic text and audio phonetics area -->
    <div class="word-phonetic-audio">

      <div class="word-phonetic">
        <!-- word phonetic area -->

        <div class="word">
          <h1>{{ searchData[0].word }}</h1>
          <!-- word area -->
        </div>

        <div class="phonetic">
          <p v-if="searchData[0].phonetic || searchData[0].word">
            {{ searchData[0].phonetic || searchData[0].word }}
            <!-- phonetic text area -->
          </p>
        </div>
        
      </div>
    
      <div class="audio">
        <div v-if="searchData[0].phonetics.length">
          <audio @ended="removeAudio"
              :src="
                  searchData[0].phonetics[0].audio ||
                  searchData[0].phonetics[1].audio ||
                  searchData[0].phonetics[2].audio
              "
          ></audio>
        </div>
        <button v-if="searchData[0].phonetics.length" type="button" @click="playPauseAudio">
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
      class="meaning"
    >
      <h5 class="meaning-type">
        {{ meaning.partOfSpeech }}
      </h5>
      <ul role="list">
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
        <li class="synonyms"> 
          <span v-if="meaning.synonyms[0]">
            <b><i>Synonyms:</i></b> {{meaning.synonyms[0]}}
          </span>
        </li>
        <li class="antonyms"> 
          <span v-if="meaning.antonyms[0]">
            <b><i>Antonyms:</i></b> {{meaning.antonyms[0]}}
          </span>
        </li>
        <li class="source"> 
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
.page-area{
  border:1px solid #dcdcdc;
  width:100%;
  min-height:100vh;
  margin:20px auto;
  padding:0 20px;
  border-radius: 12px;
  box-shadow:-1px 2px 3px #dcdcdc;
}
.synonyms,
.antonyms{
  text-transform: capitalize;
}
h1,
.meaning-type {
  text-transform: capitalize;
}
.phonetic {
  font-weight: 500;
}
.word-phonetic-audio{
  width:100%;
}
.word-phonetic{
  margin:15px 0;
}
ul > li {
  margin-bottom: 10px;
  line-height:1.3;
}
ul > li > p{
  letter-spacing: 0.2px;
  padding:8px 4px;
}

ul > li > span{
  display:block;
  padding:8px 12px;
}

button{
  position: relative;
  width:90px;
  height:90px;
  display:flex;
  align-items:center;
  justify-content: center;
  padding: 20px;
  color: steelblue;
  font-size:2rem;
  border:3px solid steelblue;
  border-radius: 50%;
}

button:after{
  content:"";
  position:absolute;
  top:7%;
  left:7%;
  border-radius:50%;
  border-top:1px solid transparent;
  border-right:1px solid steelblue;
  border-bottom:1px solid transparent;
  border-left:1px solid steelblue;
  width: 85%;
  height:85%;
  transition: border 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86), transform 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform: rotate(45deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
button:hover:after{
  border:1px solid steelblue;
  transform:rotate(135deg);
  cursor:pointer;
}

@media only screen and (min-width:300px) and (max-width:600px){
  .word-phonetic-audio{
    margin:10px 0;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  .word-phonetic{
    display:flex;
    flex-direction: column;
  }
  button{
    width:60px;
    height:60px;
    padding:20px;
    font-size:1.5rem;
  }
  button:after{
    top:7%;
    left:7%;
    width:85%;
    height:85%;
  }
}
@media only screen and (min-width:601px) and (max-width:1921px){
  .word-phonetic-audio{
    width:100%;
    margin:20px 0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
  }
  .word-phonetic{
    display:flex;
    flex-direction:row !important;
    align-items:center;
    justify-content: space-between;
    width:calc(100% - (100% / 2));
  }
}
</style>
