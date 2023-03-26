<script>
export default {
    name: 'commentmess',
    props: {
        profilepic : String,
        username : String,
        comment : String,
        rating : Number,
        like : Number
    }
}
</script>

<template>
  <div class="my-6">
    <div class="box has-text-white color-background-purple-4 p-5">

      <p class="text_img_center">
        <img
          src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 "
        />
        <span class="pl-2">{{username}}</span>
      </p>

      <p class="my-5">{{comment}}</p>

      <div class="columns">
        <div class="column is-6">⭐️ {{rating}}</div>
        <div class="column has-text-right">{{like}} 🤍</div>
      </div>
    </div>
  </div>
</template>
