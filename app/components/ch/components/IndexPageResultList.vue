<template>
  <div class="index-page-result__list">
    <div v-for="(item, index) in resultItems" :key="`item-${index}`">
      <IndexPageResultTitle :title="item.filter.toUpperCase()" />
      <IndexPageResultListItemList
        :id="String(index)"
        :item="item"
        :searchTerm="searchTerm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import IndexPageResultListItemList from '../components/IndexPageResultListItemList.vue'
import IndexPageResultTitle from '../components/IndexPageResultTitle.vue'
import type { GlossaryResult } from '../../../types'

defineProps({
  resultItems: {
    type: Array as PropType<GlossaryResult[]>,
    default: () => [],
  },
  searchTerm: {
    type: String,
    default: () => undefined,
  },
})
</script>
