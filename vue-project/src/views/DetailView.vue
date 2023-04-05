<script setup>
import DetailMovie from "../components/Detail/DetailMovie.vue";
import Comment from "../components/Detail/CommentEdit.vue";
import Review from "../components/Detail/ReviewComment.vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../stores/movie";
import { useReviewStore } from "../stores/review";
import { onMounted, } from "vue";
import { useSignInStore } from "../stores/signin";
const movieStore = useMovieStore()
const reviewStore = useReviewStore()
const signInStore = useSignInStore()
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  movieStore.singleMovie = await movieStore.fetchSingleMovie(id)
  reviewStore.rev_Movie = await reviewStore.fetchReview(id)

})
</script>

<template>
  <h1>{{id}}</h1>
  <h1>{{ movieStore.singleMovie }}</h1>
  <DetailMovie 
  title="Avatar: the way of water" 
  trailor="https://www.youtube.com/embed/d9MyW72ELq0"
  poster="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O8usiIS7L.jpg"
  category="Action , Adventure , Fantasy"
  rating=9.5
  review=125
  director="James Cameron"
  actor="Samuel Henry J. / Zoe Saldana / Susan Alexandra"
  description="Jake Sully lives with his newfound family formed on the extrasolar
          moon Pandora. Once a familiar threat returns to finish what was
          previously started, Jake must work with Neytiri and the army of the
          Na'vi race to protect their home.">
  </DetailMovie>
  <!-- <h1>{{  JSON.stringify(signInStore.logingUser) === '{}' }}</h1>
  <h1>{{ signInStore.logingUser }}</h1> -->
  <Comment v-if="JSON.stringify(signInStore.logingUser) !== '{}'"></Comment>

<!-- <h1>{{ movieStore.rev_Movie }}</h1> -->
  <Review  v-for="item in reviewStore.rev_Movie" :item="item"></Review>
</template>
