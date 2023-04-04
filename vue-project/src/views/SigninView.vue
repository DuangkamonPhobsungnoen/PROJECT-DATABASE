<script setup>
import { useSignInStore } from "../stores/signin";
const signInStore  = useSignInStore()

</script>

<template>
    <div class="hero is-fullheight">
        <div class="hero-body is-justify-content-center is-align-items-center">
            <div>
                <div class="columns is-flex is-flex-direction-column card1">
                    <h1 class="text-signin">SIGN IN</h1>
                    <div class="column px-5">
                        <input v-model="signInStore.loginData.username" class="input input_username" type="text" placeholder="Username" :class="{'is-danger': signInStore.error.username}" @input="signInStore.validateUsername()">
                        <span class="has-text-danger ertext ml-3">{{signInStore.error.username}}</span>
                    </div>
                    <div class="column px-5">
                        <input v-model="signInStore.loginData.password" class="input input_password" type="password" placeholder="Password" :class="{'is-danger': signInStore.error.passw}" @input="signInStore.validatePassw()">
                        <span class="has-text-danger ertext ml-3">{{signInStore.error.passw}}</span>
                    </div>
                    <div class="column px-5">
                        <a>
                            <button @click="signInStore.cusname()" class="button is-fullwidth color_sign_purple " type="submit">Sign in</button>
                        </a>
                    </div>
                    <div class="column px-5">
                        <p class="line"></p>
                    </div>
                    <div class="column px-5">
                        <router-link to="/signupview"><button class="button  is-fullwidth color_sign_white" type="submit">Sign up</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


