<script>
export default {

}
</script>

<template>
    <div class="task-container columns is-multiline px-6">
        <div class="column is-4 px-6" v-for="i in 3" :key="i">
            <div class="card" style="border-radius: 35px;">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://media.discordapp.net/attachments/1087447051387813909/1087667903056318544/poster_1.png?width=310&height=221" alt="Placeholder image">
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

                    <div class="content">
                        สนุกตื่นเต้นเร้าใจว้าวซ่า ภาพสวย
                        มากเหมือนหลุดมาจากในหนัง
                        ตอนแรกนึกว่าเป็นแนวโรแมน...
                        <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 ">
                            <span class="pl-2">dkm_ch</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style></style>