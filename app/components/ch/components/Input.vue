<template>
  <div class="form__group__input">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}<span v-if="required" class="form__group__required" />
    </label>
    <input
      :id="id"
      :type="type"
      :class="classes"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      :pattern="pattern"
      :autocomplete="autocomplete"
      :readonly="readonly"
      :required="required"
      @input.stop="onInput"
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
import { computed, type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (prop) =>
      [
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'month',
        'number',
        'password',
        'range',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
        'submit',
      ].includes(prop as string),
    default: () => 'text',
  },
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop as string),
    default: () => 'outline',
  },
  message: {
    type: String,
    default: () => undefined,
  },
  onInput: {
    type: Function as PropType<(event: Event) => void>,
    default: () => ({}),
  },
  messageType: {
    type: String,
    validator: (prop) =>
      ['error', 'warning', 'success', 'info'].includes(prop as string),
    default: () => 'error',
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
  hideLabel: {
    type: Boolean,
    default: () => false,
  },
  placeholder: {
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
  min: {
    type: Number,
    default: () => undefined,
  },
  max: {
    type: Number,
    default: () => undefined,
  },
  step: {
    type: Number,
    default: () => undefined,
  },
  pattern: {
    type: String,
    default: () => undefined,
  },
  autocomplete: {
    type: String,
    default: () => undefined,
  },
  readonly: {
    type: Boolean,
    default: () => false,
  },
  required: {
    type: Boolean,
    default: () => false,
  },
})

const classes = computed(() => {
  let base = ''
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.message) base += `input--${props.messageType} `
  if (props.type === 'submit') base += 'input--submit'
  return base
})

const labelClasses = computed(() => {
  let base = ''
  if (props.variant === 'negative') base += `text--negative `
  if (props.size) base += `text--${props.size} `
  if (props.hideLabel) base += `sr-only `
  if (props.required) base += `text--asterisk `
  return base
})
</script>
