import Vue from 'vue';
import VueRouter from 'vue-router';

import About from 'pages/About.vue';
import Login from 'pages/Login.vue';
import Main from 'pages/Main.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/about', component: About }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL
});

export default router;