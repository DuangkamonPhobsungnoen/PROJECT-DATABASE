<template>
  <router-link :to="{ name: 'actor', params: { id: parseInt(item.act_id) } }">
    <div class="box color-background-purple-2 has-text-white mt-5">
      {{ item.act_fname }} {{ item.act_lname }}
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