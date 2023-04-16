<script setup>
import { useReviewStore } from "@/stores/review";
import { computed, ref, reactive, onMounted } from "vue";
const reviewStore = useReviewStore()

onMounted(reviewStore.reviewShow)


</script>

<template>
  <!-- <h1>{{ reviewStore.revShow }}</h1> -->
  <div class="has-text-centered p-6"><b class="is-size-3">REVIEWS</b></div>
  <div class="p-3" v-for="item in reviewStore.revShow"  @click="show = !show">
    <div
      class="card has-text-white color-background-purple-2 column is-10 is-offset-1"
      style="border-radius: 25px; border: 1px solid white"
    >
      <div class="p-3">
        <div class="columns">
          <div class="column is-3">
            <figure>
              <img
                :src="item.mov_pic"
                width="150"
                height="150"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="media">
                <div class="media-content">
                  <p class="is-size-4">{{ item.mov_title }}</p>
                  <div class="text_img_center">
                    <!-- <img
                      src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20"
                    /> -->
                    <span class="pl-2">Like  {{ item.rev_like }} ❤</span>
                  </div>
                </div>
              </div>
              <div>
                {{ item.rev_text }}
                <p class="text_img_center pt-5">
                  <span>Review by {{ item.u_user_name }}</span>
                  
                </p>
                <p class="text_img_center ">
                  <span><small>{{ reviewStore.convertTime(item.create_at) }}</small></span>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="modal"
    style="background: hsla(0, 0%, 0%, 70%)"
    @click="show = !show"
    v-bind:class="{ 'is-active': show }"
  >
    <div class="p-3">
      <div
        class="card has-text-white color-background-purple-2 column is-8 is-offset-2"
        style="border-radius: 25px; border: 1px solid white"
      >
        <div class="p-6">
          <div class="columns">
            <div class="column is-3">
              <figure>
                <img
                  src="https://media.discordapp.net/attachments/1087447051387813909/1089255404921434122/535881e220a3792a1640a2e66e6c79b4_1.png?width=270&height=362"
                  width="400"
                  height="400"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="column">
              <div class="content">
                <div class="media">
                  <div class="media-content">
                    <p class="is-size-4">The Grand Budapest Hotel</p>
                    <div class="text_img_center">
                      <img
                        src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20"
                      />
                      <span class="pl-2">9.5</span>
                    </div>
                  </div>
                </div>
                <div>
                  สนุกเว่อแบบตัวแม่ ภาพสวยสับปังๆๆ นักแสดงแสดงดีมากรางวัลออสการ์
                  ต้องเข้าสักตัวแล้ว นักแสดงแสดงดีมากรางวัลออสการ์
                  นักแสดงแสดงดีมากรางวัลออสการ์ นักแสดงแสดงดีมากรางวัลออสการ์
                  รางวัลออสการ์ดูแล้วอยากดำน้ำดูปะการั..
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="has-text-right" style="position: relative; bottom: 20px">
          <span class="pr-5 subtitle is-5 has-text-white">dkm_ch</span>
          <img
            src="https://cdn.discordapp.com/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png"
            width="50"
            height="70"
            alt=""
            class="mr-6"
          />
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      show: false,
    };
  },
};
</script>
