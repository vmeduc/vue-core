<template>
  <div id="login">
    <h1>Log In</h1>
    <form>
      <p>
        <input type="text" placeholder="login" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <input type="submit" value="submit" />
      </p>
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