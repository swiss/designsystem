<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
  >
    <span class="tag-item__inner">
      <span class="tag-item__text">
        {{ label }}
      </span>
      <SvgIcon v-if="icon" :icon="icon" class="tag-item__icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: false,
    default: () => undefined,
  },
  variant: {
    type: String,
    validator: (prop) =>
      ['default', 'primary', 'active'].includes(prop as string),
    default: () => undefined,
  },
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: () => 'base',
    validator: (prop) => ['base', 'sm'].includes(prop as string),
  },
  icon: {
    type: String,
    default: () => undefined,
  },
})

const tag = computed(() => {
  return props.to ? 'a' : 'button'
})

const type = computed(() => {
  return props.to ? false : 'button'
})

const link = computed(() => {
  return props.to ? props.to : false
})

const aria = computed(() => {
  return type.value === 'button' ? props.label : false
})

const classes = computed(() => {
  let base = 'tag-item '
  if (props.variant) base += `tag-item--${props.variant} `
  if (props.size) base += `tag-item--${props.size} `
  if (props.icon) base += `tag-item--icon `
  return base
})
</script>
