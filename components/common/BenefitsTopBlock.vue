<template>
  <div class="__content">
    <h3 class="title">
      Преимущества акриловых покрытий Mapei
    </h3>
    <div class="subtitle">
      Покрытие "хард" является наиболее популярным покрытием
      в мире и имеет несколько модификаций с разным отскоком мяча.
      На акриловых "хардах" проводятся чемпионаты Australian Open и US Open,
      турниры WTA и ATP, также это основное покрытие для тренировок.
      Это наиболее универсальное, надежное и неприхотливое в эксплуатации среди профессиональных теннисных покрытий.
    </div>
    <div class="decoration">
      <hr>
      <div class="arrow-wrap">
        <ArrowBottom class="arrow" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowBottom from 'images/arrow-bottom.svg'
export default defineComponent({
  components: { ArrowBottom },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.__content {
  position: relative;
  background-image: url('@/assets/images/bg-ball-cut.png');
  background-size: 100% auto;
  padding-block: 85px 100px;
  padding-inline: var(--side-offset-main);
  color: white;
  .title {
    position: relative;
    left: -2px;
    @include RussoOne;
    font-size: 45px;
    line-height: 54px;
    font-weight: 400;
    margin-bottom: 32px;
  }
  .subtitle {
    @include Roboto;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-inline: var(--side-offset-secondary);
  }
}
.decoration {
  position: absolute;
  inset: 0;
  --svg-color: white;
  pointer-events: none;
  .arrow-wrap {
    width: 15px;
    position: absolute;
    right: var(--side-offset-main);
    top: 0;
    display: flex;
    justify-content: center;
  }
  hr {
    position: absolute;
    margin: 0;
    width: 1px;
    height: 212px;
    border: none;
    background: white;
    left: var(--side-offset-main);
    bottom: 0;
  }
}
</style>
