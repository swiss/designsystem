<template>
  <div class="form__group__input">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
    </label>
    <textarea
      :id="id"
      :class="classes"
      :name="id"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :required="required"
    />
    <div
      v-if="message"
      class="badge badge--sm"
      :class="`badge--${messageType}`"
    >
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop as string),
    default: () => undefined,
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop as string),
    default: () => undefined,
  },
  id: {
    type: String,
    default: () => undefined,
  },
  name: {
    type: String,
    default: () => undefined,
  },
  label: {
    type: String,
    default: () => undefined,
  },
  placeholder: {
    type: String,
    default: () => undefined,
  },
  rows: {
    type: Number,
    default: () => 4,
  },
  cols: {
    type: Number,
    default: () => 50,
  },
  message: {
    type: String,
    default: () => undefined,
  },
  messageType: {
    type: String,
    validator: (prop) =>
      ['error', 'warning', 'success', 'info'].includes(prop as string),
    default: () => undefined,
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  resizable: {
    type: Boolean,
    default: () => true,
  },
  maxlength: {
    type: Number,
    default: () => undefined,
  },
  minlength: {
    type: Number,
    default: () => undefined,
  },
})

const classes = computed(() => {
  let base = ''
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.messageType) base += `input--${props.messageType} `
  if (!props.resizable) base += 'textarea--public'
  return base
})

const labelClasses = computed(() => {
  let base = ''
  if (props.variant === 'negative') base += `text--negative `
  if (props.size) base += `text--${props.size} `
  if (props.required) base += `text--asterisk `
  return base
})
</script>
