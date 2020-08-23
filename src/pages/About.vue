<template>
    <div id="about">
        <h1>About</h1>
        <router-link to="/about/this">This</router-link> |
        <router-link to="/about/that">That</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>

</style>