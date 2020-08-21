import Vue from 'vue';
import Vuex from 'vuex';

import messenger from 'store/messenger';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    messenger
  }
});

export default store;