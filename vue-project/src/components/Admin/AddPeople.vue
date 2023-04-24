
<template>
  <!-- <p>{{ crudMovStore.allActor }}</p> -->
  <div>
    
    <div v-for="(item, index) in crudMovStore.allActor">
      <div class="columns p-3">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div
            class="is-medium is-fullwidth p-4 is-size-4"
            style="background-color: rgba(255, 255, 255, 0.1); color: white"
          >
            <div class="columns">
              <div class="column is-4 has-text-left">
                {{ item.act_fname }} {{ item.act_lname }}
              </div>
              <div class="column has-text-right">

                  <button class="button has-text-white nonebackbutton">
                    <router-link :to="{ name: 'updateActor', params: { id: parseInt(item.act_id) } }">
                    <div class="fa fa-pencil is-size-2"></div>
                    </router-link>
                  </button>

                <button
                  class="button has-text-white js-modal-trigger nonebackbutton"
                  
                >
                  <span>
                    <div @click="crudMovStore.removePeople(item.act_id)" class="fa fa-trash is-size-2"></div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
  </div>

  <!-- <div
    id="modal-rusure"
    class="modal"
    v-bind:class="{ 'is-active': show_modal_del }"
  >
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div class="has-text-right">
          <button
            class="delete"
            @click="show_modal_del = !show_modal_del"
          ></button>
        </div>

        <p class="has-text-centered pb-5">Are you sure ?</p>
        <div class="has-text-centered">
          <button
            class="button is-danger mr-3"
            @click="
              (show_modal_del = !show_modal_del), removePeople(this.wantdel)
            "
          >
            Delete
          </button>
          <span>
            <button class="button" @click="show_modal_del = !show_modal_del">
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { usecrudMovieStore } from "@/stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";
const crudMovStore = usecrudMovieStore();
onMounted(crudMovStore.fetchActor);


</script>


<script>
export default {
  name: "addpeo",
  data() {
    return {
      show_modal_del: false,
    //   people: [],
    //   lname: "Peter",
    //   fname: "Parker",
      wantdel: 0,
    };
  },
  methods: {

   
  },
  props: [
    "people"
  ]
};
</script>

<style>
</style>