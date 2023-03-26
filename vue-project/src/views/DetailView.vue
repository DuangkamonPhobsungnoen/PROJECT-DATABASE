<script setup>
import DetailMovie from "../components/Detail/DetailMovie.vue";
import Comment from "../components/Detail/CommentEdit.vue";
import Review from "../components/Detail/ReviewComment.vue";
</script>

<template>
  <DetailMovie 
  title="Avatar: the way of water" 
  trailor="https://www.youtube.com/embed/d9MyW72ELq0"
  poster="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O8usiIS7L.jpg"
  category="Action , Adventure , Fantasy"
  rating=9.5
  review=125
  director="James Cameron"
  actor="Samuel Henry J. / Zoe Saldana / Susan Alexandra"
  description="Jake Sully lives with his newfound family formed on the extrasolar
          moon Pandora. Once a familiar threat returns to finish what was
          previously started, Jake must work with Neytiri and the army of the
          Na'vi race to protect their home.">
  </DetailMovie>
  
  <Comment></Comment>

  <Review
  profilepic="https://media.discordapp.net/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png?width=43&height=43 "
  username="dkm_ch"
  comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam cum sit doloribus aliquid laboriosam, saepe excepturi dolorem eius
        molestiae neque culpa accusamus quam quas tempore reiciendis quis
        eligendi similique inventore tenetur maxime eveniet! Totam pariatur
        aperiam tenetur at corporis tempore inventore omnis nobis, quidem neque,
        rerum, a voluptatum. Labore."
  rating=9.5
  like=22>
  </Review>
</template>
