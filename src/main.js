import Vue from 'vue';
import VueRouter from 'vue-router';

import App from 'pages/App.vue';
import routes from 'routes/routes';


const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.use(VueRouter);

let vm = new Vue({
    el: '#app',
    render: a => a(App),
    router
});