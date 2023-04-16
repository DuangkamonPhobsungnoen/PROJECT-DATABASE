<script setup>
import MovieCard from '../../components/MovieCard.vue';
import SelectMovie from '../../components/SelectMovie.vue';
import { useMovieStore } from "../../stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();
onMounted(movieStore.fetchMovie);
</script>

<template>
  <SelectMovie message="Movies"></SelectMovie>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.dbmovie" :item="item"></MovieCard>
  </div>
</template>
