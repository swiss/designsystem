<template>
  <div class="form__group__select">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}<span v-if="required" class="form__group__required" />
    </label>
    <div :class="selectWrapperClasses">
      <select
        :class="selectClasses"
        :id="id"
        :name="name"
        :required="required"
        @change="handleChange($event)"
      >
        <slot></slot>
      </select>
      <div class="select__icon">
        <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
          />
        </svg>
      </div>
    </div>
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
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop),
    default: () => 'outline',
  },
  bare: {
    type: Boolean,
    default: () => false,
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
    default: () => false,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  messageType: {
    type: String,
    validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  onSelect: {
    type: Function,
    default: () => ({}),
  },
})

const selectWrapperClasses = computed(() => {
  let base = 'select '
  if (props.bare) base += `select--bare `
  return base
})

const selectClasses = computed(() => {
  let base = ''
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.message) base += `input--${props.messageType} `
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

const handleChange = function (e) {
  props.onSelect(e)
}
</script>
