// Libraries
import './bootstrap';
import Vue from 'vue';
import apolloProvider from './apollo.setup';

// Components
import Board from './pages/Board';

// Setup
window.Vue = Vue;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('Board', Board);

const app = new Vue({
    el: '#app',
    apolloProvider
});
