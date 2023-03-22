<script>
export default {
    name: 'messtext',
    props: {
        message: String
    }
}
</script>
<template>
    <div class="task-container columns is-multiline">
        <div class="column is-half is-offset-one-quarter has-text-centered" >
            <div class="px-6 py-1 messt is-size-5">{{message}}</div>
        </div>
    </div>
</template>