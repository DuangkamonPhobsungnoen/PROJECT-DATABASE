<script>
export default {
  name: 'messtext',
    props: {
        message: String
    }
};
</script>

<template>
  <div class="column is-three-fifths is-offset-one-fifth">
    <div class="columns">
        <div class="column has-text-centered pt-4 is-size-5">
            <b><p class="is-size-4">{{message}}</p></b>
        </div>
      <div class="column">
        <div class="select">
          <select class="editselect">
            <option>All</option>
            <option>Anime</option>
            <option>Movie</option>
            <option>Series</option>
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
        <button class="button color-background-purple-3 has-text-white">
          CHECK
        </button>
      </div>
    </div>
  </div>
</template>



<style>
</style>