<template>
    <el-carousel :interval="4000" type="card" height="400px" width="500px">
      <el-carousel-item v-for="item in imagebanner" :key="item">
        <img :src="item" style="width: 100%; height: 100%; "/>
      </el-carousel-item>
    </el-carousel>
  </template>
  
<script>
    export default {
        components: {},
        data() {
            return {
                imagebanner: [
                'https://i.computer-bild.de/imgs/1/4/3/5/8/0/3/7/628313815_2d6bc60024-b1e449d4787f9e20.jpg?impolicy=full_content', 
                'https://images.thedirect.com/media/article_full/star-wars-movies-characters.jpg',
                'https://s.isanook.com/mv/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMTcvODk1MDUvaGVhZC5qcGc=.jpg',
                'https://images.thedirect.com/media/article_full/shazam-2-characters.jpg',
                'https://namiccns.org/wp-content/uploads/2019/10/mental_health_movie_review_joker.jpg',
                'https://rare-gallery.com/mocahbig/1327128-Harry-Potter-Daniel-RadcliffeHarry-Potter-And-The.jpg',
                'https://s2.dmcdn.net/v/TuHZJ1Yh97-WeC3kp/x1080',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yMYwWsNExiOzOoa5hUvVqhh437HFpGiQ1qEYtcixzaeNT6LClOiW4Yl4V9QSjXnIstU&usqp=CAU',
                'https://cms.dmpcdn.com/moviearticle/2023/03/22/66423550-c874-11ed-a5d8-6563795321e5_webp_original.jpg',
                'https://i.ytimg.com/vi/0bWhOuE8QtY/maxresdefault.jpg']
            }
        }
    }
</script>
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  