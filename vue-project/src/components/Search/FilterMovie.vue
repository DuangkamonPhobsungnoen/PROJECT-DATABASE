<template>
    <h1>search : "{{ movieStore.searchInput }}"</h1>
  <h1>{{  movieStore.testSearch }}</h1>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();

// onMounted(movieStore.test555)
</script>

<style>

</style>