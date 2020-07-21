<template>
  <div>
    <slot />
    <button type="button" @click="invert">Invert</button>
  </div>
</template>

<script>
export default {
  name: "Reverse",

  props: {
    transformString: {
      type: String,
      required: false
    },

    transformNumber: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      value: {
        str: null,
        num: null
      }
    };
  },

  methods: {
    invert() {
      switch (this.transformString === "") {
        case false:
          this.str = this.transformString
            .split("")
            .reverse()
            .join("");
          this.$emit("getInvertString", this.str);
          break;
      }

      if (
        !isNaN(parseInt(this.transformNumber, 10)) &&
        this.transformNumber !== ""
      ) {
        this.num =
          parseInt(this.transformNumber, 10) % 2 !== 0
            ? parseInt(this.transformNumber, 10) - 2 * parseInt(this.transformNumber, 10)
            : parseInt(this.transformNumber, 10) * 3;
        this.$emit("getModNumber", this.num.toString());
      } else if (this.transformNumber !== "") {
        alert("You should enter number in field number");
      }
    }
  }
};
</script>

<style scoped>
</style>