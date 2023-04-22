<template>

  
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> -->
  <div v-show="is_form == false">
    <SearchA />
    <div class="has-text-centered">
      <button class="m-5 nonebackbutton" @click="is_how = 'film'">
        <a
          class="is-size-5"
          v-bind:class="{ 'has-text-warning': is_how == 'film' }"
          >FILM</a
        >
        <div
          style="border-bottom: 3px solid"
          v-bind:class="{ 'has-text-warning': is_how == 'film' }"
          class="has-text-white"
        ></div>
      </button>
      <button class="m-5 nonebackbutton" @click="is_how = 'people'">
        <a
          class="is-size-5"
          v-bind:class="{ 'has-text-warning': is_how == 'people' }"
          >PEOPLE</a
        >
        <div
          style="border-bottom: 3px solid"
          v-bind:class="{ 'has-text-warning': is_how == 'people' }"
          class="has-text-white"
        ></div>
      </button>
    </div>
    <div style="border-bottom: 5px solid gold"></div>
    <div v-show="is_how == 'film'">
      <AddMov @show1="is_form = $event[0], editselect = $event[1]" :movie="movie1" />
    </div>
    <div v-show="is_how == 'people'">
      <AddPeople @show2="is_form = $event[0], editselect = $event[1]" :people="people1" />
    </div>
  </div>
  <div v-show="is_form == true">
    <div v-show="editselect == 'film'">
      <!-- <router-link to="/movie/add"> Add + </router-link> -->
      <EditFilm  />
    </div>
    <div v-show="editselect == 'people'">
      <EditPeople  />
      <!-- <test></test> -->
    </div>
  </div>
  
</template>

<script setup>
import SearchA from "../../components/Admin/SearchAdmin.vue";

</script>

<script>
import AddMov from "../../components/Admin/AddMov.vue";
import AddPeople from "../../components/Admin/AddPeople.vue";
import EditPeople from "../../components/Admin/EditPeople.vue";
import EditFilm from "../../components/Admin/EditFilm.vue";
import test from "../../components/Admin/test.vue";
export default {
  data() {
    return {
      is_form: false,
      editselect: "film",
      is_how: "film",
      movie1:[],
      people1:[]
    };
  },
  components:{
    AddMov,
    AddPeople,
    EditPeople,
    EditFilm,
    test
  },
  methods:{
    // insertmov(data){
    //   this.movie1.push(data[0])
    //   this.is_form = false
    // },
    // insertpeople(data){
    //   this.people1.push(data[0])
    //   this.is_form = false
    // }
  }
};
</script>

<style>
</style>