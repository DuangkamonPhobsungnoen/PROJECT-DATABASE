<template>
  <!-- วอชลิส รอเอาจากดาต้าเบส -->
  <!-- <h1>{{ list }}</h1> -->
  <div class="task-container columns is-multiline px-6 py-6">
        <MovieCard v-for="item in list" :item="item"></MovieCard>
  </div>
  <!-- <h1>{{ detailStore.arrWatch }}</h1> -->
</template>

<script setup>
import MovieCard from '../MovieCard.vue';
import { useDetailMovieStore } from "../../stores/detailMovie";
import { onMounted, } from "vue";
import { useRoute } from "vue-router";
defineProps({
    list: Array
})
// const detailStore = useDetailMovieStore()
// const route = useRoute()
// const {id} = route.params
// onMounted(detailStore.getWatchList(parseInt(id)))
</script>