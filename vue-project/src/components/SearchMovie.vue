<script setup>
import { useMovieStore } from "@/stores/movie";
const movieStore = useMovieStore()


</script>

<template>
  <!-- <h1>{{ movieStore.selectTrend }}</h1> -->
  <div class="column is-three-fifths is-offset-one-fifth">
    <div class="columns">
        <div class="column has-text-centered pt-4 is-size-5">
            <b><p class="is-size-4">Trending</p></b>
        </div>
      <div class="column">
        <div class="select">
          <select v-model="movieStore.selectTrend"  class="editselect">
            <option>All</option>
            <option>anime</option>
            <option>movie</option>
            <option>series</option>
          </select>
        </div>
      </div>
      <div class="column">
        <button @click="movieStore.fetchSelectTrend()" class="button color-background-purple-3 has-text-white">
          CHECK
        </button>
      </div>
    </div>
  </div>
</template>



<style>
</style>