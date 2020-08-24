import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from 'pages/Dashboard.vue';
import About from 'pages/About.vue';
import AboutThis from 'pages/AboutThis.vue';
import AboutThat from 'pages/AboutThat.vue';
import Login from 'pages/Login.vue';
import Messages from 'pages/Messages.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: "/messages",
        component: Messages
    },
    {
        path: "/about",
        component: About,
        children: [
            {
                path: "/about/this",
                component: AboutThis
            },
            {
                path: "/about/that",
                component: AboutThat
            },
            {
                path: "*",
                component: About
            }

        ]
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "*",
        component: Dashboard,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;