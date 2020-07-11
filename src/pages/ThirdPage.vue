<template>
  <div>
    <h1 class="title">Third Page</h1>

    <Button class="btn" :btnName="randomNumber" chooseFunc="num" @rndNumber="callAlert" />
    <Button class="btn" :btnName="randomLetter" chooseFunc="letter" @rndLetter="callAlert" />
    <Button class="btn" :btnName="quantityClicks" chooseFunc="quantity" @quantityClicks="callAlert" />
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
    callAlert($event) {
      alert($event)
    }
  }
};
</script>

<style>

</style>