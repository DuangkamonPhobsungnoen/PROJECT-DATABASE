<script setup>
import MessText from '../components/MessText.vue';
import MiniReviewCard from '../components/Home/MiniReviewCard.vue';
import Recommend from '../components/Home/Recommend.vue';
import MovieCard from '../components/MovieCard.vue';
import { useMovieStore } from "../stores/movie";
import { useSignInStore } from "../stores/signin";
import { computed, ref, reactive, onMounted } from "vue";
const signInStore = useSignInStore()
const movieStore = useMovieStore()
onMounted(movieStore.fetchMovie)
onMounted(movieStore.fetchAnime)
onMounted(movieStore.fetchSeries)

</script>

<template>
    <div>
     <button >
        click
     </button>
        <h1>{{ signInStore.logingUser }}</h1>
        

        <h1>{{ movieStore.dbmovie }}</h1>
    </div>
<section class="hero px-6 py-6">
    <img
        src="https://media.discordapp.net/attachments/1087447051387813909/1087464977876668508/poster.png?width=1117&height=537">
</section>
<MessText message="Review"></MessText>
    <MiniReviewCard></MiniReviewCard>
    <Recommend></Recommend>

    <router-link to="/animesview">
            <MessText message="ANIME"></MessText>
        </router-link>
        <div class="task-container columns is-multiline px-6 py-6">
            <MovieCard v-for="item in movieStore.dbanime" :item="item" ></MovieCard>
        </div>

    <router-link to="/moviesview">
        <MessText message="MOVIE"></MessText> 
    </router-link>
        <div class="task-container columns is-multiline px-6 py-6">
            <MovieCard v-for="item in movieStore.dbmovie" :item="item" ></MovieCard>
        </div>

    <router-link to="/seriesview">
        <MessText message="SERIRES"></MessText>
    </router-link>
    <div class="task-container columns is-multiline px-6 py-6">
        <MovieCard v-for="item in movieStore.dbseries" :item="item"></MovieCard>
    </div>


    <!-- <router-link to="/trendingview"><MessText message="TRENDING"></MessText></router-link>
    
            <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard> -->
</template>

