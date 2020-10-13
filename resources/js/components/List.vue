<template>
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
        <div class="flex justify-between">
            <div class="text-gray-800 pl-2pb-2 font-bold">{{ card_list.title }}</div>
        </div>

        <Card v-for="(card) in card_list.cards" :key="card.id" :card="card" />

        <CardAddButton></CardAddButton>
    </div>
</template>

<script>
    import Card from '../components/Card';
    import CardAddButton from '../components/CardAddButton';

    export default {
        props: {
            card_list: Object
        },

        components: {
            Card,
            CardAddButton
        }
    }
</script>

<style scoped>
    .list {
        width: 250px;
        min-width: 250px;
    }
</style>
