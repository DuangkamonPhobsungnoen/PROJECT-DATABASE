<template>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> -->
  <SearchA />
  <div class="has-text-centered"> 
      <button class="m-5" style="background-color: transparent; border: none" @click="is_how = 'film'">
        <a class="is-size-5" v-bind:class="{ 'has-text-warning': is_how == 'film' }">FILM</a>
        <div style="border-bottom: 3px solid;" v-bind:class="{ 'has-text-warning': is_how == 'film' }" class="has-text-white"></div>
      </button>
      <button class="m-5" style="background-color: transparent; border: none" @click="is_how = 'people'"> 
        <a class="is-size-5" v-bind:class="{ 'has-text-warning': is_how == 'people' }">PEOPLE</a>
        <div style="border-bottom: 3px solid;" v-bind:class="{ 'has-text-warning': is_how == 'people' }" class="has-text-white"></div>
      </button>
  </div>
  <div style="border-bottom: 5px solid gold;"></div>
  <div v-show="is_how == 'film'">
    <AddMov1 />
  </div>
  <div v-show="is_how == 'people'">
    <AddPeople1 />
  </div>

</template>

<script setup>
import SearchA from '../../components/Admin/SearchAdmin.vue';
import AddMov1 from '../../components/Admin/AddMov.vue'
import AddPeople1 from '../../components/Admin/AddPeople.vue'

</script>

<script>
export default{
  data(){
    return{
      is_how: "film",
    }

  }
}
</script>

<style>

</style>