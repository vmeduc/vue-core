import Vue from 'vue';

import router from 'router/router.js';
import store from 'store/store.js';
import App from 'pages/App.vue';


let vm = new Vue({
    el: '#app',
    render: a => a(App),
    router,
    store
});