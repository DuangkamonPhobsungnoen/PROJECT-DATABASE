<script setup>
import MovieCard from '../../components/MovieCard.vue';
import SelectMovie from '../../components/SelectMovie.vue';
import { useMovieStore } from "../../stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();
onMounted(movieStore.fetchSeries, movieStore.refresh);
</script>

<template>
  <SelectMovie message="Series"></SelectMovie>
<h1 class="has-text-centered is-size-4 p-6">{{movieStore.text1}}</h1>

  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.filseries" :item="item"></MovieCard>
  </div>
</template>
