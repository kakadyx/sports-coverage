<template>
  <div>
    <TheHeader />
    <PresentationBlock />
    <CoverageBlock />
    <BenefitsBlock />
    <ReviewsBlock />
    <FormBlock />
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import BenefitsBlock from "~/components/blocks/BenefitsBlock.vue"
import PresentationBlock from "~/components/blocks/PresentationBlock.vue"
import CoverageBlock from "~/components/blocks/CoverageBlock.vue"
import ReviewsBlock from "~/components/blocks/ReviewsBlock.vue"
import FormBlock from "~/components/blocks/FormBlock.vue"
import TheFooter from "~/components/common/TheFooter.vue"
import TheHeader from "~/components/common/TheHeader.vue"
</script>
