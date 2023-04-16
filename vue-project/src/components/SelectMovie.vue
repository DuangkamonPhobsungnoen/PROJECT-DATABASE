<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();

const genId = ref(0)

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
            <option value="0">Genres</option>
            <option value="2">Drama</option>
            <option value="5">Romance</option>
            <option value="3">Thriller</option>
            <option value="6">Adventure</option>
            <option value="7">Action</option>
            <option value="8">Sci-fi</option>
            <option value="9">Horror</option>
            <option value="1">Comedy</option>
            <option value="4">Fantasy</option>
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
        <button class="button color-background-purple-3 has-text-white" @click="movieStore.filtermov(parseInt(genId))">
          CHECK
        </button>
      </div>
    </div>
  </div>
</template>