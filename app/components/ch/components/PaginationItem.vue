<template>
  <button
    type="button"
    :class="computedClasses"
    :aria-label="label"
    :disabled="disabled"
  >
    <SvgIcon v-if="icon" :icon="icon" class="btn__icon" />
    <span v-if="label" class="btn__text">
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: () => '',
    validator: (prop) =>
      ['outline', 'outline-negative'].includes(prop as string),
  },
  icon: {
    type: String,
    default: () => '',
  },
  label: {
    type: String,
    default: () => '',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
})

const computedClasses = computed(() => {
  let base = 'btn '
  if (props.type) base += `btn--${props.type} `
  if (props.icon) base += `btn--icon-only `
  return base
})
</script>
