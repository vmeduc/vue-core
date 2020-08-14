import Vue from 'vue'

import App from './pages/App.vue'

let vm = new Vue({
    el: '#app',
    render: a => a(App)
})