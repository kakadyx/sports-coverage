<template>
  <header class="header">
    <img src="@/assets/images/logo.png" alt="logo" />
    <nav class="nav-links">
      <a href="#reviews">Отзывы</a>
      <a href="#contacts">Контакты</a>
      <a href="#about">О нас</a>
      <div class="menu-btn">
        <hr />
        <hr />
        <hr />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.header {
  padding-top: 50px;
  padding-inline: var(--side-offset-main);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
}

.nav-links {
  display: flex;
  gap: 62px;
  @include Roboto;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    padding: 4px;
  }
}

.menu-btn {
  display: flex;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
  padding: 5px;
  hr {
    width: 20px;
    margin: 0;
  }
}
</style>
