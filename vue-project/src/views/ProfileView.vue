<script setup>
import Profile1 from "../components/Profile/ProfileUser.vue";
import Bioview from "../components/Profile/ProfileBio.vue";
import Review from "../components/Profile/reviews.vue";
import Watchlist from "../components/Profile/Watchlist.vue";
</script>

<template>
  <Profile1 />
  <Bioview />
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
      <Review
        @show1="(is_form = $event[0]), (editselect = $event[1])"
      />
    </div>
    <div v-show="is_how == 'watchlist'">
      <Watchlist
        @show2="(is_form = $event[0]), (editselect = $event[1])"
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