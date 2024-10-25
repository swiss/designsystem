<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
    :disabled="disabled || undefined"
    @click="eventHandler"
  >
    <SvgIcon v-if="icon" :icon="icon" class="btn__icon" />
    <span :class="buttonClasses">
      {{ label }}
    </span>
  </component>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
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
      [
        'outline',
        'bare',
        'filled',
        'outline-negative',
        'bare-negative',
        'link',
        'link-negative',
      ].includes(prop as string),
    default: () => undefined,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop as string),
    default: () => undefined,
  },
  icon: {
    type: String,
    default: () => '',
  },
  iconPos: {
    type: String,
    validator: (prop) =>
      ['none', 'only', 'left', 'right'].includes(prop as string),
    default: () => undefined,
  },
  label: {
    type: String,
    required: true,
  },
  ariaLabel: {
    type: String,
    required: false,
    default: () => undefined,
  },
  fullWidth: {
    type: Boolean,
    default: () => false,
  },
  isSubmit: {
    type: Boolean,
    default: () => false,
  },
})
const emit = defineEmits(['emitClick'])

const tag = computed(() => {
  if (props.isSubmit) return 'submit'

  return props.to ? 'a' : 'button'
})

const type = computed(() => {
  return props.to ? false : 'button'
})

const link = computed(() => {
  return props.to ? props.to : false
})

const aria = computed(() => {
  let base
  if (props.ariaLabel) {
    base = props.ariaLabel
  } else {
    base =
      props.iconPos === 'only' && type.value === 'button' ? props.label : false
  }
  return base
})

const buttonClasses = computed(() => {
  let base = 'btn__text'
  if (props.fullWidth) base += '-centered'
  return base
})

const classes = computed(() => {
  let base = 'btn '
  if (props.variant) base += `btn--${props.variant} `
  if (props.size) base += `btn--${props.size} `
  if (props.iconPos) base += `btn--icon-${props.iconPos} `
  if (props.fullWidth) base += 'btn--full-width '
  return base
})

const eventHandler = function () {
  if (!props.to && !props.disabled) {
    emit('emitClick')
  }
}
</script>
