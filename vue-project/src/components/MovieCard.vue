<script setup>
import { computed } from "vue";
defineProps({
    item: Object
})

</script>
<template>
    <!-- <div class="task-container columns is-multiline px-6 py-6"> -->

    <div class="column is-3 px-5">
        <router-link :to="{ name: 'detail', params: { id: parseInt(item.mov_id) } }">
            <div class="card color-background-purple-2 has-text-white" style="border-radius: 30px;">
                <div class="card-image ">
                    <figure class="image is-4by5">
                        <img :src="item.mov_pic"
                            alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">{{ item.mov_title }}</p>
                            <p class="text_img_center pt-5">
                                <img
                                    src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20">
                                <span>{{ item.mov_rate.toFixed(1) }}</span><br>
                                

                            </p>
                            <span> ให้เอาไป filter :  {{ item.gen_title}}</span>
                        </div>
                    </div>
                </div>
            </div>

        </router-link>
    </div>
    <!-- </div> -->
</template>
<style></style>