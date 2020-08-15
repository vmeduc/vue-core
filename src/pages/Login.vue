<template>
    <div id="login">
        <h2>Log In</h2>
        <form>
            <p><input type="text" placeholder="login" v-model="username"></p>
            <p><input type="password" placeholder="password" v-model="password"></p>
            <p><input type="submit" value="submit" @click="setUser"></p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }   
    },
    methods: {
        setUser() {
            this.$store.commit('setUser', [this.username, this.password]);
        }
    }
}
</script>

<style scoped>

</style>