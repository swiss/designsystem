<template>
  <span :id="`popover-wrapper-${id}`" class="popover-wrapper">
    <button
      :id="`popover-button-${id}`"
      class="popover-button"
      :aria-controls="`popover-${id}`"
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      <span v-if="label" class="popover-button__label">
        {{ label }}
      </span>
      <SvgIcon
        v-if="icon"
        icon="HelpCircle"
        size="lg"
        class="popover-button__icon"
      />
    </button>
    <span class="popover-backdrop" aria-hidden="true" />
    <span
      :id="`popover-${id}`"
      :class="computedClasses"
      aria-hidden="true"
      role="tooltip"
    >
      <span class="popover__close" aria-hidden="true">
        <SvgIcon icon="Cancel" size="lg" />
      </span>
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import Popover from '../../../scripts/Popover.js'
import { computed, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: () => undefined,
  },
  color: {
    type: String,
    default: () => 'white',
    validator: (prop) =>
      [
        'info',
        'error',
        'warning',
        'success',
        'gray',
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
        'white',
      ].includes(prop as string),
  },
  icon: {
    type: Boolean,
    default: () => true,
  },
})

const computedClasses = computed(() => {
  let base = 'popover '
  if (props.color) base += `popover--${props.color} `
  return base
})

onMounted(() => {
  Popover.init(`#popover-wrapper-${props.id}`)
})
</script>
