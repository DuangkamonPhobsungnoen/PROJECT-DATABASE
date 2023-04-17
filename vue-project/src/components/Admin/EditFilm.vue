<script setup>
import { usecrudMovieStore } from "../../stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";

const crudMovStore = usecrudMovieStore();

const filmadd = ref({
        title: "",
        trailer: "",
        dir_fname: "",
        dir_lname: "",
        year: "",
        poster: "",
        // actor: "",
        story: "",
        type: "",
        genres: "",
        time: "",
      })
</script>

<template>
  <div class="p-2">
    <h1 class="has-text-centered is-size-1 pb-6 pt-4">Addmovie</h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select" style="width: 85%">
          <select
            name="type"
            id=""
            style="width: 100%"
            class=""
            v-model="filmadd.type"
            required
          >
            <option value="000">All</option>
            <option value="movie">movie</option>
            <option value="anime">anime</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="select" style="width: 85%">
          <select
            name="genres"
            id=""
            style="width: 100%"
            class=""
            v-model="filmadd.genres"
            required
          >
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
      <div class="column p-5 is-2 is-offset-1">
        <div class="subtitle is-4 has-text-white">
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Title</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Trailer</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director firstname</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director lastname</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Year</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Time</label>            
          </div>        
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Story</label>
          </div>          
        </div>
      </div>
      <div class="column is-8 m-3">
        <div class="">
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="title"
              id="title"
              v-model="filmadd.title"
              placeholder="title"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="trailer"
              id="trailer"
              v-model="filmadd.trailer"
              placeholder="trailer"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="director"
              id="director"
              v-model="filmadd.dir_fname"
              placeholder="director firstname"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="director"
              id="director"
              v-model="filmadd.dir_lname"
              placeholder="director lastname"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="year"
              id="year"
              v-model="filmadd.year"
              placeholder="year"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="time"
              id="time"
              v-model="filmadd.time"
              placeholder="time"
            />
          </div>
          <!-- <div>
            <input
              class="mb-5 input"
              type="text"
              name="time"
              id="time"
              v-model="filmadd.time"
            />
          </div> -->
          <div>
            <div>
              <textarea
                name="story"
                id="story"
                class="textarea"
                rows="3"
                v-model="filmadd.story"
                placeholder="story"
              ></textarea>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="columns m-3">
      <div class="column is-2 is-offset-1">
        <p class="subtitle is-4 has-text-white">Poster</p>
      </div>
      <div class="column is-9">
        <input class="input" style="width:92%" type="text" name="poster" id="poster" placeholder="poster" v-model="filmadd.poster">
      </div>
     
    </div>
    <!-- add movie btn -->
    <button
          type="submit"
          style="width: 90%"
          class="button subtitle is-5 is-primary is-outlined"
          @click="crudMovStore.submitformfilm(filmadd)"
        >
          CONFIRM
        </button>
    <div class="columns">
      <div class="column is-10 is-offset-2">
        <h1 class="title has-text-white">actor</h1>
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
                  <input
                    class="input"
                    type="text"
                    name="firstname"
                    id="FirstName"
                    v-model="crudMovStore.actor.fname"
                  />
                </td>
                <td>
                  <input
                    class="input"
                    type="text"
                    name="lastname"
                    id="LastName"
                    v-model="crudMovStore.actor.lname"
                  />
                </td>
                <td>
                  <div class="select" >
                    <select v-model="crudMovStore.actor.gender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div class="has-text-centered">
                    <button class="button is-success is-hovered" type="submit" @click="crudMovStore.addActor()">
                      Add
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-for="i in 3" :key="3">
                <td>
                  <p></p>
                </td>
                <td>
                  <p></p>
                </td>
                <td>
                  <p></p>
                </td>
                <td>
                  <div class="has-text-centered">
                    <button class="button is-warning is-hovered mb-2 " type="">
                      Update
                    </button>
                    <button class="button is-danger is-hovered " type="">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <!-- <router-link to="/adminview"> -->
        <button style="width: 90%" class="button subtitle is-5" type="cancel">
          CANCEL
        </button>
        <!-- </router-link> -->
      </div>

      <div class="column has-text-centered">
        <!-- <router-link to="/adminview"> -->
        <!-- <button
          type="submit"
          style="width: 90%"
          class="button subtitle is-5 is-primary is-outlined"
          @click="crudMovStore.submitformfilm(filmadd)"
        >
          CONFIRM
        </button> -->
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

