<template>
  <div class="pagination" :class="!field ? 'pagination--extended' : ''" :data-default-theme="props.theme">
    <input
      v-if="field"
      v-model="currentPage"
      class="pagination__input input input--base"
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
          :theme="theme"
          :disabled="index === 0 && currentPage === '1'"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import PaginationItem from './PaginationItem.vue'

const currentPage = defineModel('currentPage', {
  type: String,
  required: true,
})

const props = defineProps({
  theme: {
    type: String,
    validator: (prop) => ['light', 'dark'].includes(prop as string),
    default: () => 'light',
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
</script>
