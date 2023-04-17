<script setup>
import { useReviewStore } from "@/stores/review";
const reviewStore = useReviewStore()

defineProps({
    item: Object
})

</script>

<template>
  <!-- <h1>{{ reviewStore.convertTime(item.create_at)}}</h1> -->
  <div class="my-6">
    <div class="box has-text-white color-background-purple-4 p-5">

      <p class="text_img_center">
        <img
          src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 "
        />
        <span class="pl-2">{{item.u_user_name}}</span>
      </p>

      <p class="my-5">{{item.rev_text}}</p>
      <small class="my-5">{{ reviewStore.convertTime(item.create_at) }}</small>

      <div class="columns">
        <div class="column is-6">⭐️ {{item.rev_rate}}</div>
        <div class=" column has-text-right"><button @click="reviewStore.addLike(item)"><i class='fa fa-heart' style="color: #e81717;"></i> {{item.rev_like}} </button> </div>
      </div>
    </div>
  </div>
</template>
