<template>
  <h1>{{ dirStore.movPerDir }}</h1>

  <!-- <h1 class="is-size-4 has-text-weight-bold has-text-centered">{{ dirStore.movPerDir[0].dir_fname }} {{ dirStore.movPerDir[0].dir_lname }}</h1> -->
  
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in dirStore.movPerDir" :item="item" ></MovieCard>
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue';
import { computed, ref, reactive, onMounted } from "vue";
import { useDirectorStore } from "@/stores/director"
import { useRoute } from "vue-router";
const dirStore = useDirectorStore()
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  // movieStore.singleMovie = await movieStore.fetchSingleMovie(id)
  // detailStore.arrWatch = await detailStore.getWatchList(signInStore.logingUser.u_id)
  dirStore.movPerDir = await dirStore.fetchDir(id)
}
)
</script>
