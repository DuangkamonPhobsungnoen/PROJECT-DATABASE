<template>
  <h1 class="is-size-2 has-text-weight-bold has-text-centered m-5">
    Search "{{ movieStore.searchInput }}"
  </h1>
  <MessText message="TITLE"></MessText>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard
      v-for="item in movieStore.testSearch.movie"
      :item="item"
    ></MovieCard>
  </div>

  <MessText message="ACTOR"></MessText>
  <div class="task-container is-multiline px-6 py-6">
    <ActorSearch
      v-for="item in movieStore.testSearch.actor"
      :item="item"
    ></ActorSearch>
     </div>
  <MessText message="DIRETOR"></MessText>
  <div class="task-container is-multiline px-6 py-6">
    <DirectorSearch
      v-for="item in movieStore.testSearch.dir"
      :item="item"
    ></DirectorSearch>
     </div>

  <h1>{{ movieStore.testSearch }}</h1>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
import MessText from "@/components/MessText.vue";
import MovieCard from "@/components/MovieCard.vue";
import ActorSearch from "@/components/Search/ActorSearch.vue";
import DirectorSearch from "@/components/Search/DirectorSearch.vue";
const movieStore = useMovieStore();

// onMounted(movieStore.test555)
</script>

<style>
</style>