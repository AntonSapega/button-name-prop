<template>
  <div class="reverse">
    <h1>Reverse Page</h1>
    <h3>String: {{representationSting}}</h3>

    <input type="text" placeholder="Main area for text" v-model="str" />

    <Reverse :sendStr="str" @getInvertString="modString" />
  </div>
</template>

<script>
import Reverse from "../components/Reverse.vue";

export default {
  components: {
    Reverse,
  },

  data() {
    return {
      str: "",
      representationSting: null,
    };
  },

  methods: {
    modString($event) {
      this.representationSting = $event;
    },
  },
};
</script>

<style scoped>
.reverse {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1,
h2,
h3 {
  margin: 5px;
}

input {
  display: block;
  width: 250px;
  margin: 5px 0 10px 0;
  height: 25px;
  font-size: 16px;
}
</style>