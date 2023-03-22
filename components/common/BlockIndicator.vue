<template>
  <div class="indicators" :class="{ dark }">
    <div v-for="i in items" :key="i" class="circle" :class="{ active: +activeIndex === i }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    activeIndex: {
      default: 0
    },
    dark: {
      default: false
    }
  },
  data () {
    return {
      items: [0, 1, 2, 3, 4]
    }
  }
})
</script>

<style lang="scss" scoped>
.indicators {
  display: flex;
  flex-direction: column;
  gap: 7px;
  --color: white;
  .circle {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: 1px solid var(--color);
  }

  .active {
    background: var(--color);
  }
  &.dark {
    --color: #484848;
  }
}
</style>
