<template>
  <div class="reverse">

    <input type="text" placeholder="Type some text" v-model="stringValue" />
    <input type="number" placeholder="Type some number" v-model="numberValue" />

  </div>
</template>

<script>
export default {
  name: "Reverse",

  data() {
    return {
      stringValue: '',
      numberValue: null,
    };
  },

  watch: {
    stringValue() {
      const str = this.stringValue.split('').reverse().join('');
      this.$emit('getInvertString', str);
    },

    numberValue(value) {
      const num = value % 2 !== 0
        ? value - 2 * value
        : value * 3;

        this.$emit("getModNumber", num);
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