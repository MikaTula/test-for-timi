<template>
  <div id="app">
    <div id="Main">
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
:root {
  --mainHue: 208deg;
}
html{
  position: relative;
  min-height: calc(100% + 185px);
}
* {
  box-sizing: border-box;
  //font-family: 'Noto Sans JP', sans-serif;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body {
  margin: 0 0 210px;
  padding: 0;
}

#app {

  color: #2c3e50;
  user-select: none;
}


#Main {
  display: flex;
}
.host-class{
  display: flex;
  flex-direction: column;
  flex:0px 1 1;
}
.router-link{
  text-decoration: none;
  color: inherit;
}


</style>
