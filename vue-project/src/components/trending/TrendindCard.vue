<script setup>
import { useMovieStore } from "@/stores/movie";
import { onMounted } from "vue";
const movieStore = useMovieStore()
onMounted(movieStore.fetchTrending)
</script>

<template>
    
    <div class="task-container columns is-multiline px-6">
        <div class="column is-4 p-5" v-for="(item, index) in movieStore.allTrending" >
            <div class="is-size-2 has-text-centered pb-6" style="font-family: 'Bungee Inline', cursive;">{{ index+1 }} </div>
            <div class="card color-background-purple-2 has-text-white" >
                <div class="card-image ">
                    <figure class="image is-3by4">
                        <img :src="item.mov_pic" alt="Placeholder image">
                    </figure>
                </div>
                <p class="is-size-6 has-background-black has-text-centered">{{ item.mov_title }}</p>
            </div>
        </div>
    </div>
</template>

<style>
</style>