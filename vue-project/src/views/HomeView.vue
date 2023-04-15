<script setup>
import MessText from "../components/MessText.vue";
import MiniReviewCard from "../components/Home/MiniReviewCard.vue";
import Recommend from "../components/Home/Recommend.vue";
import Banner from "../components/Home/Banner.vue";
import MovieCard from "../components/MovieCard.vue";
import { useMovieStore } from "../stores/movie";
import { useSignInStore } from "../stores/signin";
import { computed, ref, reactive, onMounted } from "vue";
const signInStore = useSignInStore();
const movieStore = useMovieStore();
onMounted(movieStore.fetchMovie);
onMounted(movieStore.fetchAnime);
onMounted(movieStore.fetchSeries);
</script>

<template>
  <!-- <div>
     <button >
        click
     </button>
        <h1>{{ signInStore.logingUser }}</h1>
        

        <h1>{{ movieStore.dbmovie }}</h1>
    </div> -->
    <!-- <h1>{{ movieStore.dbanime }}</h1> -->
  <Banner class="py-6"></Banner>
  <MessText message="Review"></MessText>
  <MiniReviewCard></MiniReviewCard>
  <Recommend></Recommend>

  <router-link to="/animesview">
    <MessText message="ANIME"></MessText>
  </router-link>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.dbanime?.slice(0,4)" :item="item" ></MovieCard>
  </div>

  <router-link to="/moviesview">
    <MessText message="MOVIE"></MessText>
  </router-link>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.dbmovie?.slice(0,4)" :item="item"></MovieCard>
  </div>

  <router-link to="/seriesview">
    <MessText message="SERIRES"></MessText>
  </router-link>
  <div class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.dbseries?.slice(0,4)" :item="item"></MovieCard>
  </div>

  <!-- <router-link to="/trendingview"><MessText message="TRENDING"></MessText></router-link>
    
            <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard> -->
</template>
