<template>
  <div class="main-wrapper">
    <div class="" v-for="(cartItem,index) in (cartItems)" :key="index">{{cartItem.name}}  {{cartItem.count}}</div>
  </div>
</template>
<script>
export default {
  name: 'shop-cart',
  data: function () {
    return {
      cartItems: (this.countOccurrences(this.$store.getters.getCartItems)),
    }
  },
  methods: {
    countOccurrences(arr) {
      const counts = {};
      const result=[];
      arr.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
      });
      for (let key in counts){
          result.push({name:key, count:counts[key]})
      }

      return result;

    }

  }
}
</script>
<style lang="scss" scoped>

</style>