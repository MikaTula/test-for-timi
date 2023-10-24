<template>
  <div class="politik-bodi">
    <header class="politik-header">
      <router-link
          style="text-decoration: none; color: inherit;"
          :to="{name:'product'}">
        <button class="back-arrow-button"><span class="back-arrow"></span></button>
      </router-link>
      <h1 class="politik-h1">Политика конфиденциальности</h1>
    </header>
    <main class="politik-main">
      <section class="politik-selection">
        <h2 class="politik-h2">1. Сбор информации</h2>
        <p>Магазин SuperStore собирает информацию о пользователях, включая, но не ограничиваясь, следующими данными:</p>
        <ul class="politik-ul">
          <li>Имя</li>
          <li>Адрес электронной почты</li>
          <li>Адрес доставки</li>
          <li>Информация о заказах</li>
        </ul>
      </section>
      <section class="politik-section">
        <h2 class="politik-h2">2. Использование информации</h2>
        <p>Мы используем собранную информацию для следующих целей:</p>
        <ul class="politik-ul">
          <li>Обработка и доставка заказов</li>
          <li>Связь с пользователями</li>
          <li>Предоставление информации о товарах и акциях</li>
        </ul>
      </section>
      <section class="politik-section">
        <h2 class="politik-h2">3. Защита информации</h2>
        <p>Магазин SuperStore принимает меры для защиты конфиденциальности ваших данных, включая использование
          безопасных
          методов передачи информации.</p>
      </section>
      <section class="politik-section">
        <h2 class="politik-h2">4. Согласие с политикой конфиденциальности</h2>
        <p>Используя наш веб-сайт, вы соглашаетесь с нашей политикой конфиденциальности.</p>
      </section>
    </main>
    <footer class="politik-footer">
      <p>&copy; 2023 SuperStore - Все права защищены.</p>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    backToProduct: Function
  },
  methods: {}
}
</script>
<style scoped>
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

.politik-bodi {
  width: 100%;
  height: 100%;
  margin: 70px 0 0 0;
}

.politik-header {
  margin: -2px 0px 0px 0px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.politik-main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 23px;
}

.politik-section {
  margin-bottom: 20px;
}

.politik-h2 {
  color: #333;
}

.politik-h1 {
  color: #fff;
}

.politik-ul {
  list-style-type: disc;
  margin-left: 20px;
}

/* Стили для подвала */
.politik-footer {
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}
</style>