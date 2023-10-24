<template>
  <div>
    <div class='none'></div>
    <div class="board bottom-board">
      <div class="company">
        <h1 class="h1-bottomBoard"> © SuperStore</h1>
        <p class="p-bottomBoard">Все права защищены.</p>
      </div>
      <div class="support-and-age">
        <div class="age-limit">
          <span class="circle-bottomBoard">16+</span>
          <p class="p-bottomBoard">Минимальный возраст для доступа.</p>
        </div>
        <div class="support-info">
          <h2 class="h1-bottomBoard">Помощь и поддержка:</h2>
          <ul class="support">
            <router-link
                style="text-decoration: none; color: inherit;" :to="{name:'koefPolitic'}">
              <li><a class="a-bottomBoard">Политика конфиденциальности</a></li>
            </router-link>
            <li><a class="a-bottomBoard" href="#">Мобильная версия</a></li>
          </ul>
        </div>
      </div>
      <div class="info-ul-block">
        <h2 class="h1-bottomBoard">Услуги:</h2>
        <ul class="services">
          <p class="p-bottomBoard">Доставка</p>
          <p class="p-bottomBoard">Самовывоз</p>
          <p class="p-bottomBoard">Сервис-центр</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    openBlock() {
      this.$emit('updateVisibleOfPage', {
        blockName: 'koefPolitikStatus'
      });

    }

  }
}
</script>
<style>
.bottom-board {
  background: #2c3e50;
  bottom: -180px;
  height: 191px;

}

.support-info {
  top: -15px;
}

.support-and-age {
  right: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.info-ul-block {
  position: absolute;
  left: 30vw;
}

.company {
  /*border-radius: 10px;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
}

.h1-bottomBoard {
  color: #333;
}

.p-bottomBoard {
  color: #666;
}

.age-limit {
  position: relative;
  display: flex;
  align-items: center;

}

.circle-bottomBoard {
  width: 40px;
  height: 40px;
  background-color: #ff5733;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin-right: 10px;
}

.services, .support {
  list-style: none;
  padding: 0;
}

.services li, .support li {
  margin: 10px 0;
}

.services li::before {
  content: "\2022"; /* Значок маркера */
  color: #333;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.support li::before {
  content: "\279E"; /* Символ стрелки */
  color: #333;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  margin-right: 5px;
}

.a-bottomBoard {
  text-decoration: none;
  color: #0077cc;
}

a-bottomBorad:hover {
  text-decoration: underline;
}
</style>