<script setup>
import SearchMovie from '../../components/SearchMovie.vue';
import TrendindCardVue from '../../components/trending/TrendindCard.vue';
</script>

<template>
    <SearchMovie message="Trending"></SearchMovie>
    <div class="has-text-centered p-6"><b class="is-size-3 ">TRENDING</b></div>
    <TrendindCardVue></TrendindCardVue>
</template>
