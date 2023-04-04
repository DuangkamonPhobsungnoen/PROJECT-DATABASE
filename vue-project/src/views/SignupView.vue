<script setup>
import { useSignUpStore } from "../stores/signup";
const signUpStore  = useSignUpStore()

</script>

<template>
    
    <!-- <h1>5555 {{ signUpStore.test }}</h1> -->
    <div class="hero is-fullheight">

        <div class="hero-body is-justify-content-center is-align-items-center pt-0">

            <div>
                <div class="columns is-flex is-flex-direction-column card2 ">
                    <h1 class="text-signin">SIGN UP</h1><br>
                    <div class="columns is-multiline px-5">
                        <div class="column is-half">
                            <input v-model="signUpStore.regData.fname" class="input has-background-white" style="border: 2px solid #452676;" type="text" placeholder="First name "
                                :class="{ 'is-danger': signUpStore.error.fname }" @input="signUpStore.validatefname()">
                            <span class="has-text-danger ertext ml-3">{{ signUpStore.error.fname }}</span>
                        </div>
                        <div class="column  is-half">
                            <input v-model="signUpStore.regData.lname" class="input has-background-white" style="border: 2px solid #452676;" type="text" placeholder="Last name "
                                :class="{ 'is-danger': signUpStore.error.lname }" @input="signUpStore.validatelname()">
                            <span class="has-text-danger ertext ml-3">{{ signUpStore.error.lname }}</span>
                        </div>
                    </div>
                    <div class="columns px-5">
                        <div class="column ">
                            <input v-model="signUpStore.regData.username" class="input input_username" type="text" placeholder="Username "
                                :class="{ 'is-danger': signUpStore.error.username }" @input="signUpStore.validateUsername()">
                            <span class="has-text-danger ertext ml-3">{{ signUpStore.error.username }}</span>
                        </div>
                    </div>

                    <div class="columns is-multiline px-5">
                        <div class="column is-half">
                            <input v-model="signUpStore.regData.passw" class="input input_password" type="password" placeholder="Password "
                                :class="{ 'is-danger': signUpStore.error.passw }" @input="signUpStore.validatePassw()">
                            <span class="has-text-danger ertext ml-3">{{ signUpStore.error.passw }}</span>
                        </div>
                        <div class="column  is-half">
                            <input v-model="signUpStore.regData.passw2" class="input input_password" type="password"
                                placeholder="Confrim password " :class="{ 'is-danger': signUpStore.error.passw2 }"
                                @input="signUpStore.validatePassw2()">
                            <span class="has-text-danger ertext ml-3">{{ signUpStore.error.passw2 }}</span>
                        </div>
                    </div>
                    <div class="column px-5 ">
                        <!-- <router-link to="/sign_in"> -->
                            <button @click="signUpStore.submit()" class="button is-fullwidth color_sign_purple " type="submit ">Sign up</button>
                        <!-- </router-link> -->
                    </div>
                    <div class="column px-5 ">
                        <p class="line "></p>
                    </div>
                    <div class="column px-5 ">
                        <router-link to="/signinview">
                            <button class="button is-fullwidth color_sign_white ">Sign in</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



