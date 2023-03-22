<template>
  <div class="main">
    <TheHeader />
    <main>
      <PresentationBlock />
      <CoverageBlock />
      <BenefitsBlock />
      <ReviewsBlock />
      <FormBlock />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import BenefitsBlock from '~/components/blocks/BenefitsBlock.vue'
import PresentationBlock from '~/components/blocks/PresentationBlock.vue'
import CoverageBlock from '~/components/blocks/CoverageBlock.vue'
import ReviewsBlock from '~/components/blocks/ReviewsBlock.vue'
import FormBlock from '~/components/blocks/FormBlock.vue'
import TheFooter from '~/components/common/TheFooter.vue'
import TheHeader from '~/components/common/TheHeader.vue'
</script>

<style>
@import 'style/reset.scss';
@import 'style/variables.scss';
</style>
