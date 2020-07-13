<template>
  <div class="btn">
    <button type="button" @click="clickListener">{{btnName}}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnName: {
      type: String,
      required: true
    },

    chooseFunc: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      posFirstLetterInUnicode: 65,
      posLastLetterInUnicode: 90,
      clicks: 0,
      returnValue: null
    };
  },

  methods: {
    clickListener() {
      switch (this.chooseFunc) {
        case "num":
          this.returnValue = Math.floor(Math.random() * 1000);
          break;
        case "letter":
          this.returnValue = String.fromCodePoint( this.randomLetter() );
          break;
        case "quantity":
          this.clicks++
          this.returnValue = this.clicks
          break;
      }

      this.$emit('getResult', this.returnValue)
    },

    randomLetter() {
      return Math.floor(
        Math.round(this.posFirstLetterInUnicode - 0.5 + Math.random() *
        (this.posLastLetterInUnicode - this.posFirstLetterInUnicode + 1))
      )
    }
  }
};
</script>

<style lang="scss" scoped>
</style>