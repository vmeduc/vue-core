<template>
    <div id="app">
        <navi/>
        <router-view/>
    </div>
</template>

<script>
import 'styles/style.css';

import Navi from 'pages/Navi.vue';

export default {
    name: 'App',
    components: {
        Navi
    }
}
</script>

<style>

</style>