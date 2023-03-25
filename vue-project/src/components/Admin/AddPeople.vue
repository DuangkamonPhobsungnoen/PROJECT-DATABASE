<template>
  <div>
    <div class="columns p-5">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="columns has-text-centered">
          <div class="column">
            <div class="select">
              <select class="editselect">
                <option>All</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Horror</option>
              </select>
            </div>
          </div>
          <div class="column">
            <div class="select">
              <select class="editselect">
                <option>Genres</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Horror</option>
              </select>
            </div>
          </div>
          <div class="column">
            <div class="select">
              <select class="editselect">
                <option>Sort</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Horror</option>
              </select>
            </div>
          </div>
        </div>
        <button
          class="button is-medium is-fullwidth"
          style="background-color: rgba(255, 255, 255, 0.1); color: white"
          @click="addPeople()"
        >
          Add +
        </button>
      </div>
      <div class="column is-1"></div>
    </div>
    <div v-for="(item, index) in people">
      <div class="columns p-3">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div
            class="is-medium is-fullwidth p-4 is-size-4"
            style="background-color: rgba(255, 255, 255, 0.1); color: white"
          >
            <div class="columns">
              <div class="column is-4 has-text-left">
                {{ item.fname }} {{ item.lname }}
              </div>
              <div class="column has-text-right">
                <button
                  class="button has-text-white"
                  style="background-color: transparent; border: none"
                >
                  <div class="fa fa-pencil is-size-2"></div>
                </button>
                <button
                  class="button has-text-white js-modal-trigger"
                  style="background-color: transparent; border: none"
                  @click="show_modal_del = !show_modal_del"
                >
                  <span><div class="fa fa-trash is-size-2"></div></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
  </div>

  <div
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
            @click="show_modal_del = !show_modal_del"
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
  </div>
</template>

<script>
export default {
  name: "addpeo",
  data() {
    return {
      show_modal_del: false,
      people: [],
      lname: "Peter",
      fname: "Parker",
    };
  },
  methods: {
    addPeople: function () {
      this.people.push({
        fname: this.fname,
        lname: this.lname,
      });
    },
  },
};
</script>

<style>
</style>