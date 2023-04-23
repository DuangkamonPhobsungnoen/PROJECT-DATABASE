<script setup>
  import { useSignInStore } from "../stores/signin";
  import { useMovieStore } from "../stores/movie";
  
  const signInStore  = useSignInStore()
  const movieStore  = useMovieStore()

</script>

<template>
  <nav class="navbar px-6 pb-3 pt-3 is-size-5 has-text-white"
    style="background-color: transparent; border-bottom: 3px solid white;" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/"><b>Filmary</b></router-link>
      </div>

      <div role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">

        <div class="navbar-item px-4">
          <div class="control ">
            <input @keyup.enter="movieStore.toSearch" class="input input-search" type="text" placeholder="Search" v-model="movieStore.searchInput">
          </div>
        </div>


        <div class="navbar-item">
          <router-link to="/animesview">Animes</router-link>
        </div>

        <div class="navbar-item">
          <router-link to="/moviesview">Movies</router-link>
        </div>

        <div class="navbar-item">
          <router-link to="/seriesview">Series</router-link>
        </div>

        <div class="navbar-item">
          <router-link to="/trendingview">Trending</router-link>
        </div>

        <div class="navbar-item">
          <router-link to="/reviewsview">Reviews</router-link>
        </div>

        <div v-if="signInStore.logingUser?.role == 'admin'" class="navbar-item">
          <router-link to="/adminview">Admin</router-link>
        </div>

        <div v-if="JSON.stringify(signInStore.logingUser) !== '{}' && signInStore.logingUser?.role != 'admin'"  class="navbar-item">
          <router-link :to="{ name: 'profile', params: { id: parseInt(signInStore.logingUser?.u_id) } }">Profile</router-link>
        </div>

       

      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable has-text-centered ">
          <div class="navbar-link ">
            <img src="https://cdn-icons-png.flaticon.com/512/7968/7968662.png">
          </div>
          <div class="navbar-dropdown">
            <router-link v-if="JSON.stringify(signInStore.logingUser) == '{}'" to="/signinview">
              <div class="navbar-item">
                <strong>Sign in</strong>
              </div>
            </router-link>
            <router-link v-if="JSON.stringify(signInStore.logingUser) == '{}'" to="/signupview">
              <div class="navbar-item">
                <strong>Sign up</strong>
              </div>
            </router-link>
            <router-link to="/">
              <div v-if="JSON.stringify(signInStore.logingUser) != '{}'" @click="signInStore.logout" class="navbar-item">
                <strong>Logout</strong>
              </div>
            </router-link>
            <!-- <div @click="signInStore.logout" class="navbar-item button">
              <small>Log Out</small>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
