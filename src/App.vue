<template>
  <div id="app">
    <navi/>
    <router-view/>
  </div>
</template>

<script>
import Navi from 'pages/Navi.vue';

export default {
  name: 'App',
  components: {
    Navi
  },
  beforeMount() {
    this.$store.dispatch('init')
  }
};
</script>

<style scope>
  #app {
    text-align: center;
  }
</style>