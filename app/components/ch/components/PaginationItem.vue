<template>
  <button
    type="button"
    :class="computedClasses"
    :aria-label="label"
    :disabled="disabled"
    :data-default-theme="props.theme"
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
  theme: {
    type: String,
    validator: (prop) => ['light', 'dark'].includes(prop as string),
    default: () => null,
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
  let base = 'btn btn--outline '
  if (props.icon) base += `btn--icon-only `
  return base
})
</script>
