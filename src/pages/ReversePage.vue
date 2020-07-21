<template>
  <div class="reverse">
    <h1>Reverse Page</h1>
    <h3>String: {{str}}</h3>
    <h3>Number: {{num}}</h3>

    <Reverse
			:transformString="str"
			@getInvertString="modStr"
			:transformNumber='num'
			@getModNumber="modNum"
		>
		<input type="text" placeholder="Type some text" v-model="str" />
    <input type="text" placeholder="Type some number" v-model="num" />
    </Reverse>
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
input {
  display: block;
  width: 250px;
  margin: 10px 0 10px 0;
}
</style>