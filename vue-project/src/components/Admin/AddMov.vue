<template>
  <!-- <button @click="crudMovStore.fetchSingleActor(5)">
    test
  </button> -->
  <!-- <h1> {{ crudMovStore.allmov }}</h1> -->
  <div>
    <div class="columns p-5">
      <div class="column is-1"></div>
      <div class="column is-10">
        <!-- <router-link to="/editfilm"> -->
          <button
          class="button is-medium is-fullwidth"
          style="background-color: rgba(255, 255, 255, 0.1); color: white"
          @click="movformshow()"
        >
          Add +
        </button>
        <!-- </router-link> -->
      </div>
      <div class="column is-1"></div>
    </div>
    <div v-for="(item, index) in crudMovStore.allmov">
      <div class="columns p-3">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div
            class="is-medium is-fullwidth p-4 is-size-4"
            style="background-color: rgba(255, 255, 255, 0.1); color: white"
          >
            <div class="columns">
              <div class="column is-4">{{ item.mov_title }}</div>
              <div class="column is-4 has-text-centered">
                {{ item.mov_year }}
              </div>
              <div class="column is-4 has-text-right">
                <!-- <router-link to="/editfilm"> -->
                  <button class="button has-text-white nonebackbutton" >
                  <!-- update movie -->
                  <router-link :to="{ name: 'updateMovie', params: { id: parseInt(item.mov_id) } }">
                    <div class="fa fa-pencil is-size-2"></div>
                    </router-link>
                  </button>
                
                <button
                  class="button has-text-white nonebackbutton"
                  
                >
                <!-- delete real -->
                  <span><div class="fa fa-trash is-size-2" @click="crudMovStore.removeMovie(item.mov_id)"></div></span>
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
              (show_modal_del = !show_modal_del), removeMovie(this.wantdel)
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
onMounted(crudMovStore.fetchAll);
</script>  

  <script>
  



export default {
  name: "addmov",
  data() {
    return {
      show_modal_del: false,
      wantdel: 0,
      // crudMovStore: usecrudMovieStore()
    };
  },

  methods: {
    // addMovie: function () {
    //   this.movie.push({
    //     movname: this.movname,
    //     years: this.years,
    //   });
    // },
    // removeMovie(index) {
    //   this.movie.splice(index, 1);
    // },
    movformshow(){
      this.$emit('show1', [true, 'film']);
      this.$emit('type1', 'film')
    },
  },
  props: [
    "movie"
  ]
 
};
</script>
  
<style>
</style>