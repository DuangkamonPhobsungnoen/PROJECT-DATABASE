<script>
export default {};
</script>
<template>
     <div class="task-container columns is-multiline px-6">
        <div class="column is-3 px-5" v-for="i in 4" :key="i">
            <div class="card color-background-purple-2 has-text-white" style="border-radius: 35px;">
                <div class="card-image ">
                    <figure class="image is-4by5">
                        <img src="https://media.discordapp.net/attachments/1087447051387813909/1088044869982883920/poster.png?width=248&height=307" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">The Grand Budapest Hotel</p>
                            <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20">
                            <span class="pl-2">9.5</span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>