<template>
    <div class="my-class-card bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2">
        {{card.title}}
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<style scoped>
    .card {
        box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
    }
</style>
