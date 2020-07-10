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
	
	methods: {
		clickListener() {
			this.$emit('callAlert')
		}
	}
};
</script>

<style lang="scss" scoped>
</style>