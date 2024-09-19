<template>
  <div class="form__group__input">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}<span v-if="required" class="form__group__required" />
    </label>
    <input
      :type="type"
      :class="classes"
      :id="id"
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
      @change.stop="onInput"
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

<script setup>
import { computed } from 'vue'

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
      ].includes(prop),
    default: 'text',
  },
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop),
    default: 'outline',
  },
  message: {
    type: String,
  },
  onInput: {
    type: Function,
    default: () => ({}),
  },
  messageType: {
    type: String,
    validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
    default: 'error',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
  },
  label: {
    type: String,
  },
  hideLabel: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
  },
  id: {
    type: String,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
  },
  pattern: {
    type: String,
  },
  autocomplete: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
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
