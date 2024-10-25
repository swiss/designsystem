<template>
  <div class="pagination" :class="!field ? 'pagination--extended' : ''">
    <input
      v-if="field"
      v-model="currentPage"
      class="pagination__input"
      :class="computedClasses"
      aria-label="pagination input"
    />
    <div v-if="field" class="pagination__text">
      {{ totalPages }}
    </div>
    <ul class="pagination_items">
      <li v-for="(item, index) in paginationItems" :key="`item-${index}`">
        <PaginationItem
          :icon="item.icon"
          :label="item.label"
          :link="item.link"
          :type="type"
          :disabled="index === 0 && currentPage === '1'"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import PaginationItem from './PaginationItem.vue'
import { computed } from 'vue'

const currentPage = defineModel('currentPage', {
  type: String,
  required: true,
})

const props = defineProps({
  type: {
    type: String,
    default: () => 'outline',
    validator: (prop) =>
      ['outline', 'outline-negative'].includes(prop as string),
  },
  field: {
    type: Boolean,
    default: () => true,
  },
  totalPages: {
    type: String,
    default: () => '',
  },
  paginationItems: {
    type: Array<{ icon?: string; label?: string; link?: any }>,
    default: () => [],
  },
})

const computedClasses = computed(() => {
  let base = 'input input--base '
  if (props.type) base += `input--${props.type} `
  return base
})
</script>
