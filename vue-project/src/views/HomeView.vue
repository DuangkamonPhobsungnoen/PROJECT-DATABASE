<script setup>
    import MessText from '../components/MessText.vue';
    import MiniReviewCard from '../components/Home/MiniReviewCard.vue';
</script>

<template>
    <section class="hero px-6 py-6">
            <img src="https://media.discordapp.net/attachments/1087447051387813909/1087464977876668508/poster.png?width=1117&height=537">
    </section>
    <div>
        <MessText message="Review"></MessText>
        <MiniReviewCard></MiniReviewCard>
        <MessText message="ANIME"></MessText> 
        <MessText message="MOVIE"></MessText> 
        <MessText message="SERIRES"></MessText> 
        <MessText message="TRENDING"></MessText>    
    </div>
</template>
