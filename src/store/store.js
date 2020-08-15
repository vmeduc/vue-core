import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            username: '',
            password: ''
        }
    },
    mutations: {
        setUser(state, [username, password]) {
            
            state.user.username = username;
            state.user.password = password;
        }
    }
});

export default store;