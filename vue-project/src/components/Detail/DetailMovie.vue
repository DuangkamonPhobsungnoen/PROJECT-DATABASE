<script setup>
import { useDetailMovieStore } from "@/stores/detailMovie";
import { useSignInStore } from "@/stores/signin";
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movie";
import { onMounted, } from "vue";
const signInStore = useSignInStore();
const detailStore = useDetailMovieStore();
const movieStore  = useMovieStore()
const route = useRoute();
const { id } = route.params;
onMounted(async () => {
  movieStore.singleMovie = await movieStore.fetchSingleMovie(id)
  movieStore.fetchSingleActor = await movieStore.fetchSingleMovieActor(id)
})


defineProps({
  checkState: Boolean,
  cntRev: Array,
});
// const toggle = checkState;
</script>

<template>
  <h1>5555</h1>
  <!-- <h1>{{ movieStore.singleMovie }} </h1>
  <h1>{{ movieStore.singleMov?.actor }} </h1> -->

  <!-- <h1>{{  movieStore.singleMovie.mov_trailer}}</h1>
  <h1>{{  movieStore.fetchSingleActor}}</h1> -->
  <!-- <h1>{{singleMov}}</h1> -->
  <div class="my-6">
    <div class="myiframe">
      <iframe
        :src="movieStore.singleMovie?.mov_trailer"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameborder="0"
        allowfullscreen
        class="video"
      ></iframe>
    </div>

    
    <div class="columns my-6">
      <div class="column is-3">
        <img :src="movieStore.singleMovie?.mov_pic" alt="" />
      </div>

      <div class="column ml-6">
        <h1 class="title has-text-white">{{ movieStore.singleMovie.mov_title }}</h1>
        <h3 class="my-4">{{ movieStore.singleMovie?.mov_type }}</h3>
        <div class="columns my-4">
          <p class="column is-2">⭐️ {{ movieStore.singleMovie?.mov_rate }}</p>
          <p class="column is-2">💬 {{ cntRev.length }}</p>

          <p
            v-if="!checkState"
            @click="
              (checkState = !checkState),
                detailStore.addWatchList(
                  signInStore.logingUser.u_id,
                  parseInt(id))"
            class="column is-2 is-clickable is-warning is-outlined"
          >
            <i class="fa fa-solid fa-circle has-text-left"
              style="color: #FFC121"
            ></i>
            watchlist
          </p>
          <p
            v-else
            @click="
              (checkState = !checkState),
                detailStore.delWatchList(
                  signInStore.logingUser.u_id,
                  parseInt(id)
                )
            "
            class="column is-2 button is-focused is-warning"
          >
            <i
              class="fa fa-solid fa-circle has-text-left"
              style="color: #25e817"
            ></i>
            added
          </p>
        </div>
        <p class="my-4"><b>Director :</b> {{ movieStore.singleMovie.dir_fname }} {{ movieStore.singleMovie.dir_lname }} </p>
       
        <p class="my-4"> <b>Actor : </b>  
          <span v-for="actor in movieStore.fetchSingleActor">
             {{" " + actor.act_fname }} {{ actor.act_lname }} ,
          </span>
        </p>


        <p class="my-4">{{ movieStore.singleMovie?.mov_summary }}</p>
      </div>
    </div>
  </div>
</template>