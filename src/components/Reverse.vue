<template>
  <div class="reverse">

    <input type="text" placeholder="Type some text" v-model = stringField />

  </div>
</template>

<script>
export default {
  name: "Reverse",

  props: {
    sendStr: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      stringField: this.sendStr,
    };
  },

  watch: {
    stringField() {
      this.$emit('getInvertString', this.reverseString);
    },

    sendStr(value) {
      this.stringField = value
    },

    numberValue(value) {
      const num = value % 2 !== 0
        ? value - 2 * value
        : value * 3;

        this.$emit("getModNumber", num);
    }
  },

  computed: {
    reverseString() {
      return this.stringField.split('').reverse().join('');
    }
  }
};
</script>

<style scoped>
.reverse {
  display: flex;
  align-items: center;
  flex-direction: column;
}
input {
  display: block;
  width: 250px;
  margin: 5px 0 10px 0;
  height: 25px;
  font-size: 16px;
}
</style>