<template>
  <article class="content">
    <h3 class="title">
      Виды покрытий
    </h3>
    <div class="cards">
      <div v-for="item in items" :key="item.itf" class="card">
        <img class="image" :src="item.img" alt="coverage">
        <div class="text-wrap">
          <p class="card-title">
            {{ item.title }}
          </p>
          <p class="subtitle">
            {{ item.subtitle }}
          </p>
          <p class="itf">
            {{ item.itf }}
          </p>
        </div>
      </div>
    </div>
    <div class="indication">
      <ArrowBottom class="arrow" />
      <BlockIndicator :dark="true" :active-index="1" />
      <hr>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlockIndicator from '~/components/common/BlockIndicator.vue'
import coverage1 from '@/assets/images/coverage-1.png'
import coverage2 from '@/assets/images/coverage-2.png'
import coverage3 from '@/assets/images/coverage-3.png'
import ArrowBottom from '@/assets/images/arrow-bottom.svg'
export default defineComponent({
  components: { BlockIndicator, ArrowBottom },
  data () {
    return {
      items: [
        {
          img: coverage1,
          title: 'Mapecoat TNS\n Professional  – ',
          subtitle: `профессиональное теннисное
           покрытие на акриловой белой базе, с медленным, средним или средне-быстрым отскоком мяча.`,
          itf: 'ITF: 1 Slow'
        },
        {
          img: coverage2,
          title: 'Mapecoat TNS\n Cushion  –',
          subtitle: 'профессиональное теннисное покрытие на' +
              ' акриловой амортизирующей серой базе, со средним отскоком мяча.',
          itf: 'ITF: 3 Medium'
        },
        {
          img: coverage3,
          title: 'Mapecoat TNS\n Comfort  –',
          subtitle: 'комфортное и травмобезопасное теннисное ' +
              'покрытие со средне-медленным отскоком мяча на рулонной резиновой подложке.',
          itf: 'ITF: 2 Medium-Slow'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.content {
  padding-block: 75px;
  padding-inline: var(--side-offset-main);
  .title {
    @include RussoOne;
    font-size: 45px;
    line-height: 54px;
    text-align: center;
    margin-bottom: 40px;
  }
  position: relative;
}

.cards {
  display: flex;
  justify-content: space-between;
  padding-inline: var(--side-offset-secondary);
}

.card {
  border-radius: 23px;
  border: 1px solid #000000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  .text-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 24px 22px 46px;
    text-align: center;
  }
  .image {
    height: 190px;
  }
  .card-title {
    @include Rubik;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .subtitle {
    @include Rubik;
    font-size: 18px;
    line-height: 23px;
    font-weight: 300;
    margin-bottom: 21px;
  }
  .itf {
    margin-top: auto;
    @include Rubik;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }
}

.indication {
  top: 0;
  position: absolute;
  right: var(--side-offset-main);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  hr {
    margin: 0;
    width: 1px;
    height: 212px;
    border: none;
    background: #505050;
  }
  .arrow {
    position: relative;
  }
}
</style>
