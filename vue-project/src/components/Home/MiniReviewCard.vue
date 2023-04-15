<script>
export default {
    
}
</script>

<template>
    <div class="task-container columns is-multiline px-6">
        <div class="column is-4 p-6" v-for="i in 3" :key="i">

            <div v-if="i == 1" class="card color-background-purple-2 has-text-white" style="border-radius: 35px;">
                <div class="card-image ">
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
                            <span class="pl-2">4.25</span>
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

            <div v-if="i == 2" class="card color-background-purple-2 has-text-white" style="border-radius: 35px;">
                <div class="card-image ">
                    <figure class="image is-4by3">
                        <img src="https://sgp1.digitaloceanspaces.com/adaybulletin/2021/10/Open-WEB-review-squid-game-20211011.jpg" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">Squid Game</p>
                            <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20">
                            <span class="pl-2">4.5</span>
                        </p>
                        </div>
                    </div>

                    <div class="content">
                        เป็นซีรี่ย์ที่ควรค่าต่อการดูมากค่าา
                        เร้าใจ ลุ้นทุกตอนเลย
                        เลือดสูบฉีดตลอดเวลาเลยย
                        <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 ">
                            <span class="pl-2">Ri</span>
                        </p>
                    </div>
                </div>
            </div>

            <div v-if="i == 3" class="card color-background-purple-2 has-text-white" style="border-radius: 35px;">
                <div class="card-image ">
                    <figure class="image is-4by3">
                        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/avatar-_the_way_of_water-sixteen_nine.jpeg" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">Avatar the way of water</p>
                            <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087616553777897552/Star.png?width=20&height=20">
                            <span class="pl-2">4</span>
                        </p>
                        </div>
                    </div>

                    <div class="content">
                        นั่งน้ำตาไหลทั้งเรื่องเลยครับ โดยเฉพาะฉากสุดท้าย
                        แต่ไม่ขอสปอยล์นะครับ ถ้าอยากรู้ต้องไปดูเอง
                        <p class="text_img_center pt-5">
                            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 ">
                            <span class="pl-2">Opal</span>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style></style>