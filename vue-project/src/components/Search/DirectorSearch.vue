<template>
  <router-link
    :to="{ name: 'director', params: { id: parseInt(item.dir_id) } }"
  >
    <div class="box color-background-purple-2 has-text-white mt-5">
      {{ item.dir_fname }} {{ item.dir_lname }}
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
defineProps({
  item: Object,
});
</script>

<style>
</style>