<template>
  <div :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  nItems: {
    type: Number,
    validator: (prop) => {
      if (typeof prop !== 'number') return false
      return prop > 0 && prop < 6
    },
    default: () => undefined,
  },
})

const computedClasses = computed(() => {
  let base = 'grid gap--responsive '
  if (props.nItems === 1) base += `grid--items-1 `
  else if (props.nItems === 2) base += `grid--items-2 `
  else if (props.nItems === 3) base += `grid--items-3 `
  else if (props.nItems === 4) base += `grid--items-4 `
  else if (props.nItems === 5) base += `grid--items-5 `
  return base
})
</script>
