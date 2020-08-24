import Vue from 'vue';
import Vuex from 'vuex';

import messenger from 'store/messenger';


Vue.use(Vuex);

const store = new Vuex.Store({
  store: {
    someOptions: false
  },
  modules: {
    messenger
  }
});

export default store;