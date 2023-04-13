<script setup>
import DetailMovie from "../components/Detail/DetailMovie.vue";
import Comment from "../components/Detail/CommentEdit.vue";
import Review from "../components/Detail/ReviewComment.vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../stores/movie";
import { useReviewStore } from "../stores/review";
import { onMounted, } from "vue";
import { useSignInStore } from "../stores/signin";
import { useDetailMovieStore } from "../stores/detailMovie";
const movieStore = useMovieStore()
const reviewStore = useReviewStore()
const signInStore = useSignInStore()
const detailStore = useDetailMovieStore()
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  movieStore.singleMovie = await movieStore.fetchSingleMovie(id)
  // detailStore.arrWatch = await detailStore.getWatchList(signInStore.logingUser.u_id)
  reviewStore.rev_Movie = await reviewStore.fetchReview(id),
  detailStore.checkAdd = await detailStore.checkStateWatch(signInStore.logingUser.u_id, parseInt(id))


})
</script>

<template>
  <!-- <h1>{{ detailStore.arrWatch }}</h1> -->
  <!-- <div @click="detailStore.getWatchList(signInStore.logingUser.u_id)" class="button">click show wathclist</div> -->
  <h1>{{id}}</h1>
  <h1>{{ movieStore.singleMovie }}</h1>

  <h1>{{ signInStore.logingUser.u_id }} id user jaa</h1>

  <h1>test check {{ detailStore.checkAdd}}</h1>
  <DetailMovie 
  :checkState="detailStore.checkAdd"
  :singleMov="movieStore.singleMovie">
  </DetailMovie>
  <!-- <h1>{{  JSON.stringify(signInStore.logingUser) === '{}' }}</h1>
  <h1>{{ signInStore.logingUser }}</h1> -->
  <Comment v-if="JSON.stringify(signInStore.logingUser) !== '{}'"></Comment>

<!-- <h1>{{ movieStore.rev_Movie }}</h1> -->
  <Review  v-for="item in reviewStore.rev_Movie" :item="item"></Review>
</template>
