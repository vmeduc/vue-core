<template>
    <div id="about">
        <h1>About</h1>
        <router-link to="/about/this">This</router-link> |
        <router-link to="/about/that">That</router-link>
        <router-view/>
    </div>
</template>

<script>
import {myMixin} from 'mixins.js';

export default {
    name: 'About',
    mixins: [myMixin],
    myOptions: 'ontion in "About" - about hello'
}
</script>

<style>

</style>