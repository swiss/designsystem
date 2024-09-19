<template>
  <div :class="computedClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  nItems: {
    type: Number,
    validator: (prop) => {
      return prop > 0 && prop < 6
    },
  },
})

const computedClasses = computed(() => {
  let base = 'grid gap--responsive '
  if (nItems === 1) base += `grid--items-1 `
  else if (nItems === 2) base += `grid--items-2 `
  else if (nItems === 3) base += `grid--items-3 `
  else if (nItems === 4) base += `grid--items-4 `
  else if (nItems === 5) base += `grid--items-5 `
  return base
})
</script>
