<script setup>
import { useReviewStore } from "@/stores/review";
import { computed, ref, reactive, onMounted } from "vue";
const reviewStore = useReviewStore();

onMounted(reviewStore.reviewShow);
</script>

<template>
    <router-link to="/reviewsview">
  <div class="task-container columns is-multiline px-6">
    <div
      class="column is-4 p-6"
      v-for="item in reviewStore.revShow?.slice(0, 3)"
    >
      <div
        class="card color-background-purple-2 has-text-white"
       
      >
        <div class="card-image">
          <figure class="image is-1by1">
            <img :src="item.mov_pic" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="is-size-6"><b>{{ item.mov_title }}</b></p>
            </div>
          </div>

          <div class="">
            <span class="linemax1">{{ item.rev_text }}</span>
            <p class="pt-5">
              <span class=""> {{ item.u_user_name }}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Like {{ item.rev_like }} ❤</span>
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div></router-link>
</template>

<style></style>
