<template>
  <div>
    <top-board :item-on-cart="itemsInCart"></top-board>
    <div class='product-main'>
      <div class='line'>
        <div class="product-image">
          <img v-bind:src="require('../assets/' + image +'.jpeg')" v-bind:alt="altText" width="640px" height="640px"/>
          <div class="arrows-wrap">
            <div class="arrow arrow-left" v-on:click=" imageVariant %= 6 ; image=image.split('').slice(0, -1).join('');
              imageVariant+=1;image += imageVariant;">
            </div>
            <div
                v-on:click="imageVariant = imageVariant<=1? 6 :imageVariant ; image=image.split('').slice(0, -1).join(''); imageVariant-=1;image += imageVariant;"
                class="arrow arrow-right"></div>
          </div>
        </div>
        <div class="product-info">
          <h1 id="itemName">{{ itemTitle }}</h1>
          <p id="itemDescription">{{ description }}</p>
          <p id='inStock' v-if="variants[activeVariant].inStock > 10 ">Есть в наличии</p>
          <p id='inStock' v-else-if="variants[activeVariant].inStock <= 10 && variants[activeVariant].inStock > 0 ">
            Почти
            закончились!</p>
          <p id='inStock' v-else>Отсустует на складе</p>
          <ul>
            <li v-for="(detail, index) in details" v-bind:key="index">{{ detail }}</li>
          </ul>
          <div id="variantsOfProductWarp">
            <button id='variantsOfProduct' v-for="(variant, index) in variants" v-bind:key="index"
                    :class="{active:activeVariant===variant.variantId,inactive:activeVariant!==variant.variantId}"
                    v-on:click="activeVariant=variant.variantId">{{
                variant.voltage
              }}
            </button>
          </div>
          <div class="line-wrap" style="width: 200px">
            <button class='addToCartB' v-on:click="addToCart" :disabled="!(variants[activeVariant].inStock)"
                    :class="{disabledButton:!(variants[activeVariant].inStock)}"
            >Добавить в корзину
            </button>
            <div>{{ itemsInCart }}</div>
          </div>
        </div>
      </div>
      <div class='line'>
        <div class="otzyv">
          Оставить отзыв о товаре:
          <stars-rate></stars-rate>
        </div>
      </div>
    </div>
    <bottom-board @updateVisibleOfPage="openContent"></bottom-board>
  </div>
</template>

<script>
import starsRate from "@/components/stars-rate.vue";
import bottomBoard from "@/components/bottom-board.vue";
import topBoard from "@/components/top-board.vue";

export default {
  name: 'product-main',
  components: {topBoard, bottomBoard, starsRate},
  data: function () {
    return {
      item: 'Payalnik',
      brand: 'Silverflo',
      description: 'Паяльная станция Silverflo 8586D с термофеном и цифровыми дисплеем, комплектация в ассортименте',
      image: "payalnik1",
      imageVariant: 1,
      altText: 'Фото 1',

      details: ['Доставка из: Российская Федерация', 'Высокий рейтинг и хорошие отзывы', 'Ускоренная доставка'],
      variants: [{
        variantId: 0,
        voltage: '110V-127VUS',
        inStock: 100
      },
        {
          variantId: 1,
          voltage: '220VEU',
          inStock: 1
        },
        {
          variantId: 2,
          voltage: '230VUK',
          inStock: 0
        }],
      activeVariant: 1,
      itemsInCart: 0,
      content: {
        productStatus: true,
        infoAbout: false,
        koefPolitikStatus: false
      }
    }
  },
  props: [
    'app'
  ],
  methods: {
    addToCart() {
      this.itemsInCart++;
    },
    openContent(v) {
      for (let block in this.content) {
        this.content[block] = block === v.blockName;
      }

    }
  },
  computed: {
    itemTitle() {
      return this.item + ' ' + this.brand;
    }
  }

}
</script>
<style>
.otzyv {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.line {
  display: flex;
}

.product-main {
  position: relative;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
}

.product-image {
  position: relative;
  display: flex;
  justify-content: center; /* Центрируем по горизонтали */
  align-items: center; /* Центрируем по вертикали */
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
  margin-right: 20px;
  min-height: 640px;
  min-width: 640px;
}

.product-info {
  align-items: baseline;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
  display: flex;
}

#itemName {
  position: relative;

}

#inStock {
  position: relative;
}

#variantsOfProduct {

  border-radius: 20px;
}

#variantsOfProductWarp {
  display: flex;
  flex-direction: row;
  gap: 1vw;
}

.active {
  border: 2px solid cornflowerblue;
}


.inactive {
  border: 2px dashed cornflowerblue;
  background-clip: content-box;
}

.line-wrap {
  display: grid;
  width: 100%;
  flex-direction: row;
  margin: 5px 0;
}


.cart {
  display: flex;
  border: dotted;
  top: 100px;
  left: 400px;
  justify-self: flex-end;
}

.addToCartB {
  width: 200px;
  background-color: hsl(calc(var(--mainHue) - 86deg), 39%, 49%);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  /* transition-duration: 0.4s; /* время анимации при наведении */
  transfrom: translateY(0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  --dur: .15s;
  --delay: .15s;
  --radius: 16px;

  transition: border-top-left-radius var(--dur) var(--delay) ease-out,
  border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
  border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
  border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
  transform calc(var(--dur) * 4) ease-out,
  background calc(var(--dur) * 4) steps(4, jump-end);
}


.addToCartB:hover {
  /* box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);*/
  transform: translateY(-4px);
  /*background: hsl(230deg, 50%, 45%);*/
  background: hsl(var(--mainHue), 100%, 43%);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.disabledButton {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.arrows-wrap {
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.arrow:hover {
  /*box-shadow: 2px -2px 3px 0px #f0f;*/
}

.arrow:hover:before {
  content: '';
  position: absolute;
  top: 30%;
  left: 67%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background-color: rgba(169, 169, 169, 0.5);
  border-radius: 50%;
  z-index: -1;
}

.arrow {
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
}

.arrow-right {
  transform: rotate(45deg);
}

.arrow-left {
  transform: rotate(225deg);
}
</style>
