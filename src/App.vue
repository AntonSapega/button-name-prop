<template>
  <div id="app">
    <Button :btnName="nameOfButton" @callAlert="callAlertHandler" />
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
  },

  data() {
    return {
      nameOfButton: 'You can change this name'
    }
  },

  methods: {
    callAlertHandler() {
      alert('Hello from parent')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
