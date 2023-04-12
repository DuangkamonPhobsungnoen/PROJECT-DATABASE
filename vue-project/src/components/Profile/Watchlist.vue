<template>
  <div class="task-container columns is-multiline px-6 py-6">
        <MovieCard v-for="item in list" :item="item"></MovieCard>
  </div>
  <!-- <h1>{{ detailStore.arrWatch }}</h1> -->
</template>

<script setup>
import MovieCard from '../MovieCard.vue';
defineProps({
    list: Array
})
</script>