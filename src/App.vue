<template>
  <div id="app">
    <Button class="btn" :btnName="randomNumber" @callAlert="generateRandomNumber" />
    <Button class="btn" :btnName="randomLetter" @callAlert="generateRandomLetter" />
    <Button class="btn" :btnName="quantityClicks" @callAlert="valueOfClicks" />
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
    generateRandomNumber() {
      alert(Math.floor(Math.random() * 1000))
    },

    generateRandomLetter() {
      const randomLetterPosition = Math.round( 65 - 0.5 + Math.random() * (90 - 65 + 1) )
      alert(String.fromCodePoint( Math.floor(randomLetterPosition) ))
    },

    valueOfClicks() {
      this.clicks++
      alert(this.clicks)
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
