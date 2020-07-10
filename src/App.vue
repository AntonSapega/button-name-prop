<template>
  <div id="app">
    <Button class="btn" :btnName="randomNumber" @callAlert="callAlertHandler" />
    <Button class="btn" :btnName="randomLetter" @callAlert="callAlertHandler" />
    <Button class="btn" :btnName="quantityClicks" @callAlert="callAlertHandler" />
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
      randomNumber: 'Random number',
      randomLetter: 'Random letter',
      quantityClicks: 'Quantity of clicks'
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

.btn {
  margin: 25px;
}
</style>
