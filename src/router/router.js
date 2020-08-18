import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from 'pages/Dashboard.vue';
import About from 'pages/About.vue';
import Login from 'pages/Login.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: "/about",
        component: About
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/*",
        component: Dashboard,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL
});

export default router;