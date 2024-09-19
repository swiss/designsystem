<template>
  <div :class="classes">
    <component :is="tag" class="info-block__title" v-html="title" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  borderTop: {
    type: Boolean,
    default: true,
  },
  borderBottom: {
    type: Boolean,
    default: false,
  },
  headingLevel: {
    type: String,
    default: 'h3',
    validator: (prop) => ['h2', 'h3', 'h4', 'h5', 'div'].includes(prop),
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
