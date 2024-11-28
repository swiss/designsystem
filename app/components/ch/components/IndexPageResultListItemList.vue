<template>
  <ul :id="`index-page-item-list-${id}`" class="index-page-list">
    <IndexPageResultListItem
      v-for="(listItem, itemIndex) in item.results"
      :key="`listItem-${itemIndex}`"
      v-bind="listItem"
      :searchTerm="searchTerm"
    />
  </ul>
</template>

<script setup lang="ts">
import type { GlossaryResult } from '../../../types'
import IndexPageResultListItem from '../components/IndexPageResultListItem.vue'
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<GlossaryResult>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  searchTerm: {
    type: String,
    default: () => undefined,
  },
})
</script>
