<template>
  <div class="top-board">
    <div class="top-board__board">
      <h1 class="top-board__board__header">SuperStore</h1>
      <div class='top-board__board__buttons top-buttons'>
        <button class="top-buttons__catalog">Каталог</button>
        <router-link class="top-board__board__about-us router-link"
                     :to="this.$route.name === 'shopInfo' ? { name: 'product' } : { name: 'shopInfo' }">
          <div>
            <blob-button :button-text="this.$route.name=== 'shopInfo' ? blobText[1] : blobText[0]"></blob-button>
          </div>
        </router-link>
        <div class="top-buttons__cart">
          <router-link class="router-link"
              :to="{name: 'cart'}">
        <span class="cart-icon material-symbols-outlined">
              shopping_basket
        </span>
          </router-link>
          <div class="top-board__board__item-on-cart-count">{{ (this.$store.getters.getCartItems).length }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blobButton from "@/components/buttun.vue"

export default {
  name: 'top-board',
  props: {
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
<style lang="scss" scoped>
.top-board {
  &__board {
    padding: 0 10px;
    background-color: hsl(var(--mainHue), 100%, 43%);
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__header {
      color: #fff;
      font-size: 36px;
      margin: 0;
      display: flex;
      align-items: center;
    }

    &__buttons {
      display: flex;
    }

    &__about-us {

    }

    &__item-on-cart-count {
      display: flex;
      align-self: baseline;
      color: hsl(210, 29%, 24%);
      border-radius: 8px;
      font-size: 24px;
    }

  }


}

.top-buttons {

  flex-wrap: wrap;
  align-content: space-around;
  gap: 16px;

  &__catalog {
    background-color: #fff;
    cursor: pointer;
    color: hsl(var(--mainHue), 100%, 43%);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
  }

  &__cart {
    display: flex;
  }

}

.cart-icon {
  font-size: 50px;
}

/*.itemOnCart-count{*/
/*  display: flex;*/
/*  align-self: baseline;*/
/*  color: hsl(210, 29%, 24%);*/
/*  border-radius: 8px;*/
/*  font-size: 24px;*/
/*}*/
/*.cart-icon {*/
/*  font-size: 50px;*/
/*}*/

/*.buttons {*/
/*  position: relative;*/
/*  right: 29px;*/
/*  display: flex;*/
/*}*/

</style>

