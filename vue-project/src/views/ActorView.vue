<template>
<h1>{{dirStore.movPerActor}} 5555</h1>
  <!-- <Profile/>
  card รอข้อมูลจาก DB
  <MovieCard ></MovieCard> -->
</template>

<script setup>
import Profile from "../components/Actor/actorprofile.vue"
import MovieCard from '../components/MovieCard.vue';
import { computed, ref, reactive, onMounted } from "vue";
import { useDirectorStore } from "@/stores/director"
import { useRoute } from "vue-router";
const dirStore = useDirectorStore()
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  // movieStore.singleMovie = await movieStore.fetchSingleMovie(id)
  // detailStore.arrWatch = await detailStore.getWatchList(signInStore.logingUser.u_id)
  dirStore.movPerActor = await dirStore.fetchActor(id)
}
)

</script>

