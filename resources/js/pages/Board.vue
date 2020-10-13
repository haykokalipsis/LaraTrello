<template>
    <div class="h-full flex flex-col items-stretch bg-purple-500">
        <div class="header text-white flex justify-between items-center mb-2 bg-purple-600">
            <div class="ml-2 w-1/3">x</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">LaraTrello</div>
            <div class="mr-2 w-1/3 flex justify-end">x</div>
        </div>

        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-4 mb-2 text-white font-bold text-lg">
                <span v-if="$apollo.queries.board.loading">Loading</span>
                <span v-else>{{ board.title }}</span>
            </div>

            <div v-if="board" class="flex flex-1 items-start overflow-x-auto mx-2">
                <List v-for="(card_list, index) in board.card_lists" :key="card_list.id" :card_list="card_list" />
            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';

    import List from '../components/List';

    export default {
        apollo: {
            board: {

                query: gql`
                    query($id: ID!) {
                        board(id: $id) {
                            title,
                            color,
                            card_lists {
                                id
                                title
                                cards {
                                    id
                                    title
                                    order
                                }
                            }
                        }
                    }
                `,

                variables: {
                    id: 1
                }
            }
        },

        components: {
            List,
        }
    }
</script>

<style scoped>
    .header {
        height: 40px
    }
</style>
