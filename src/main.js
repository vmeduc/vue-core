import Vue from 'vue';

import App from 'App.vue';
import router from 'router/router.js';
import store from 'store';

import {mxStoreOptions} from 'mixins.js';
import {myLogger} from 'plugins.js';

Vue.use(myLogger);
Vue.mixin(mxStoreOptions);

let vm = new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App),
});