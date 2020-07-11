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
      rndNum: null,
      rndLetter: null,
      clicks: 0
    };
  },

  methods: {
    clickListener() {
      switch (this.chooseFunc) {
        case "num":
          this.generateRandomNumber();
          break;
        case "letter":
          this.generateRandomLetter();
          break;
        case "quantity":
          this.valueOfClicks();
          break;
      }
    },

    generateRandomNumber() {
      this.rndNum = Math.floor(Math.random() * 1000);
      this.$emit("rndNumber", this.rndNum);
    },

    generateRandomLetter() {
      const randomLetterPosition = Math.round(
        65 - 0.5 + Math.random() * (90 - 65 + 1)
      );
      this.rndLetter = String.fromCodePoint(Math.floor(randomLetterPosition));
      this.$emit("rndLetter", this.rndLetter);
    },

    valueOfClicks() {
      this.clicks++;
      this.$emit("quantityClicks", this.clicks);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>