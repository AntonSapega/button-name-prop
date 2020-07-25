<template>
  <div class="reverse">
    <h1>Reverse Page</h1>
    <h3>String: {{str}}</h3>
    <h3>Number: {{num}}</h3>

    <Reverse
			@getInvertString="modStr"
      @getModNumber="modNum"
		/>

  </div>
</template>

<script>
import Reverse from "../components/Reverse.vue";

export default {
  components: {
    Reverse
  },

  data() {
    return {
      str: '',
      num: ''
    };
  },

  methods: {
		modStr($event) {
			this.str = $event;
		},

		modNum($event) {
			this.num = $event;
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

h1, h2, h3 {
  margin: 5px;
}
</style>