<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <div>
    <NavbarVue></NavbarVue>
  <RouterView />
  </div>
 
</template>
