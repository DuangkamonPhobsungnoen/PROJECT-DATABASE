<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();

const genId = ref('')

</script>

<template>
  <!-- <h1>{{ movieStore.dbanime }}</h1> -->
      <div class="column is-three-fifths is-offset-one-fifth">
    <div class="columns">
        <div class="column has-text-centered pt-4 is-size-5">
            <b><p class="is-size-4">movie</p></b>
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
        <button class="button color-background-purple-3 has-text-white" @click="movieStore.filteranime(genId)">
          CHECK
        </button>
      </div>
    </div>
  </div>
</template>