<template>
  <div :class="classes">
    {{ label }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  textStyle: {
    type: String,
    default: 'regular',
    validator: (prop) =>
      ['regular', 'italic', 'bold', 'bold-italic'].includes(prop),
  },
  size: {
    type: String,
    default: 'base',
    validator: (prop) =>
      ['3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'].includes(prop),
  },
})

const classes = computed(() => {
  let base = ''
  if (textStyle) base += `font--${textStyle} `
  if (size) {
    if (size.startsWith('h')) {
      base += `${size} `
    } else {
      base += `text--${size} `
    }
  }
  return base
})
</script>
