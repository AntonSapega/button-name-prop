<template>
  <div class="reverse">
    <h1>Reverse Page</h1>
    <h3>String: {{db.str}}</h3>
    <h3>Number: {{db.num}}</h3>

    <input type="text" placeholder="Type some text" v-model="db.str" />

    <input type="text" placeholder="Type some number" v-model="db.num" />

    <Reverse :sendOnTransform="db" @getInvertValues="modified" />
  </div>
</template>

<script>
import Reverse from '../components/Reverse.vue'

export default {
  components: {
    Reverse
  },

  data() {
    return {
			db: {
				str: '',
				num: null,
			}
      
    };
	},
	
	methods: {
		modified($event) {
			this.db.str = $event.str
			this.db.num = $event.num
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