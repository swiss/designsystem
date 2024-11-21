<template>
  <div class="glossar-result__list">
    <div v-for="(item, index) in resultItems" :key="`item-${index}`">
      <GlossarResultTitle :title="item.filter.toUpperCase()" />
      <GlossarResultListItemAccordion
        :id="String(index)"
        :item="item"
        :searchTerm="searchTerm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GlossaryResult } from '../../../types'
import GlossarResultListItemAccordion from '../components/GlossarResultListItemAccordion.vue'
import GlossarResultTitle from '../components/GlossarResultTitle.vue'

defineProps({
  resultItems: {
    type: Array<GlossaryResult>,
    default: () => [],
  },
  searchTerm: {
    type: String,
    required: false,
    default: () => undefined,
  },
})
</script>
