<template>
  <div class="form__group__radio">
    <input
      :id="id"
      type="radio"
      :class="classes"
      :name="name"
      :value="value"
      :checked="checked"
      :required="required"
      @change="onChange"
    />
    <label v-if="label" :for="id" :class="labelClasses">
      <span v-html="label" />
      <span v-if="required" class="sr-only">required</span>
    </label>
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
import { computed, type PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop as string),
    default: () => 'outline',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop as string),
    default: () => undefined,
  },
  label: {
    type: String,
    default: () => undefined,
  },
  value: {
    type: String,
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
  message: {
    type: String,
    default: () => undefined,
  },
  checked: {
    type: Boolean,
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
  onChange: {
    type: Function as PropType<(e: Event) => void>,
    default: () => ({}),
  },
})

const classes = computed(() => {
  let base = 'input '
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.messageType) base += `input--${props.messageType} `
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
