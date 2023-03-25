<script setup>
import MovieCard from '../../components/MovieCard.vue';
import SearchMovie from '../../components/SearchMovie.vue';
</script>

<template>
    <SearchMovie message="Series"></SearchMovie>
    <router-link to="/detailview">
    <MovieCard title="The Grand Budapest Hotel" rating="9.5"></MovieCard>
    </router-link>
    
</template>
