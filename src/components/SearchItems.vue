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
    

    

    <!-- phonetic text and audio phonetics area -->
    <div class="word-phonetic-audio">
        <div>
        <h1>{{ searchData[0].word }}</h1>
        <!-- word area -->
    </div>
    <div>
        <span v-if="searchData[0].phonetic || searchData[0].word">
            {{ searchData[0].phonetic || searchData[0].word }}
            <!-- phonetic text area -->
        </span>
    </div>
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

    <div v-for="meaning in searchData[0].meanings" :key="meaning">
        <span>{{ meaning.partOfSpeech }}</span>
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
h1 {
    text-transform: capitalize;
    font-weight: 800;
    font: 36px;
}

span {
    text-transform: capitalize;
    font-weight: 600;
}

ul li {
    padding: 8px;
    border: 1px solid red;
    margin-bottom: 10px;
    line-height: 1.3;
}
.word-phonetic-audio{
    border:1px solid green;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:20px 0 20px 0;
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
</style>
