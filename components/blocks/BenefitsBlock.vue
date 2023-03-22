<template>
  <article>
    <BenefitsTopBlock />
    <div class="content">
      <div class="left-part">
        <ul class="list">
          <li v-for="(item, i) in items" :key="i">
            <div class="before-li">
              <hr class="separator">
              <div class="circle" />
            </div>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="right-part">
        <div class="image-block">
          <img class="image" src="@/assets/images/court-mini.png" alt="">
        </div>
        <button class="button">
          Рассчитать стоимость
        </button>
      </div>
      <div class="decoration">
        <hr class="left-separator">
        <div class="right">
          <BlockIndicator :active-index="2" :dark="true" />
          <hr class="separator">
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BenefitsTopBlock from '~/components/common/BenefitsTopBlock.vue'
import BlockIndicator from '~/components/common/BlockIndicator.vue'

export default defineComponent({
  components: { BlockIndicator, BenefitsTopBlock },
  data () {
    return {
      items: [
        'итальянское качество',
        'уникальный дизайн',
        'сертификаты ITF',
        'более 37 цветов',
        'всесезонность',
        'безопасность',
        'высокие спортивные характеристики',
        'возможность выбора скорости корта'
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.content {
  display: flex;
  position: relative;
  padding-block: 40px 125px;
  padding-inline: var(--side-offset-main);
  ul {
    margin-top: 150px;
    @include Rubik;
    height: 461px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      display: flex;
      gap: 110px;
    }
    .before-li {
      display: flex;
      margin: 0;
      align-items: center;
      .separator {
        background: black;
        margin: 0;
        width: 66px;
        height: 1px;
        border: none;
      }
      .circle {
        background: black;
        border-radius: 50%;
        width: 5px;
        height: 5px;
      }
    }
  }

  .right-part {
    margin-left: auto;
    margin-right: var(--side-offset-secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image-block {
      margin-bottom: 40px;
      position: relative;
      .image {
        position: relative;
        top: -100px;
      }
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        bottom: 50px;
        background: red;
        background: rgba(46, 46, 46, 0.19);
        filter: blur(2px);
        transform: translate(-40px, 0px);
        display: inline-block;
      }
    }
    .button {
      background: #5d6260;
      border-radius: 39px;
      padding: 15px 70px;
      @include Roboto;
      font-size: 17px;
      line-height: 20px;
      font-weight: 400;
      color: white;
      border: none;
      cursor: pointer;
      transition: 0.3s background;
      &:hover {
        background: #383b3a;
        transition: 0.3s background;
      }
    }
  }
}
.decoration {
  pointer-events: none;
  position: absolute;
  inset: 0;
  .left-separator {
    position: absolute;
    margin: 0;
    width: 1px;
    height: 643px;
    border: none;
    background: black;
    left: var(--side-offset-main);
  }
  .right {
    position: absolute;
    right: var(--side-offset-main);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 330px;
    bottom: 0;
    top: 0;
    .separator {
      height: 151px;
      background: #5b5b5b;
      margin: 0;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
