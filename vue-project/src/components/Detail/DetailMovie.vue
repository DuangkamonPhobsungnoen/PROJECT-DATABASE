<script setup>
import { useDetailMovieStore } from "@/stores/detailMovie";
import { useSignInStore } from "@/stores/signin";
import { useRoute } from "vue-router";
const signInStore = useSignInStore()
const detailStore = useDetailMovieStore()
const route = useRoute()
const {id} = route.params

defineProps({
    checkState: Boolean
})
// const toggle = checkState;

</script>

<template>
  <div class="my-6">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/d9MyW72ELq0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <!-- Poster -->
    <div class="columns my-6">
      <div class="column is-3">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O8usiIS7L.jpg"
          alt=""
        />
      </div>

    <!-- Detail -->
      <div class="column ml-6">
        <h1 class="title has-text-white">title</h1>
        <h3 class="my-4">category</h3>
        <div class="columns my-4">
          <p class="column is-2">⭐️ rating</p>
          <p class="column is-2">💬 comment</p>
          <!-- watch list -->
          <p v-if="!checkState" @click=" checkState = !checkState, detailStore.addWatchList(signInStore.logingUser.u_id,parseInt(id))" class="column is-2 button">🎞 watchlist</p>
          <p v-else @click="checkState = !checkState, detailStore.delWatchList(signInStore.logingUser.u_id,parseInt(id))" class="column is-2 button">🎞 added</p>
        </div>
        <p class="my-4"><b>Director</b> director</p>
        <p class="my-4"><b>Actor</b>actor</p>
        <p class="my-4">description</p>
      </div>
    </div>
  </div>
</template>