<template>
  <dir id="messages">
    <form>
      <p><input type="text" v-model="text"></p>
      <p><input type="submit" value="send" @click="send"></p>
    </form>
    <hr>
    <p v-for="message in messages" :key="message.id">
      {{ message }}
    </p>
  </dir>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Messages',
  data() {
    return {
      text: ''
    }
  },
  computed: {
    messages() {
      return this.$store.state.messenger.messages;
    }
  },
  methods: {
    ...mapActions(['postMessage']),
    send() {
      this.postMessage(this.text);
    },
  }
}
</script>

<style>
  #messages {
    padding: 0;
  }
  p {
    margin: 5px;
  }
  hr {
    margin: 25px 100px 25px 100px;
  }
</style>