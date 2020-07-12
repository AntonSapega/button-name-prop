<template>
  <div>
    <h1 class="title">Second Page</h1>

    <Button class="btn" btnName="Random number" chooseFunc="num" @getResult="callAlert" />
    <Button class="btn" btnName="Random letter" chooseFunc="letter" @getResult="callAlert" />
    <Button class="btn" btnName="Quantity of clicks" chooseFunc="quantity" @getResult="callAlert" />
  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  components: {
    Button
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