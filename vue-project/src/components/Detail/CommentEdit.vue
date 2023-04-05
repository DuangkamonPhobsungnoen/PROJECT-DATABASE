<script setup>
import { useReviewStore } from "@/stores/review";
import { useSignInStore } from "@/stores/signin";
import { useRoute } from "vue-router";
const route = useRoute();
const { id } = route.params;
const reviewStore = useReviewStore();
const signInStore = useSignInStore();
</script>

<template>
  <div class="my-6">
    <div class="box has-text-white color-background-purple-4 p-5">
      <div class="columns">
        <div class="column is-6">
          <p class="text_img_center">
            <img
              src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 "
            />
            <span class="pl-2">{{ signInStore.logingUser.u_user_name }}</span>
          </p>
        </div>
        <div class="column">
          <div class="buttons is-right">
            <a
              @click="
                reviewStore.addReview(
                  reviewStore.revData.rev_text,
                  signInStore.logingUser.u_id,
                  parseInt(id)
                )
              "
              class="button is-warning is-outlined"
              >POST</a
            >
          </div>
        </div>
      </div>
      <textarea
        class="textarea color-background-purple-2 has-text-white"
        placeholder="How about this movie?"
        v-model="reviewStore.revData.rev_text"
      ></textarea>

      <nav class="navbar">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="button">
ปุ่ม
            </div>
            <star-rating :star-size="30"></star-rating>
          </div>
        </div>
      </nav>

      <div class="is-align-content-center">
        <star-rating :star-size="30"></star-rating>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
};
</script>




