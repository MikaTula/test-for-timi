<template>
  <div id="app">
    <div id="Main" style="padding-top: 100px">
      <router-view></router-view>
    </div>
    <!--    <koef-politic v-if="content.koefPolitikStatus" :backToProduct="backToProduct"></koef-politic>-->
    <!-- <div v-on:click="change">click</div>-->
  </div>

</template>


<script>


export default {
  name: 'App',
  // components: {Product, topBoard, ShopInfo, bottomBoard, starsRate},
  data: function () {
    return {}
  },
  methods: {
    // updateItemsInCart(v) {
    //   this.itemInCart = v;
    //   console.log('updateItemsInCart', this.itemInCart);
    // },
    // openContent(v) {
    //   for (let block in this.content) {
    //     if (block === v.blockName) {
    //       this.content[block] = true;
    //     } else {
    //       this.content[block] = false;
    //     }
    //   }
    //
    // }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  --mainHue: 208deg;
}

* {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  user-select: none;
}


#Main {
  display: flex;
  margin-left: 2vw;
}


</style>
