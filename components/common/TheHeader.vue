<template>
  <header class="header">HEADER</header>
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
@import 'mixins/fonts.scss';
.header {
  @include RussoOne;
}
</style>
