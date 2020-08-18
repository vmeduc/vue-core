import Vue from 'vue';

import App from 'pages/App.vue';
import router from 'router/router.js';
import store from 'store/store.js'


let vm = new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App)
});