<template>
  <div>
    <h1 class="title">Second Page</h1>

    <Button class="btn" :btnName="randomNumber" chooseFunc="num" @rndNumber="callRandomNumber" />
    <Button class="btn" :btnName="randomLetter" chooseFunc="letter" @rndLetter="callRandomLetter" />
    <Button class="btn" :btnName="quantityClicks" chooseFunc="quantity" @quantityClicks="callQuantityClicks" />
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
    }
  },

  methods: {
    callRandomNumber($event) {
      alert($event)
    },

    callRandomLetter($event) {
      alert($event)
    },

    callQuantityClicks($event) {
      alert($event)
    }
  }
};
</script>

<style>

</style>