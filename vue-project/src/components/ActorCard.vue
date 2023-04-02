<script setup>
// defineProps({
//     movie:Array
// })
</script>
<template>
     <div class="task-container columns is-multiline px-6 py-6">
        <div class="column is-3 px-5" v-for="item in actor" >
            <div class="card color-background-purple-2 has-text-white" style="border-radius: 30px;">
                <div class="card-image ">
                    <figure class="image is-4by5">
                        <img src="https://deadline.com/wp-content/uploads/2016/05/colin-firth-2.jpg" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="is-size-6 ">{{item.actorname}}</p>
                            <p class="text_img_center pt-5">
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

<script>
export default {
    data(){
        return{
            actor: [
                {
                    actorname: "Colin Flirth"
                },
                {
                    actorname: "Colin Flirth"
                },
                {
                    actorname: "Colin Flirth"
                },
                {
                    actorname: "Colin Flirth"
                }
            ]
        }
    }
}
</script>

<style>

</style>