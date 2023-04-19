<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();

const genId = ref('')
defineProps({
    message: String
})
</script>

<template>
  <!-- {{ message }} -->
  <!-- <h1>{{ movieStore.dbanime }}</h1> -->
      <div class="column is-three-fifths is-offset-one-fifth">
    <div class="columns">
        <div class="column has-text-centered pt-4 is-size-5">
            <b><p class="is-size-4">{{ message }}</p></b>
        </div>
      <div class="column">
        <div class="select">
          <select class="editselect" v-model="genId">
            <option value="Genres">Genres</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="select">
          <select class="editselect">
            <option>Sort</option>
            <option>A-Z</option>
            <option>Year</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      <div class="column">
        <button v-if="message == 'Animes'" class="button color-background-purple-3 has-text-white" @click="movieStore.filteranime(genId)">
          CHECK {{ message }}
        </button>
        <button v-if="message == 'Series'" class="button color-background-purple-3 has-text-white" @click="movieStore.filterseries(genId)">
          CHECK {{ message }}
        </button>
        <button v-if="message == 'Movies'" class="button color-background-purple-3 has-text-white" @click="movieStore.filtermovie(genId)">
          CHECK {{ message }} 
        </button>
      </div>
    </div>
  </div>
</template>