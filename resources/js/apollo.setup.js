import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    url: 'http://127.0.0.1:8000/graphql'
    // url: 'http://localhost/graphql' same
});

export default new VueApollo({
    defaultClient: apolloClient
})
