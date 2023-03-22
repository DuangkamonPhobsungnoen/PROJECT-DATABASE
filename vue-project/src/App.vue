<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<NavbarVue></NavbarVue>
  <div class="container column is-10">
  <RouterView />
  </div>
<Footer></Footer>
</template>
