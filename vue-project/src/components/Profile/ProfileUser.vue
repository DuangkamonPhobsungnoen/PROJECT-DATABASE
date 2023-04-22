<template>
  <!-- กดปุ่ม edit แล้วเด่ง popup edit -->
  <!-- <h1>{{ editUser }}</h1> -->
  <a class="ml-2" @click="show_edit = !show_edit" >
    <img src="https://cdn.discordapp.com/attachments/986617972544139337/1090308577790546100/pngwing.com.png" class="" style="max-width:30px;" alt="edit">
  </a>
    <!-- <button  @click="show_edit = !show_edit">Edit</button> -->
  

  <!-- PopUp Edit -->
  <div
    id="modal-rusure"
    class="modal"
    v-bind:class="{ 'is-active': show_edit }"
  >
  <!-- <h1>{{ editUser }}</h1> -->
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box proeditbackground p-6">
        <div
          class="columns"
          style="background-color: transparent; border-bottom: 3px solid white"
        >
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
              <a class="is-size-4"  @click="signInStore.updateProfile(fname,lname,username),show_edit = !show_edit">Done</a>
            </button>
          </div>
        </div>
        <div class="columns p-6">
          <div class="column has-text-centered">
            <figure class="image is-128x128 is-inline-block">
              <img
                class="is-rounded"
                src="https://cdn.discordapp.com/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png"
              />
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
                <input class="input" 
                type="text" 
                v-model="fname"
                
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="lname" 
                  
                />
              </div>
            </div>

  

            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  v-model="username"
                  
                />
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
export default {
  name: "profile",
  props: ['editUser'],
  data() {
    return {
      show_edit: false,
      fname: this.editUser.u_fname,
      lname: this.editUser.u_lname,
      username: this.editUser.u_user_name,
      // pic: this.editUser.u_pic,
    };
  },
  // methods:{ 
  //   updateProfile(){
  //   }
  // }
  
};
</script>

<!-- <script setup>
defineProps({
  editUser: Object
})
</script> -->

<style>
</style>