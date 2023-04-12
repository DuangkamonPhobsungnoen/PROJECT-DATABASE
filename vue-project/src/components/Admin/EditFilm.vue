<script setup>
import { usecrudMovieStore } from "../../stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";

const crudMovStore = usecrudMovieStore();

const filmadd = ref({
        title: "",
        trailer: "",
        director: "",
        year: "",
        // actor: "",
        story: "",
        sort1: "",
        sort2: "",
        time: 0,
      })
</script>

<template>
  <div class="p-2">
    <h1 class="has-text-centered is-size-1 pb-6 pt-4">Edit Movie</h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select" style="width: 85%">
          <select
            name="sort1"
            id=""
            style="width: 100%"
            class=""
            v-model="filmadd.sort1"
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
            name="sort2"
            id=""
            style="width: 100%"
            class=""
            v-model="filmadd.sort2"
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
      <div class="column is-3 is-offset-1">
        <div
          class="is-align-items-center is-justify-content-center file"
          style="display: flex"
        >
          <div class="file-label">
            <img
              id="pullphoto"
              src="#"
              style="
                width: 260px;
                height: 300px;
                border-radius: 8px;
                border: 1px solid #fff;
              "
            />
            <label
              class="is-size-3"
              style="position: absolute; left: 40px; top: 110px"
            >
              + Addphoto
            </label>
            <input
              class="file-input"
              onchange="readURL(this);"
              type="file"
              name="resume"
            />
          </div>
        </div>
      </div>
      <div class="column p-5 is-2 is-offset-0">
        <div class="subtitle is-5 has-text-white">
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Title</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Trailer</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Director</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Year</label>
          </div>
          <div class="ml-3" style="margin-bottom: 40px">
            <label for="">Time</label>
          </div>
        </div>
      </div>
      <div class="column is-5">
        <div class="">
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="title"
              id="title"
              v-model="filmadd.title"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="trailer"
              id="trailer"
              v-model="filmadd.trailer"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="director"
              id="director"
              v-model="filmadd.director"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="year"
              id="year"
              v-model="filmadd.year"
            />
          </div>
          <div>
            <input
              class="mb-5 input"
              type="text"
              name="year"
              id="year"
              v-model="filmadd.time"
            />
          </div>
          <div>
            <!-- <div v-show="is_form == true">
                <div v-show="editselect == 'people'">
                  <EditPeople @save2="insertpeople" />
                </div>
              </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title has-text-white">actor</h1>
        <div class="table-container">
          <table class="table is-bordered">
            <thead width="50px">
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Photo</th>
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
                  />
                </td>
                <td>
                  <input
                    class="input"
                    type="text"
                    name="lastname"
                    id="LastName"
                  />
                </td>
                <td>
                  <div class="select">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                </td>
                <td><input type="file" name="picture" id="Photo" /></td>
                <td>
                  <div class="has-text-centered">
                  <button class="button is-success is-hovered" type="submit">
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
                <td></td>
                <td>
                  <div class="has-text-centered">
                    <button class="button is-warning is-hovered mb-2" type="">
                      Update
                    </button>
                    <button class="button is-danger is-hovered" type="">
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
      <div class="column is-10 is-offset-1">
        <h1 class="title has-text-white">Story</h1>
        <textarea
          name="story"
          id="story"
          class="textarea"
          rows="10"
          v-model="filmadd.story"
        ></textarea>
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
        <button
          type="submit"
          style="width: 90%"
          class="button subtitle is-5 is-primary is-outlined"
          @click="crudMovStore.submitformfilm(filmadd)"
        >
          CONFIRM
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "editfilm",
  // data() {
  //   return {
  //     is_form: false,
  //     editselect: "people",
  //     filmadd: {
  //       title: "",
  //       trailer: "",
  //       director: "",
  //       years: "",
  //       actor: "",
  //       story: "",
  //       sort1: "",
  //       sort2: "",
  //     },
  //   };
  // },
  // methods: {
    // submitformfilm() {
    //   const newfilm = {
    //     title: this.filmadd.title,
    //     trailer: this.filmadd.trailer,
    //     director: this.filmadd.director,
    //     years: this.filmadd.years,
    //     actor: this.filmadd.actor,
    //     story: this.filmadd.story,
    //     sort1: this.filmadd.sort1,
    //     sort2: this.filmadd.sort2,
    //   };
    //   this.$emit("save1", [newfilm, false]);
    // },
    // gotopeople() {
    //   this.$emit("topeople", [true, "people"]);
    //   // this.$emit('type1', 'film')
    // },
    // insertpeople(data) {
    //   this.people1.push(data[0]);
    //   this.is_form = false;
    // },
  // },
};
</script>
