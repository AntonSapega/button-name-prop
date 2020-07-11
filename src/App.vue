<template>
  <div id="app">
    <Button class="btn" :btnName="randomNumber" @getMethod="callRandomNumber" />
    <Button class="btn" :btnName="randomLetter" @getMethod="callRandomLetter" />
    <Button class="btn" :btnName="quantityClicks" @getMethod="callQuantityClicks" />
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
      quantityClicks: 'Quantity of clicks',

      clicks: 0
    }
  },

  methods: {
    callRandomNumber($event) {
      alert($event.rndNum)
    },

    callRandomLetter($event) {
      alert($event.rndLetter)
    },

    callQuantityClicks($event) {
      alert($event.clicks)
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
