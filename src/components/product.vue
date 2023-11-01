<template>

  <div class="host-class">
    <top-board></top-board>
    <div class='product'>
      <div class='line'>
        <div class="product__image">
          <img v-bind:src="require('../assets/' + image +'.jpeg')" v-bind:alt="altText" width="640px" height="640px"/>
          <div class="product__image__arrows-wrap arrows">
            <div class="arrow arrows__arrow-left" v-on:click=" imageVariant %= 6 ; image=image.split('').slice(0, -1).join('');
              imageVariant+=1;image += imageVariant;">
            </div>
            <div
                v-on:click="imageVariant = imageVariant<=1? 6 :imageVariant ; image=image.split('').slice(0, -1).join(''); imageVariant-=1;image += imageVariant;"
                class="arrow arrows__arrow-right"></div>
          </div>
        </div>
        <div class="product__info">
          <h1 class="product__info__item-name">{{ itemTitle }}</h1>
          <p class="product__info__item-description">{{ description }}</p>
          <p class='product__info__in-stock' v-if="variants[activeVariant].inStock > 10 ">Есть в наличии</p>
          <p class='product__info__in-stock'
             v-else-if="variants[activeVariant].inStock <= 10 && variants[activeVariant].inStock > 0 ">
            Почти
            закончились!</p>
          <p id='product__info__in-stock' v-else>Отсустует на складе</p>
          <ul>
            <li v-for="(detail, index) in details" v-bind:key="index">{{ detail }}</li>
          </ul>
          <div class=" product__info__variants-of-product-wrap product-variants-wrap">
            <button class='product-variants-wrap__variants-of-product' v-for="(variant, index) in variants"
                    v-bind:key="index"
                    :class="{'product-variants-wrap__variants-of-product__active':activeVariant===variant.variantId,'product-variants-wrap__variants-of-product__inactive':activeVariant!==variant.variantId}"
                    v-on:click="activeVariant=variant.variantId">{{
                variant.voltage
              }}
            </button>
          </div>
        </div>
        <div class="product__buy">
          <div class="product__buy__amount">{{ amount }}</div>
          <div class="product__buy__buy-list buy-buttons">
            <!--            <div class="line-wrap" style="width: 200px">-->
            <button class='buy-buttons__add-to-cart' v-on:click="addToCart"
                    :disabled="!(variants[activeVariant].inStock)">Добавить в корзину

            </button>
            <button class="buy-buttons__buy-now"
                    :disabled="!(variants[activeVariant].inStock)"> Купить сейчас
            </button>
            <!--            </div>-->
          </div>
        </div>
      </div>
      <div class='line'>
        <div class="product__otzyv">
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
      id:'0001',
      item: 'Payalnik',
      brand: 'Silverflo',
      description: 'Паяльная станция Silverflo 8586D с термофеном и цифровыми дисплеем, комплектация в ассортименте',
      amount: '3000 ₽',
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
      this.$store.commit('addItemInCart', this.itemTitle);

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
<style lang="scss">
@mixin broderRadiusButton($color1: black, $color2: orange) {
  margin-top: 20px;
  width: 200px;
  background-color: $color1; //hsl(calc(var(--mainHue) - 86deg), 39%, 49%);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s; /* время анимации при наведении */
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


  &:hover {
    /*
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
    *! transform: translateY(-4px);
    */
    /*background: hsl(230deg, 50%, 45%);*/
    background: $color2; //hsl(var(--mainHue), 100%, 43%);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
}

.line {
  display: flex;
  gap: 24px;
  padding: 0px 24px;
}

.product {
  position: relative;
  display: flex;
  margin-top: 24px;
  flex-direction: column;

  &__image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
    min-height: 640px;
    min-width: 640px;

    &__arrows-wrap {
      box-sizing: border-box;
      padding: 16px;
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;

    }

  }

  &__buy {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    height: 140px;
    padding: 24px;
    background-color: hsl(var(--mainHue),0%,92%);
    border-radius: 16px;
    &__amount {
      font-size: 32px;
    }

    &__buy-list {
      display: flex;
      gap: 12px;

    }
  }

  &__info {
    align-items: baseline;
    flex-direction: column;
    max-width: 400px;
    font-weight: 400;
    font-size: 20px;
    display: flex;

    &__item-name {
    }

    &__item-description {
    }

    &__in-stock {
    }


    &__variants-of-product-wrap {
      display: flex;
      flex-direction: row;
      gap: 1vw;
    }
  }

  &__otzyv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
}

/* ============== СТРЕЛКИ ==============*/
.arrows {

  &__arrow-left {


    transform: rotate(225deg);

  }

  &__arrow-right {
    transform: rotate(45deg);
  }


}

/* ============== СТРЕЛКА ==============*/
.arrow {
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;

  &:hover:before {
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
}

/* ============== ОБЕРТКА ВАРИАНТОВ ==============*/
.product-variants-wrap {
  &__variants-of-product {
    &__active {
      border: 2px solid hsl(var(--mainHue), 79%, 66%);
    }

    &__inactive {
      border: 2px dashed hsl(var(--mainHue), 79%, 66%);
      background-clip: content-box;
    }

    border-radius: 20px;
  }
}

/* ============== СТИЛИ КНОПОК ==============*/
.buy-buttons {

  &__add-to-cart {
    width: 200px;
    height: 38px;
    @include broderRadiusButton(hsl(calc(var(--mainHue) - 86deg), 39%, 49%), hsl(var(--mainHue), 100%, 43%))
  }

  &__buy-now {
    width: 200px;
    height: 38px;
    @include broderRadiusButton(hsl(var(--mainHue), 100%, 43%), hsl(calc(var(--mainHue) - 86deg), 39%, 49%))
  }
}

/*arrow:hover {
  box-shadow: 2px -2px 3px 0px #f0f;
}*/

/*.otzyv {*/

/*}*/

/*.line {*/
/*  display: flex;*/
/*}*/


/*.product-info {*/

/*}*/

/*#itemName {*/
/*  position: relative;*/

/*}*/

/*#inStock {*/
/*  position: relative;*/
/*}*/

/*#variantsOfProduct {*/


/*}*/

/*#variantsOfProductWarp {*/

/*}*/


/*.inactive {*/

/*}*/

/*.line-wrap {*/
/*  display: grid;*/
/*  width: 100%;*/
/*  flex-direction: row;*/
/*  margin: 5px 0;*/
/*}*/


/*.cart {*/
/*  display: flex;*/
/*  border: dotted;*/
/*  top: 100px;*/
/*  left: 400px;*/
/*  justify-self: flex-end;*/
/*}*/


//.disabledButton {
//  opacity: 0.5;
//  cursor: not-allowed;
//  pointer-events: none;
//}


</style>
