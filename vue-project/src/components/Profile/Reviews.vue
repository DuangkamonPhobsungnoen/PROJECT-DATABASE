<template>
  <!-- <h1>{{ reviewStore.revProfile }}</h1> -->
  <div class="p-3" v-for="item, index in reviewStore.revProfile" :key="item.rev_id">
    <div class="card has-text-white color-background-purple-2 column is-10 is-offset-1"
      style="border-radius: 25px; border: 1px solid white">
      <div class="p-3">
        <div class="columns">
          <div class="column is-3">
            <figure>
              <img :src="item.mov_pic" width="150" height="150" alt="Placeholder image" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="media">
                <div class="media-content">
                  <p class="is-size-4">{{ item.mov_title }}</p>
                  <div class="text_img_center">
                    <img
                      src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20" />
                    <span class="pl-2">{{ item.rev_rate }}</span>
                  </div>
                </div>
              </div>
              <div>
                {{ item.rev_text }}
                <p class="text_img_center pt-5">
                  <div class="image" style="">
                    <div style="width:25px;">
                      <div class="image is-square">
                        <img class="is-rounded" :src="`http://localhost:3000/${signInStore.logingUser.u_pic}`" alt="">
                      </div>
                    </div>
                  </div>
                  <div><span>&nbsp&nbsp{{ item.u_user_name }}</span></div>
                </p>
                <div class="has-text-right">
                  <span class="icon" style="max-width:200px;">
                    <!-- pencill -->
                    <a @click="modal_show(index)">
                      <img
                        src="https://cdn.discordapp.com/attachments/986617972544139337/1090308577790546100/pngwing.com.png"
                        class="" style="max-width:30px;" alt="edit">
                    </a>
                    <!-- delete -->
                    <a @click="reviewStore.revdelete(item.rev_id)">
                      <img src="https://cdn.discordapp.com/attachments/986617972544139337/1090307021842169916/2891491.png"
                        class="mr-6 ml-4" style="max-width:30px;" alt="remove">
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-rusure" class="modal" v-bind:class="{ 'is-active': show_edit }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box proeditbackground p-6">
          <div class="columns" style="background-color: transparent; border-bottom: 3px solid white">
            <div class="column has-text-left">
              <button class="buttom nonebackbutton">
                <a class="is-size-4" @click="show_edit = !show_edit">Cancel</a>
              </button>
            </div>

            <div class="column has-text-centered">
              <p class="is-size-3 has-text-white">Edit Review</p>
            </div>
            <div class="column has-text-right">
              <button class="buttom nonebackbutton">
                <a class="is-size-4" @click="reviewStore.updateRev(val_rev_id, val), show_edit = !show_edit">Done</a>
              </button>
            </div>
          </div>
          <div class="columns p-6">
            <div class="column has-text-centered">
            </div>
            <div class="column">
              <div class="field">
                <div class="control">
                  <textarea class="input" type="text" placeholder="review" rows="3" v-model="val"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useSignInStore } from "@/stores/signin";
import { useReviewStore } from "@/stores/review";
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from "vue-router";
const reviewStore = useReviewStore()
const signInStore = useSignInStore()
const show_edit = ref(false)

const route = useRoute()
const { id } = route.params


// let val_index
let val = ref(null)
let val_rev_id = ref(null)
const modal_show = (index) => {
  show_edit.value = !show_edit.value
  val.value = reviewStore.revProfile[index].rev_text
  val_rev_id.value = reviewStore.revProfile[index].rev_id
}



</script>

<style></style>