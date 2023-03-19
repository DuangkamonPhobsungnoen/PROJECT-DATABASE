<template>
  <nav class="navbar has-background-primary is-size-5" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/"><b>Filmary</b></router-link>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          __________________________________
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
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable has-text-centered">
          <a class="navbar-link">

            <img src="https://media.discordapp.net/attachments/1072181252964233328/1073622193784754257/1177568.png">
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <router-link to="/signinview">
                <strong>Sign in</strong>
              </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/signupview">
                <strong>Sign up</strong>
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
