<template>
  <div class="glossar-result__list">
    <div v-for="(item, index) in resultItems" :key="`item-${index}`">
      <GlossarResultTitle :title="item.filter.toUpperCase()" />
      <GlossarResultListItemAccordion
        :item="item"
        :id="String(index)"
        :searchTerm="searchTerm"
      />
    </div>
  </div>
</template>

<script setup>
import GlossarResultListItemAccordion from '../components/GlossarResultListItemAccordion.vue'
import GlossarResultTitle from '../components/GlossarResultTitle.vue'

const props = defineProps({
  resultItems: {
    type: Array,
    default: () => [],
  },
  searchTerm: {
    type: String,
    required: false,
  },
})
</script>
