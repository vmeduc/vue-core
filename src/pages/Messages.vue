<template>
  <dir id="messages">
    <form>
      <p><input type="text" v-model="text"></p>
      <p><input type="submit" value="send" @click="send"></p>
    </form>
    <hr>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message }}
      </li>
    </ul>
  </dir>
</template>

<script>
export default {
  name: 'Messages',
  data() {
    return {
      text: ''
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  methods: {
    send() {
      this.$store.dispatch('postMessage', this.text)
    }
  }
}
</script>

<style>

</style>