<template>
  <div :class="wrapper ? 'back-to-top-wrapper' : ''">
    <a
      :href="`#${target}`"
      type="button"
      :class="classes"
      aria-label="Scroll to top"
    >
      <SvgIcon icon="ChevronUp" class="back-to-top-btn__icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (prop) =>
      ['default', 'negative', 'outline'].includes(prop as string),
    default: () => undefined,
  },
  target: {
    type: String,
    default: () => '#',
  },
  fixed: {
    type: Boolean,
    default: () => false,
  },
  wrapper: {
    type: Boolean,
    default: () => true,
  },
})

const classes = computed(() => {
  let base = 'back-to-top-btn '
  if (props.type) base += `back-to-top-btn--${props.type} `
  if (props.fixed) base += `back-to-top-btn--fixed `
  return base
})
</script>
