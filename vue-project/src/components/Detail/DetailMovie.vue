<script setup>
import { useDetailMovieStore } from "@/stores/detailMovie";
import { useSignInStore } from "@/stores/signin";
import { useRoute } from "vue-router";
const signInStore = useSignInStore()
const detailStore = useDetailMovieStore()
const route = useRoute()
const {id} = route.params

defineProps({
    checkState: Boolean,
    singleMov: Object,
    cntRev: Array
})
// const toggle = checkState;

</script>

<template>
  <h1>{{ typeof checkState }}</h1>
  <!-- <h1>{{singleMov}}555</h1> -->
  <div class="my-6">
    <div class="myiframe"> 
      <iframe
      :src="singleMov.mov_trailer"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameborder="0" 
      allowfullscreen 
      class="video"
    ></iframe>
    </div>
    

    <!-- Poster -->
    <div class="columns my-6">
      <div class="column is-3">
        <img
          :src="singleMov.mov_pic"
          alt=""
        />
      </div>

    <!-- Detail -->
      <div class="column ml-6">
        <h1 class="title has-text-white">{{ singleMov.mov_title }}</h1>
        <h3 class="my-4">{{ singleMov.mov_type }}</h3>
        <div class="columns my-4">
          <p class="column is-2">⭐️ {{ singleMov.mov_rate }}</p>
          <p class="column is-2">💬 {{ cntRev.length }}  comment</p>
          <!-- watch list -->
          <p v-if="!checkState" @click=" checkState = !checkState, detailStore.addWatchList(signInStore.logingUser.u_id,parseInt(id))" class="column is-2 button is-info is-outlined"><i class="fa fa-solid fa-circle has-text-left" style="color: #e81717;"></i> watchlist</p>
          <p v-else @click="checkState = !checkState, detailStore.delWatchList(signInStore.logingUser.u_id,parseInt(id))" class="column is-2 button is-focused is-warning"><i class="fa fa-solid fa-circle has-text-left" style="color: #25e817;"></i> added</p>
        </div>
        <p class="my-4"><b>Director</b> director</p>
        <p class="my-4"><b>Actor</b> actor</p>
        <p class="my-4">{{ singleMov.mov_summary }}</p>
      </div>
    </div>
  </div>
</template>