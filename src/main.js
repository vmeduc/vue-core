import Vue from 'vue';

import App from 'App.vue';
import router from 'router/router.js';
import store from 'store';
import {mixinOptions} from 'mixins.js';


Vue.mixin(mixinOptions);

new Vue({
    myOption: 'hello'
})

let vm = new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App),
});