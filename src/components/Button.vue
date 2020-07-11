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
    }
  },

  data() {
    return {
      methodsOfButton: {
        rndNum: null,
        rndLetter: null,
        clicks: 0,

        generateRandomNumber() {
          this.rndNum = Math.floor(Math.random() * 1000);
        },

        generateRandomLetter() {
          const randomLetterPosition = Math.round(
            65 - 0.5 + Math.random() * (90 - 65 + 1)
          );
          this.rndLetter = String.fromCodePoint(
            Math.floor(randomLetterPosition)
          );
        },

        valueOfClicks() {
          this.clicks++;
        }
      }
    };
  },

  methods: {
    clickListener() {
      this.methodsOfButton.generateRandomNumber();
      this.methodsOfButton.generateRandomLetter();
      this.methodsOfButton.valueOfClicks();

      this.$emit("getMethod", this.methodsOfButton);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>