<script setup>
import MovieCard from '../../components/MovieCard.vue';
import SelectMovie from '../../components/SelectMovie.vue';
import { useMovieStore } from "../../stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
const movieStore = useMovieStore();
onMounted(movieStore.fetchAnime, movieStore.refresh);
</script>

<template>
    <!-- <h1>{{ movieStore.dbanime[0].gen_title }}</h1> -->
    
    <SelectMovie message="Animes"></SelectMovie>
        <h1 class="has-text-centered is-size-4 p-6">{{movieStore.text}}</h1>
        <div class="task-container columns is-multiline px-6 py-6">
            <MovieCard v-for="item in movieStore.filAnime" :item="item" ></MovieCard>
        </div>
    
</template>
