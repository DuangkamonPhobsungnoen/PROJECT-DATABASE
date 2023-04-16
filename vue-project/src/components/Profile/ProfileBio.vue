<template>
  <!-- {{ user }} -->
  <div class="columns">
    <div class="column is-3"></div>
    <div class="column is-3 m-5">
      <div class="mt-5">
        <div class="card-content">
          <div class="media">
            <div class="image media-left">
                <div style="border:5px solid; border-radius:50%;width:200px;" class="">
                    <img style="" src="https://cdn.discordapp.com/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-5 mt-6">
      
        <div class="pt-6">
            <label class="title has-text-white">{{user.u_user_name}}</label> 
            <Edit :editUser="user"/>
        </div>
        <div class="pt-5">
            <label>0</label>
            <img style="max-width:30px; position:relative; top:10px;" class="" src="https://cdn.discordapp.com/attachments/986617972544139337/1089986748387434677/Pngtreeheart_8bit_icon_3986608.png" alt="">
            <p>Like</p>
            
        </div>
        <div style="position:relative; left:120px; bottom:48px;">
            <label>2</label>
            <img style="max-width:30px; position:relative; top:10px;" class="" src="https://cdn.discordapp.com/attachments/986617972544139337/1089986748387434677/Pngtreeheart_8bit_icon_3986608.png" alt="">
            <p>Comment</p>
            
        </div>
        
    </div>
  </div>
</template>

<script setup>
import Edit from "../Profile/ProfileUser.vue";
defineProps({
    user: Object
})

</script>


<script>
export default {
  data() {
    return {
      is_how: "REWIEWS",
    };
  },
};
</script>

<style>
</style>