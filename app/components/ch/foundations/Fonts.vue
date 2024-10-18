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
    default: () => 'regular',
    validator: (prop) =>
      ['regular', 'italic', 'bold', 'bold-italic'].includes(prop),
  },
  size: {
    type: String,
    default: () => 'base',
    validator: (prop) =>
      ['3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'].includes(prop),
  },
})

const classes = computed(() => {
  let base = ''
  if (props.textStyle) base += `font--${props.textStyle} `
  if (props.size) {
    if (props.size.startsWith('h')) {
      base += `${props.size} `
    } else {
      base += `text--${props.size} `
    }
  }
  return base
})
</script>
