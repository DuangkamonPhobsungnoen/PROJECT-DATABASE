<template>
  <!-- กดปุ่ม edit แล้วเด่ง popup edit -->
  <h1>{{ for_pic?.u_pic }}999</h1>
  <h1>{{ signInStore.logingUser.u_pic }}</h1>
  <a class="ml-2" @click="show_edit = !show_edit">
    <img src="https://cdn.discordapp.com/attachments/986617972544139337/1090308577790546100/pngwing.com.png" class=""
      style="max-width:30px;" alt="edit">
  </a>
  <!-- <button  @click="show_edit = !show_edit">Edit</button> -->


  <!-- PopUp Edit -->
  <div id="modal-rusure" class="modal" v-bind:class="{ 'is-active': show_edit }">
    <!-- <h1>{{ editUser }}</h1> -->
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box proeditbackground p-6">
        <div class="columns" style="background-color: transparent; border-bottom: 3px solid white">
          <div class="column has-text-left">
            <button class="buttom nonebackbutton">
              <a class="is-size-4" @click="show_edit = !show_edit">Cancel</a>
            </button>
          </div>
          <div class="column has-text-centered">
            <p class="is-size-3 has-text-white">Edit Profile</p>
          </div>
          <div class="column has-text-right">
            <button class="buttom nonebackbutton">
              <a class="is-size-4"
                @click="submit(), show_edit = !show_edit">Done</a>
            </button>
          </div>
        </div>
        <div class="columns p-6">
          <div class="column has-text-centered">
            <figure class="image is-128x128 is-inline-block">
              <img style="border-radius: 50%;" :src="`http://localhost:3000/${signInStore.logingUser.u_pic}`" alt="">
            </figure>
            <div>
              <div class="column has-text-centered">
                <button class="buttom nonebackbutton">
                  <a class="is-size-4 has-text-white" @click="">Edit Picture</a>
                </button>
              </div>
            </div>
          </div>
          <div class="column">

            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="fname" />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="lname" />
              </div>
            </div>



            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="username" />
              </div>
            </div>
            <!-- <input class="file-input" name="blog_image" type="file" id="file" ref="file" @change="handleFileUpload()"> -->
            <div class="field">
              <div class="control">
                <input class="file" name="u_picture" type="file" id="file" ref="file" @change="handleFileUpload()" placeholder="picture user" />
              </div>
            </div>

            <!-- <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="picture"
                  v-model="pic"
                  
                />
              </div>
            </div> -->


              <!-- <h1>{{ signInStore.logingUser.u_id }}</h1> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSignInStore } from "@/stores/signin";

const signInStore = useSignInStore()

</script>

<script>
import { useSignInStore } from "@/stores/signin";
import axios from 'axios';
const signInStore = useSignInStore()

export default {
  name: "profile",
  props: ['editUser'],
  data() {
    return {
      show_edit: false,
      fname: this.editUser.u_fname,
      lname: this.editUser.u_lname,
      username: this.editUser.u_user_name,
      file: null,
      signInStore : useSignInStore(),
      for_pic: null
      // logging: signInStore.loggingUser
      // pic: this.editUser.u_pic,
    };
  },
  methods:{ 
    handleFileUpload(){
          this.file = this.$refs.file.files[0];
    },
    async submit(){
          var formData = new FormData();
          formData.append("u_picture", this.file);
          formData.append("fname", this.fname)
          formData.append("lname", this.lname)
          formData.append("username", this.username)
          const fetchingData = await axios.put(`http://localhost:3000/user/edit/${this.$route.params.id}`, formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              }
          })
          const test = fetchingData.data.pic.replace(/\\/g, "/");
          // console.log(test);
          // console.log(fetchingData.data);
          // console.log(signInStore.logingUser.u_pic);
          // signInStore.logingUser = null
          // this.for_pic = fetchingData.data
          signInStore.logingUser.u_pic = test
          signInStore.logingUser.u_fname = fetchingData.data.fname
          signInStore.logingUser.u_lname = fetchingData.data.lname
          signInStore.logingUser.u_user_name = fetchingData.data.u_user_name
          // console.log(test);
          // console.log(fetchingData.data.fname);
          // console.log(fetchingData.data.lname);
          // console.log(fetchingData.data.u_user_name);
          // this.editUser = fetchingData.data
          // localStorage.getItem('loggingUser')
          
      }
  }

};
</script>

<!-- <script setup>
defineProps({
  editUser: Object
})
</script> -->

<style></style>