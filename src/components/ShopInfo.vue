<template>
  <div class="host-class">
    <top-board ></top-board>
    <title class="title-ShopInfo">SuperStore - магазин радиоэлектроники</title>
    <h1 class="h1-ShopInfo">SuperStore - магазин радиоэлектроники</h1>
    <p>Добро пожаловать в SuperStore - магазин радиоэлектроники, где вы найдете все необходимое для своих электронных
      проектов! Мы предлагаем широкий ассортимент компонентов, модулей, плат и инструментов от ведущих производителей.
      Наша команда состоит из опытных специалистов, которые всегда готовы помочь вам с выбором и ответить на любые
      вопросы.</p>
    <ul class="ul-ShopInfo">
      <li class="li-ShopInfo">Большой выбор компонентов и модулей</li>
      <li class="li-ShopInfo">Качественные товары от ведущих производителей</li>
      <li class="li-ShopInfo">Доступные цены и регулярные скидки</li>
      <li class="li-ShopInfo">Оперативная доставка по всей стране</li>
      <li class="li-ShopInfo">Квалифицированная поддержка клиентов</li>
    </ul>
    <p class="p-ShopInfo">Наш магазин расположен по адресу: г. Москва, ул. Ленина, д. 10. Вы также можете сделать заказ
      на нашем сайте или
      по
      телефону +7 (495) 123-45-67. Мы работаем ежедневно с 9:00 до 21:00. Приходите к нам за качественными компонентами
      и
      лучшим сервисом!</p>
    <p class="p-ShopInfo">С уважением, команда SuperStore.</p>
    <bottom-board></bottom-board>
  </div>
</template>
<script>
//import blobButton from "@/buttun.vue"
// import TopBoard from "@/top-board.vue";
import TopBoard from "@/components/top-board.vue";
import BottomBoard from "@/components/bottom-board.vue";

export default {
  name: 'shop-info',
  components: {BottomBoard,TopBoard},
  data: function () {
    return {
      // infoButton: false
    }
  },
  //components: {TopBoard},
  methods: {
    //   updateVariable() {
    // this.$emit('updateParentVariable', {
    //  infoButton: false
    // });

    //}
  }
}
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
}

.h1-ShopInfo {
  color: hsl(var(--mainHue), 60%, 43%);
  font-size: 36px;
  text-align: center;
  margin-top: 50px;
}

.p-ShopInfo {
  color: #333333;
  font-size: 18px;
  line-height: 1.5;
  margin: 30px 0;
  text-align: justify;
  padding: 0 86px;
}

.ul-ShopInfo {
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
}

.li-ShopInfo {
  margin-bottom: 10px;
}

.a-ShopInfo {
  color: #0074D9;
  text-decoration: none;
}

.a-ShopInfo:hover {
  text-decoration: underline;
}
</stylescoped>