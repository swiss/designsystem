<template>
  <div :class="classes">
    <component :is="tag" class="info-block__title">
      {{ title }}
    </component>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: () => undefined,
  },
  borderTop: {
    type: Boolean,
    default: () => true,
  },
  borderBottom: {
    type: Boolean,
    default: () => false,
  },
  headingLevel: {
    type: String,
    default: () => 'h3',
    validator: (prop) =>
      ['h2', 'h3', 'h4', 'h5', 'div'].includes(prop as string),
  },
})

const tag = computed(() => {
  return props.headingLevel
})

const classes = computed(() => {
  let base = 'info-block '
  if (props.borderTop) base += `border-t `
  if (props.borderBottom) base += `border-b `
  return base
})
</script>
