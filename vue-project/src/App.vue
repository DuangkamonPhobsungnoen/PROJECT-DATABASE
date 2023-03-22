<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
<NavbarVue></NavbarVue>
  <div class="container column is-10">
  <RouterView />
  </div>
 
</template>
