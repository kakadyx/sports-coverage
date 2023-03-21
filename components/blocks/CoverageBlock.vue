<template>
  <article class="content">
    <h3 class="title">Виды покрытий</h3>
    <div class="cards">
      <div v-for="item in items" :key="id" class="card"></div>
    </div>
    <div class="indication">
      <BlockIndicator :dark="true" :active-index="1" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlockIndicator from "~/components/common/BlockIndicator.vue"

export default defineComponent({
  components: {BlockIndicator},
  data (){
    return {
      items:   [
        {
          img: '@/assets/images/coverage-1.png',
          title: 'Mapecoat TNS Professional  –',
          subtitle: `профессиональное теннисное
           покрытие на акриловой белой базе, с медленным, средним или средне-быстрым отскоком мяча.`,
          itf: 'ITF: 1 Slow'
        },
        {
          img: '@/assets/images/coverage-2.png',
          title: 'Mapecoat TNS Cushion  –',
          subtitle: `профессиональное теннисное покрытие на акриловой амортизирующей серой базе, со средним отскоком мяча.`,
          itf: 'ITF: 3 Medium'
        },
        {
          img: '@/assets/images/coverage-3.png',
          title: 'Mapecoat TNS Comfort  -',
          subtitle: `профессиональное теннисное
           покрытие на акриловой белой базе, с медленным, средним или средне-быстрым отскоком мяча.`,
          itf: 'ITF: 2 Medium-Slow'
        },
      ]
    }
  }
})
</script>


комфортное и травмобезопасное теннисное покрытие со средне-медленным отскоком мяча на рулонной резиновой подложке.


<style lang="scss" scoped>
.content {
  padding-top: 75px;
}

.indication {
  position: absolute;
  right: var(--side-offset-main);
  height: 100%;
  hr {
    transform: translateX(-50%);
    left: 50%;
    margin: 0 auto;
    width: 1px;
    height: 400px;
  }
}
</style>

