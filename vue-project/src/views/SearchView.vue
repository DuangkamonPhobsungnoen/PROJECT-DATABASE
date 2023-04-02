<template>
    <!-- <p>EIEI</p> -->
  <router-link to="/searchview"><MessText message="TITLE"></MessText></router-link>
    <MovieCard />
  <router-link to="/searchview"><MessText message="PEOPLE"></MessText></router-link>
    <ActorCard />
</template>

<script>
export default {

}
</script>

<script setup>
import MessText from '../components/MessText.vue';
import MovieCard from '../components/MovieCard.vue';
import ActorCard from '../components/ActorCard.vue';
</script>

<style>

</style>