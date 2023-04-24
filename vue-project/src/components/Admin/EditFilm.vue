<script setup>
import { usecrudMovieStore } from "@/stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";

const crudMovStore = usecrudMovieStore();

// const filmadd = ref({
//   title: "",
//   trailer: "",
//   dir_fname: "",
//   dir_lname: "",
//   year: "",
//   poster: "",
//   // actor: "",
//   story: "",
//   type: "",
//   genres: 0,
//   time: "",
// })

const actor = reactive({
  fname: '',
  lname: '',
  gender: '',
})

const swapPage = ref(false)
</script>

<template>
  <div v-show="!swapPage" class="p-2">
    <h1 class="has-text-centered is-size-1 pb-6 pt-4">Addmovie</h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select" style="width: 85%">
          <select name="type" id="" style="width: 100%" class="" v-model="type" required>
            <option value="000">All</option>
            <option value="movie">movie</option>
            <option value="anime">anime</option>
            <option value="series">series</option>
          </select>
        </div>
        <p class="help is-white" v-if='type.length == 0'> Select type movie</p>
      </div>
      
      <div class="column">
        <div class="select" style="width: 85%">
          <select name="genres" id="" style="width: 100%" class="" v-model="genres" required>
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
        <p class="help is-white" v-if='genres == 0'> enter Genres movie</p>
      </div>
    </div>
    <div class="columns pt-6">
      <div class="column p-5 is-10 is-offset-1">
        <div class="subtitle is-4 has-text-white">
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Title</label>
            <input class="input" type="text" name="title" id="title" v-model="title" placeholder="title" />
            <p class="help is-white" v-if='title.length == 0'> enter your title</p>
            <p class="help is-danger" v-if='title.length > 0 && title.length < 5'> * enter 5 character at least </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Trailer</label>
            <input class="input" type="text" name="trailer" id="trailer" v-model="trailer"
              placeholder="trailer" />
              <p class="help is-white" v-if='trailer.length == 0'> enter your trailer</p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director firstname</label>
            <input class="input" type="text" name="director" id="director" v-model="dir_fname"
              placeholder="director firstname" />
              <p class="help is-white" v-if='dir_fname.length == 0'> enter your director first name</p>
              <p class="help is-danger" v-if='dir_fname.length > 0 && dir_fname.length < 5'> * enter 5 character at least </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director lastname</label>
            <input class="input" type="text" name="director" id="director" v-model="dir_lname"
              placeholder="director lastname" />
              <p class="help is-white" v-if='dir_lname.length == 0'> enter your director last name</p>
              <p class="help is-danger" v-if='dir_lname.length > 0 && dir_lname.length < 5'> * enter 5 character at least </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Year</label>
            <input class="input" type="text" name="year" id="year" v-model="year" placeholder="year" />
            <p class="help is-white" v-if='year.length == 0'> enter movie year</p>
              <p class="help is-danger" v-if='isNaN(this.year) || (year.length < 4 && year.length > 0)'> * 4 Number Only and character </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Time</label>
            <input class="input" type="text" name="time" id="time" v-model="time" placeholder="time" />
            <p class="help is-white" v-if='time.length == 0'> enter time movie</p>
              <p class="help is-danger" v-if='isNaN(this.time)'> * Number Only </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Story</label>
            <textarea name="story" id="story" class="textarea" rows="3" v-model="story"
                placeholder="story"></textarea>
                <p class="help is-white" v-if='story.length == 0'> enter your Story movie</p>
              <p class="help is-danger" v-if='story.length > 0 && story.length < 30'> * enter 30 character at least </p>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Poster</label>
            <input class="input" type="text" name="poster" id="poster" placeholder="poster"
          v-model="poster">
          <p class="help is-white" v-if='poster.length == 0'> enter your poster</p>
          </div>
        </div>
      </div>
    </div>

    <button type="submit" style="width: 100%" class="button subtitle is-5 is-primary is-outlined"
      @click="crudMovStore.submitformfilm({
        title: this.title,
        trailer: this.trailer,
        dir_fname: this.dir_fname,
        dir_lname: this.dir_lname,
        year: this.year,
        poster: this.poster,
        story: this.story,
        type: this.type,
        genres: this.genres,
        time: this.time,
      }),swapPage = !swapPage"
      :disabled="check">
      CONFIRM
    </button>
  </div>




  <div v-show="swapPage">
    <div class="columns">
      <div class="column is-10 is-offset-2">
        <h1 class="has-text-centered is-size-1 pb-6 pt-4">Add Actor</h1>
        <div class="table-container m-6">
          <table class="table is-bordered">
            <thead width="">
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input class="input" type="text" name="firstname" id="FirstName" v-model="actor.fname" />
                </td>
                <td>
                  <input class="input" type="text" name="lastname" id="LastName" v-model="actor.lname" />
                </td>
                <td>
                  <div class="select">
                    <select v-model="actor.gender">
                      <option>male</option>
                      <option>female</option>
                    </select>
                  </div>
                  <!-- {{ actor.gender }} -->
                </td>
                <td>
                  <div class="has-text-centered">
                    <button class="button is-success is-hovered" type="submit" @click="crudMovStore.addActor(actor)">
                      Add
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-for="actor, index in crudMovStore.actorAdd" :key="3">
                <td>
                  <p>{{ index + 1 }}. {{ actor.act_fname }}</p>
                </td>
                <td>
                  <p>{{ actor.act_lname }}</p>
                </td>
                <td>
                  <p>{{ actor.act_gender }}</p>
                </td>
                <td>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <router-link to="/">
          <button style="width: 100%" class="button subtitle is-5" type="cancel">
            DONE
          </button>
        </router-link>
      </div>
      <div class="column has-text-centered">

        <button @click="swapPage = !swapPage" style="width: 90%" class="button subtitle is-5" type="cancel">
          ADD MORE MOVIE
        </button>
      </div>

      <div class="column has-text-centered">
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name: "editfilm",
    data(){
      return{
        title: "",
        trailer: "",
        dir_fname: "",
        dir_lname: "",
        year: "",
        poster: "",
        story: "",
        type: "",
        genres: 0,
        time: "",
      }
    },
    methods: {
      // checkingsubmit(){
      //   if(this.title != "" || this.trailer == "" || this.dir_fname == "" || this.dir_lname == "" || isNaN(this.year) || this.poster == "" || this.story == "" || this.type == "" || this.genres == "" || isNaN(this.time)){
      //     return check = true
      //   }
      //   else{
      //     return check = false
      //   }
      // },
      
    },
    computed:{
      check(){
        return ((this.title == "" || this.title.length < 5) || this.trailer == "" || (this.dir_fname == "" || this.dir_fname.length < 5 ) || (this.dir_lname == "" || this.dir_lname.length < 5) || (isNaN(this.year) || this.year == "") || this.poster == "" || (this.story == "" || this.story.length < 30) || this.type == "" || this.genres == 0 || (isNaN(this.time) || this.time == ""))
      }
    },

  }
</script>