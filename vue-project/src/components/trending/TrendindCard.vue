<script setup>
import { useMovieStore } from "@/stores/movie";
import { onMounted } from "vue";
const movieStore = useMovieStore()
onMounted(movieStore.fetchTrending)
</script>

<template>
    
    <div class="task-container columns is-multiline px-6">
        
        <div class="column is-4 p-5" v-for="(item, index) in movieStore.allTrending" >
            <div class="is-size-2 has-text-centered pb-6" style="font-family: 'Bungee Inline', cursive;">{{ index+1 }}</div>
            <div class="card color-background-purple-2 has-text-white" style="border-radius: 35px;">
                <div class="card-image  ">
                    <figure class="image is-square ">
                        <img :src="item.mov_pic" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">{{ item.mov_title }}</p>
                            <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20">
                            <span class="pl-2">{{ item.mov_rate }}</span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>