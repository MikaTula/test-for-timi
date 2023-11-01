<template>
  <div class="host-class">
    <top-board></top-board>
    <div class="politika">
      <header class="politika__header">
        <router-link class="router-link"

            :to="{name:'product'}">
          <button class="back-arrow-button"><span class="back-arrow"></span></button>
        </router-link>
        <h1 class="politika__header-text">Политика конфиденциальности</h1>
      </header>
      <main class="politika__main">
        <section class="politika__main__selection">
          <h2 class="politika__header-text2">1. Сбор информации</h2>
          <p>Магазин SuperStore собирает информацию о пользователях, включая, но не ограничиваясь, следующими
            данными:</p>
          <ul class="politika__block">
            <li>Имя</li>
            <li>Адрес электронной почты</li>
            <li>Адрес доставки</li>
            <li>Информация о заказах</li>
          </ul>
        </section>
        <section class="politika__main__selection">
          <h2 class="politika__header-text2">2. Использование информации</h2>
          <p>Мы используем собранную информацию для следующих целей:</p>
          <ul class="politika__block">
            <li>Обработка и доставка заказов</li>
            <li>Связь с пользователями</li>
            <li>Предоставление информации о товарах и акциях</li>
          </ul>
        </section>
        <section class="politika__main__selection">
          <h2 class="politika__header-text2">3. Защита информации</h2>
          <p>Магазин SuperStore принимает меры для защиты конфиденциальности ваших данных, включая использование
            безопасных
            методов передачи информации.</p>
        </section>
        <section class="politika__main__selection">
          <h2 class="politika__header-text2">4. Согласие с политикой конфиденциальности</h2>
          <p>Используя наш веб-сайт, вы соглашаетесь с нашей политикой конфиденциальности.</p>
        </section>
      </main>
      <footer class="politika__footer">
        <p>&copy; 2023 SuperStore - Все права защищены.</p>
      </footer>
    </div>
    <bottom-board></bottom-board>
  </div>
</template>
<script>
import TopBoard from "@/components/top-board.vue";
import BottomBoard from "@/components/bottom-board.vue";

export default {
  data: function () {
    return {  a:1,}
  },

  components: {BottomBoard, TopBoard},
  props: {

  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.politika {

  &__header {
    margin: -2px 0px 0px 0px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;

    &__header-text2 {
      color: #333;
    }

    &__header-text {
      color: #fff;
    }
  }

  &__main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 23px;
  }

  &__footer {
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
}

.back-arrow {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid white;
  margin-right: 10px;
}

.back-arrow-button {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.politik-section {
  margin-bottom: 20px;
}


.politika__block {
  list-style-type: disc;
  margin-left: 20px;
}


</style>