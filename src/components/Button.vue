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
      clicks: null,

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
          this.returnValue = String.fromCodePoint(
            Math.floor(Math.round(65 - 0.5 + Math.random() * (90 - 65 + 1)))
          );
          break;
        case "quantity":
          this.clicks = this.clicks === null ? 1 : this.clicks + 1;
          this.returnValue = this.clicks
          break;
      }

      this.$emit('getResult', this.returnValue)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>