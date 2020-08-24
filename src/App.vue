<template>
  <div id="app">
    <navi/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navi from 'pages/Navi.vue';

export default {
  name: 'App',
  components: {
    Navi
  },
  methods: {
    ...mapActions(['init'])
  },
  beforeMount() {
    this.init();
    this.$log.success('Успешно', 'Логгер работает успешно');
  }
};
</script>

<style scope>
  #app {
    text-align: center;
  }
</style>