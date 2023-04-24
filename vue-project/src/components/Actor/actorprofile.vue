<template>
  <div class="has-text-centered my-6">
    <h1 class="is-size-4 has-text-weight-bold">act_fname act_lname</h1>
    <h1>{{dirStore.movPerActor}}</h1>
    <!-- <h1 class="is-size-4 has-text-weight-bold">{{ item.act_fname }} {{ item.act_lname }}</h1> -->
  </div>
</template>

<script setup>
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
