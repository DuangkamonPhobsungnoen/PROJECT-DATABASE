<template>
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
            <label class="title has-text-white">Jeerawat</label>
            <button class="button ml-6" style="border-radius:15px;">Edit Profile</button>
        </div>
        <div class="pt-1">
            <label>99</label>
            <img style="max-width:30px; position:relative; top:10px;" class="" src="https://cdn.discordapp.com/attachments/986617972544139337/1089986748387434677/Pngtreeheart_8bit_icon_3986608.png" alt="">
            <p>Like</p>
            
        </div>
        <div style="position:relative; left:120px; bottom:62.5px;">
            <label>725</label>
            <img style="max-width:30px; position:relative; top:10px;" class="" src="https://cdn.discordapp.com/attachments/986617972544139337/1089986748387434677/Pngtreeheart_8bit_icon_3986608.png" alt="">
            <p>Comment</p>
            
        </div>
        <div class="is-relative" style="bottom:30px;">
            <p id="Name" name="name">เหงา หาเพื่อนดูหนัง ณ เขตลาดหน้า</p>
            <p id="description" name="description">Ig:สักกะวาล้าหลังผนังชนฝา</p>
        </div>
    </div>
  </div>
  <div class="has-text-centered">
    <button class="m-5 nonebackbutton" @click="is_how = 'REWIEWS'">
      <a
        class="is-size-5"
        v-bind:class="{ 'has-text-warning': is_how == 'REWIEWS' }"
        >REWIEWS</a
      >
      <div
        style="border-bottom: 3px solid"
        v-bind:class="{ 'has-text-warning': is_how == 'REWIEWS' }"
        class="has-text-white"
      ></div>
    </button>
    <button class="m-5 nonebackbutton" @click="is_how = 'WATCHLIST'">
      <a
        class="is-size-5"
        v-bind:class="{ 'has-text-warning': is_how == 'WATCHLIST' }"
        >WATCHLIST</a
      >
      <div
        style="border-bottom: 3px solid"
        v-bind:class="{ 'has-text-warning': is_how == 'WATCHLIST' }"
        class="has-text-white"
      ></div>
    </button>
  </div>
  <div style="border-bottom: 5px solid gold" class="mb-6"></div>
</template>

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