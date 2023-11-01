<template>
  <div class="host-class">
    <div class="bottom-board">
      <div class="bottom-board__title">
        <h1 class="header-bottom-board"> © SuperStore</h1>
        <p class="bottom-board-text">Все права защищены.</p>
      </div>


      <div class="bottom-board__info-ul-block">
        <h2 class="header-bottom-board">Услуги:</h2>
        <ul class="bottom-board__info-ul-block__services">
          <p class="bottom-board-text">Доставка</p>
          <p class="bottom-board-text">Самовывоз</p>
          <p class="bottom-board-text">Сервис-центр</p>
        </ul>
      </div>
      <div class="bottom-board__support">
        <h2 class="header-bottom-board">Помощь и поддержка:</h2>
        <ul class="bottom-board__support__support-links">
          <router-link class="router-link"
              :to="{name:'koefPolitic'}">
            <li><a class="link-bottom-board">Политика конфиденциальности</a></li>
          </router-link>
          <li><a class="link-bottom-board" href="#">Мобильная версия</a></li>
        </ul>
      </div>
      <div class="bottom-board__age">
        <span class="bottom-board__age__circle">16+</span>
        <p class="bottom-board-text">Минимальный возраст для доступа.</p>
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
<style lang="scss" scoped>
.bottom-board {
  color:white;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  background: #2c3e50;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 210px;
  width: 100%;

  &__title {

  }

  &__age {
    display: flex;
    align-items: flex-start;
    padding: 24px 0 0 0;

    &__circle {
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

  }

  &__support {
    &li::before {
      content: "\279E"; /* Символ стрелки */
      color: #333;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      margin-right: 5px;
    }

  }

  &__info-ul-block {
    &__services {
      & li::before {
        content: "\2022"; /* Значок маркера */
        color: #333;
        display: inline-block;
        width: 1em;
        margin-left: -1em
      }
    }

  }
}

//.support-info {
//  top: -15px;
//}

//.support-and-age {
//  right: 10px;
//  position: absolute;
//  display: flex;
//  flex-direction: column;
//}

//.info-ul-block {
//  position: absolute;
//  left: 30vw;
//}

//.company {
//  /*border-radius: 10px;*/
//  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
//}

.header-bottom-board {
  color: #333;

}

.bottom-board-text {
  color: #666;

}

.link-bottom-board {
  text-decoration: none;
  color: #0077cc;
}

.age-limit {


}

.circle-bottomBoard {

}

//.services, .support {
//  list-style: none;
//  padding: 0;
//}

//.services li, .support li {
//  margin: 10px 0;
//}

.services li::before {;
}

.support li::before {

}


a-bottomBorad:hover {
  text-decoration: underline;
}
</style>