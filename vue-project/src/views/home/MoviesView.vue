<script setup>
import MovieCard from '../../components/MovieCard.vue';
import SelectMovie from '../../components/SelectMovie.vue';
import { useMovieStore } from "../../stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();
onMounted(movieStore.fetchMovie, movieStore.refresh);
</script>

<template>
  <SelectMovie message="Movies"></SelectMovie>
  <h1 class="has-text-centered is-size-4 p-6">{{movieStore.text2}}</h1>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.filmovie" :item="item"></MovieCard>
  </div>
</template>
