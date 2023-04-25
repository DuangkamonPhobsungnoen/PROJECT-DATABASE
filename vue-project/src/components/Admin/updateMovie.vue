<script setup>
import { usecrudMovieStore } from "@/stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
const crudMovStore = usecrudMovieStore();
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  crudMovStore.editData = await crudMovStore.toUpdate(id)

})

</script>

<template>
  <!-- {{ crudMovStore.editData }} -->
  <div class="p-2">
    <h1 class="has-text-centered is-size-1 pb-6 pt-4">Edit Movie</h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select" style="width: 85%">
          <select name="type" id="" style="width: 100%" class="" v-model="crudMovStore.editData.mov_type" required>
            <option value="000">All</option>
            <option value="movie">movie</option>
            <option value="anime">anime</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>

      <div class="column">
        <div class="select" style="width: 85%">
          <select name="genres" id="" style="width: 100%" class="" v-model="crudMovStore.editData.gen_id" required>
            <option value="2">drama</option>
            <option value="5">romance</option>
            <option value="3">thriller</option>
            <option value="6">adventure</option>
            <option value="7">action</option>
            <option value="8">sci-fi</option>
            <option value="9">horror</option>
            <option value="1">comedy</option>
            <option value="4">fantasy</option>

          </select>
        </div>
      </div>
    </div>
    <div class="columns pt-6">
      <div class="column p-5 is-10 is-offset-1">
        <div class="subtitle is-4 has-text-white">
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Title</label>
            <input class="input" type="text" name="title" id="title" v-model="crudMovStore.editData.mov_title"  />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Trailer</label>
            <input class="input" type="text" name="trailer" id="trailer" v-model="crudMovStore.editData.mov_trailer"
              placeholder="trailer" />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director firstname</label>
            <input class="input" type="text" name="director" id="director" v-model="crudMovStore.editData.dir_fname"
              placeholder="director firstname" />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director lastname</label>
            <input class="input" type="text" name="director" id="director" v-model="crudMovStore.editData.dir_lname"
              placeholder="director lastname" />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Year</label>
            <input class="input" type="text" name="year" id="year" v-model="crudMovStore.editData.mov_year" placeholder="year" />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Time</label>
            <input class="input" type="text" name="time" id="time" v-model="crudMovStore.editData.mov_time" placeholder="time" />
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Story</label>
            <textarea name="story" id="story" class="textarea" rows="3" v-model="crudMovStore.editData.mov_summary"
              placeholder="story"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="columns m-3">
      <div class="column is-1 is-offset-1">
        <p class="subtitle is-4 has-text-white">Poster</p>
      </div>
      <div class="column is-9">
        <input class="input" style="width:92%" type="text" name="poster" id="poster" placeholder="poster"
          v-model="crudMovStore.editData.mov_pic">
      </div>

    </div>
    <button type="submit" style="width: 90%" class="button subtitle is-5 is-primary is-outlined" @click="crudMovStore.updateMovie()">
      CONFIRM
    </button>
  </div>
</template>