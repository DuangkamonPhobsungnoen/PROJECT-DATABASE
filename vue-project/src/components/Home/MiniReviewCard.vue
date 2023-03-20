<script>
export default {

}
</script>

<template>
    <div class="task-container columns is-multiline px-6">
        <div class="column is-4 " v-for="i in 3" :key="i">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">The Grand Budapest Hotel</p>
                            <p class=" is-6">9.5</p>
                        </div>
                    </div>

                    <div class="content">
                        สนุกตื่นเต้นเร้าใจว้าวซ่า ภาพสวย
                        มากเหมือนหลุดมาจากในหนัง
                        ตอนแรกนึกว่าเป็นแนวโรแมน...
                        <br><br>
                        <p>dkm_ch</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>