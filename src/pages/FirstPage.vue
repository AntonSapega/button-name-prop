<template>
  <div>
    <h1 class="title">First Page</h1>

    <Button class="btn" :btnName="randomNumber" @getMethod="callRandomNumber" />
    <Button class="btn" :btnName="randomLetter" @getMethod="callRandomLetter" />
    <Button class="btn" :btnName="quantityClicks" @getMethod="callQuantityClicks" />
  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
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
};
</script>

<style>

</style>