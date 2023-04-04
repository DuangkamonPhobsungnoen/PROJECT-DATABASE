<script setup>
import { usecrudMovieStore } from "../../stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";

const crudMovStore = usecrudMovieStore();

const filmadd = ref({
        title: "",
        trailer: "",
        director: "",
        years: "",
        // actor: "",
        story: "",
        sort1: "",
        sort2: "",
      })
</script>
<template>
  <form action="" @submit.prevent="crudMovStore.submitformfilm(filmadd)">
    <div class="p-2">
      <h1 class="has-text-centered is-size-1 pb-6 pt-4">Edit</h1>
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
              <option value="drama">drama</option>
              <option value="romantic">romantic</option>
              <option value="comedy">comedy</option>
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
              <option value="000">Genres</option>
              <option value="drama">drama</option>
              <option value="romantic">romantic</option>
              <option value="comedy">comedy</option>
              <option value="anime">anime</option>
              <option value="series">series</option>
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
                  border: 1px solid #fff
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
              <label for="">Actor</label>
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
                v-model="filmadd.years"
              />
            </div>
            <div>
              <!-- <input
                class="mb-5 input"
                type="text"
                name="actor"
                id="actor"
                v-model="filmadd.actor"
              /> -->
            </div>
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
            <button
              style="width: 90%"
              class="button subtitle is-5"
              type="cancel"
            >
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
             
            >
              CONFIRM
            </button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </form>
</template>

<!-- <script>
export default {
  name: "editfilm",
  data() {
    return {
      filmadd: {
        title: "",
        trailer: "",
        director: "",
        years: "",
        actor: "",
        story: "",
        sort1: "",
        sort2: "",
      },
    };
  },
  methods: {
    submitformfilm() {
      const newfilm={
        title: this.filmadd.title,
        trailer: this.filmadd.trailer,
        director: this.filmadd.director,
        years: this.filmadd.years,
        actor: this.filmadd.actor,
        story: this.filmadd.story,
        sort1: this.filmadd.sort1,
        sort2: this.filmadd.sort2,
      }
      this.$emit('save1', [newfilm, false]);
    },
  },
};
</script> -->
