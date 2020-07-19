<template>
  <div>
    <button type="button" @click="invert">Invert</button>
  </div>
</template>

<script>
export default {
  name: 'Reverse',
  props: {
    sendOnTransform: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      value: {
        str: null,
        num: null
      }
    }
  },

  methods: {
    invert() {
      this.value.str = this.sendOnTransform.str.split("").reverse().join("");

      switch ( isNaN(this.sendOnTransform.num) ) {
        case false:
          this.value.num = parseInt(this.sendOnTransform.num, 10) % 2 !== 0
            ? parseInt(this.sendOnTransform.num, 10) - 2 * parseInt(this.sendOnTransform.num, 10)
            : parseInt(this.sendOnTransform.num, 10) * 3
        break;
        
        default:
          alert('You should enter number in field number');
        break;
      }

      
      
      this.$emit('getInvertValues', this.value)
    }
  }
}
</script>

<style scoped>
  
</style>