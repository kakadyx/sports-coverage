<template>
  <footer id="contacts" class="footer">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="info">
      <p class="info-text">
        Спортивное строительство, производство продукции и услуг для всех видов спорта:
        спортивные сооружения и объекты, системы спортивных покрытий,
        оборудование и инвентарь, ограждения, спортивные и детские площадки.
      </p>
      <div class="address">
        <p>
          347900, Россия, Ростовская область,
          г. Таганрог, ул. Ленина, 214 Б, офис 15
        </p>
        <p>
          пн-пт 9:00-18:00
        </p>
      </div>
      <div class="contacts">
        <a href="tel:88003330625">8 (800) 333-0-625 </a>
        <a href="https://office@sport-pl.ru">office@sport-pl.ru</a>
      </div>
      <nav>
        <a href="#main">Главная</a>
        <a href="#reviews">Отзывы</a>
        <a href="#about">О нас</a>
      </nav>
    </div>
    <div class="secondary-info">
      <a href="https://www.sport-pl.ru/" class="main-url">https://www.sport-pl.ru/</a>
      <p>Copyright © 2011-2021 ПК «Спортплощадка»</p>
      <a class="policy" href="#">Политика в отношении обработки персональных данных</a>
    </div>
    <hr class="separator">
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.footer {
  position: relative;
  background: #242424;
  padding-block: 50px;
  padding-inline: var(--side-offset-main) calc(var(--side-offset-main) + var(--side-offset-secondary));
  display: flex;
  flex-direction: column;
  color: #d3d3d3;
  gap: 25px;
  @include Roboto;
  font-size: 13px;
  line-height: 15px;
  a {
    text-decoration: none;
    color: #d3d3d3;
  }
  .info {
    display: flex;
    justify-content: space-between;
    .info-text {
      width: 169px;
      font-size: 12px;
    }
    .address {
      display: flex;
      flex-direction: column;
      width: 235px;
      gap: 30px;
    }
    .contacts {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
  }
  .secondary-info {
    display: flex;
    .main-url {
      margin-right: 220px;
    }
    .policy {
      margin-left: 150px;
    }
  }
}
.logo {
  opacity: 0.73;
}
.separator {
  top: 0;
  margin: 0 7px;
  position: absolute;
  right: var(--side-offset-main);
  height: 152px;
  width: 1px;
  background: white;
  border: none;
}
</style>
