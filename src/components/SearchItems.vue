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

    <!-- audio phonetics area -->
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
</style>
