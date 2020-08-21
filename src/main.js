import Vue from 'vue';

import App from 'App.vue';
import router from 'router/router.js';
import store from 'store'


let vm = new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App)
});