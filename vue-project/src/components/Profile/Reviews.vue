<template>
  <div class="p-3" v-for="item in list" >
    <div class="card has-text-white color-background-purple-2 column is-10 is-offset-1" style="border-radius: 25px; border: 1px solid white">
      <div class="p-3">
        <div class="columns">
          <div class="column is-3">
            <figure>
              <img
                :src="item.mov_pic"
                width="150"
                height="150"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="media">
                <div class="media-content">
                  <p class="is-size-4">{{ item.mov_title }}</p>
                  <div class="text_img_center">
                    <img
                      src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20"
                    />
                    <span class="pl-2">{{ item.rev_rate }}</span>
                  </div>
                </div>
              </div>
              <div>
                {{ item.rev_text }}
                <p class="text_img_center pt-5">
                  <span>{{ item.u_user_name }}</span>
                </p>
                <div class="has-text-right">
                  <span class="icon" style="max-width:200px;">
                      <a href="">
                        <img src="https://cdn.discordapp.com/attachments/986617972544139337/1090308577790546100/pngwing.com.png" class="" style="max-width:30px;" alt="edit">
                      </a>
                      <a href="">
                          <img src="https://cdn.discordapp.com/attachments/986617972544139337/1090307021842169916/2891491.png" class="mr-6 ml-4" style="max-width:30px;"  alt="remove">
                      </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    list: Array
})
</script>

<style>

</style>