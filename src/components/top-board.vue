<template>
  <div class="top-board">
    <div class="board"
         style="background-color: hsl(var(--mainHue), 100%, 43%); top:0;justify-content: space-between; align-items: center; font-family: Arial, sans-serif;">
      <h1 style="color: #fff; font-size: 36px; margin: 0; position: relative; left: 30px ">SuperStore</h1>
      <div class='buttons' style="display: flex;">
        <button
            style="background-color: #fff; cursor: pointer; color:hsl(var(--mainHue), 100%, 43%); border: none; padding: 10px 20px; font-size: 16px; font-weight: bold; margin-right: 40px;">
          Каталог
        </button>
        <router-link style="text-decoration: none; color: inherit;"
                     :to="this.$route.name === 'shopInfo' ? { name: 'product' } : { name: 'shopInfo' }">
          <div>
            <blob-button :button-text="this.$route.name=== 'shopInfo' ? blobText[1] : blobText[0]"></blob-button>
          </div>
        </router-link>
        <span class="cart-icon material-symbols-outlined">
              shopping_basket
        </span>
        <div class="itemOnCart-count">{{ itemOnCart }}</div>
        <!--0074D9AE-->
        <!--        <button class="info-shop-button" v-on:click="updateVariable"-->
        <!--                style="background-color: #fff; cursor: pointer; color: #0074D9; border: none; padding: 10px 20px; font-size: 16px; font-weight: bold;">-->
        <!--          О нас-->
        <!--        </button>-->

      </div>
    </div>
  </div>
</template>
<script>
import blobButton from "@/components/buttun.vue"

export default {
  name: 'top-board',
  props: {
    itemOnCart: {
      type: Number,
      required: true,
      
    }
  },
  data: function () {
    return {
      open: true,
      blobText: ['О нас', 'Назад'],

    }
  },
  components: {blobButton},

  methods: {}

}
</script>
<style scoped>
.cart-icon {
  font-size: 50px;
}

.buttons {
  position: relative;
  right: 29px;
  display: flex;
}

:global(.board) {
  position: absolute;
  left: 0;
  display: flex;
  height: 10%;
  width: 100%;
}
</style>

