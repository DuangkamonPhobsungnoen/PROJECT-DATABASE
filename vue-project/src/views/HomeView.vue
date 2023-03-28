<script setup>
import MessText from '../components/MessText.vue';
import MiniReviewCard from '../components/Home/MiniReviewCard.vue';
import Recommend from '../components/Home/Recommend.vue';
import MovieCard from '../components/MovieCard.vue';

// import { computed, ref, reactive } from "vue";
// import axios from 'axios';

// const test = ref([])

// const fetch = async () => {
//         const fetchingData = await axios.get('http://localhost:3000')
//         test.value = fetchingData.data;
//       }

</script>

<template>
    <div>
        <h1>{{ test }}</h1>
    </div>
    <section class="hero px-6 py-6">
        <img
            src="https://media.discordapp.net/attachments/1087447051387813909/1087464977876668508/poster.png?width=1117&height=537">
    </section>
    <MessText message="Review"></MessText>
    <MiniReviewCard></MiniReviewCard>
    <Recommend></Recommend>
    <router-link to="/animesview"><MessText message="ANIME"></MessText></router-link>
    <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard>
    <router-link to="/moviesview"><MessText message="MOVIE"></MessText> </router-link>
    <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard>
    <router-link to="/seriesview"><MessText message="SERIRES"></MessText></router-link>
    <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard>
    <router-link to="/trendingview"><MessText message="TRENDING"></MessText></router-link>
    <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard>
    
</template>
