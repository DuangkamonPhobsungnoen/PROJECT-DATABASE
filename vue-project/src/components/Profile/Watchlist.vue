<template>
  วอชลิส รอเอาจากดาต้าเบส
  <h1>{{ detailStore.arrWatch }}</h1>
</template>

<script setup>
import MovieCard from '../MovieCard.vue';
import { useDetailMovieStore } from "../../stores/detailMovie";
import { onMounted, } from "vue";
import { useRoute } from "vue-router";

const detailStore = useDetailMovieStore()
const route = useRoute()
const {id} = route.params
onMounted(detailStore.getWatchList(parseInt(id)))
</script>