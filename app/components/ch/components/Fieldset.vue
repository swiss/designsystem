<template>
  <fieldset class="form__group">
    <legend v-if="legend" class="form__group__legend" :class="legendClasses">
      {{ legend }} <span v-if="required" class="sr-only">required</span>
    </legend>
    <slot />
    <div
      v-if="message"
      class="badge badge--sm"
      :class="`badge--${messageType}`"
    >
      {{ message }}
    </div>
  </fieldset>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop),
    default: () => 'outline',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
  },
  legend: {
    type: String,
  },
  message: {
    type: String,
  },
  messageType: {
    type: String,
    validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
    default: () => 'error',
  },
  required: {
    type: Boolean,
    default: () => false,
  },
})

const classes = computed(() => {
  let base = 'input '
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.message) base += `input--${props.messageType} `
  return base
})

const legendClasses = computed(() => {
  let base = ''
  if (props.variant === 'negative') base += `text--negative `
  if (props.size) base += `text--${props.size} `
  if (props.required) base += `text--asterisk `
  return base
})
</script>
