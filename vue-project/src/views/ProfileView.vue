<script setup>
import Bioview from "../components/Profile/ProfileBio.vue";
import Review from "../components/Profile/Reviews.vue";
import Watchlist from "../components/Profile/Watchlist.vue";
import { useSignInStore } from "../stores/signin";
import { useDetailMovieStore } from "../stores/detailMovie";
import { useReviewStore } from "../stores/review";
import { onMounted, } from "vue";
const signInStore = useSignInStore()
const detailStore = useDetailMovieStore()
const reviewStore = useReviewStore()
onMounted(async () => {
  detailStore.arrWatch = await detailStore.getWatchList(signInStore.logingUser.u_id)
  reviewStore.revProfile = await reviewStore.reviewProfile(signInStore.logingUser.u_id)

})
</script>

<template>
  <h1>{{ reviewStore.revProfile }}</h1>
  <!-- <h1>{{ signInStore.logingUser }}</h1>
  <h1>{{ detailStore.arrWatch }}</h1> -->
  <Bioview :user="signInStore.logingUser"
            :revLength="reviewStore.revProfile.length"
  
  />
  <div v-show="is_form == false">
    <div class="has-text-centered">

      <button class="m-5 nonebackbutton" @click="is_how = 'review'">
        <a
          class="is-size-5"
          v-bind:class="{ 'has-text-warning': is_how == 'review' }"
          >REWIEW</a
        >
        <div
          style="border-bottom: 3px solid"
          v-bind:class="{ 'has-text-warning': is_how == 'review' }"
          class="has-text-white"
        ></div>
      </button>

      <button class="m-5 nonebackbutton" @click="is_how = 'watchlist'">
        <a
          class="is-size-5"
          v-bind:class="{ 'has-text-warning': is_how == 'watchlist' }"
          >WATCHLIST</a
        >
        <div
          style="border-bottom: 3px solid"
          v-bind:class="{ 'has-text-warning': is_how == 'watchlist' }"
          class="has-text-white"
        ></div>
      </button>

    </div>
    <div style="border-bottom: 5px solid gold" class="mb-6"></div>

    <div v-show="is_how == 'review'">
      <Review  :list="reviewStore.revProfile"/>
    </div>
    <div v-show="is_how == 'watchlist'">
      <Watchlist
        :list="detailStore.arrWatch"
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      is_form: false,
      editselect: "review",
      is_how: "review"
    };
  }
};
</script>