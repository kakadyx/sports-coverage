<template>
  <article class="content">
    <h1 class="title">
      Покрытие <br>
      теннисного корта
    </h1>
    <p class="subtitle">
      Акриловые покрытия всё чаще встречаются на универсальных спортивных площадках. Мы используем в работе продукцию Mapei,
      благодаря чему наши покрытия наиболее надежные и неприхотливые в эксплуатации.
    </p>
    <button class="buy-btn">
      Рассчитать стоимость
    </button>
    <div class="indication">
      <BlockIndicator :active="0" />
      <hr>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlockIndicator from '~/components/common/BlockIndicator.vue'

export default defineComponent({
  components: { BlockIndicator },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.content {
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(36, 36, 36, 0.71), rgba(36, 36, 36, 0.71)), url('@/assets/images/bg-ball.jpg');
  background-size: 100%;

  width: 100%;
  color: white;

  padding-block: 190px;
  padding-inline: var(--side-offset-main);

  text-align: center;
  .title {
    @include RussoOne;
    font-size: 84px;
    line-height: 1;
  }
  .subtitle {
    margin-top: 40px;
    margin-inline: auto;

    @include Roboto;
    font-size: 18px;
    line-height: 24px;

    width: 740px;
  }
  .buy-btn {
    margin-top: 40px;

    @include Roboto;
    font-size: 17px;
    line-height: 20px;

    cursor: pointer;

    border: 1px solid white;
    color: white;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(1px);
    border-radius: 40px;
    padding: 16px 60px;
    transition: 0.3s background, 0.3s color;
    &:hover {
      transition: 0.3s background, 0.3s color;
      background: rgba(255, 255, 255, 1);
      color: black;
    }
  }
}
.indication {
  position: absolute;
  right: var(--side-offset-main);
  top: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    margin: 0;
    width: 1px;
    height: 400px;
    border: none;
    background: white;
  }
}
</style>
