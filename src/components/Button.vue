<template>
    <div class="btn">
        <button type="button" @click="callAlert">{{btnName}}</button>
    </div>
</template>

<script>
export default {
	name: 'Button',
	props: {
		btnName: {
      type: String,
      required: true
    }
	},
    data() {
        return {
   
        }
    },

    methods: {
        callAlert() {
            alert('Hello World')
        }
    }
};
</script>

<style lang="scss" scoped>

</style>