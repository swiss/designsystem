<template>
  <div class="form__group__checkbox">
    <input
      type="checkbox"
      :class="classes"
      :id="id"
      :name="name"
      :value="value"
      :required="required"
      @change="onChange($event)"
      :checked="checked"
    />
    <label v-if="label" :for="id" :class="labelClasses">
      <span v-html="label"></span
      ><span v-if="required" class="sr-only">required</span>
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

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop),
    default: 'outline',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
  },
  label: {
    type: String,
  },
  value: {
    type: String,
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
    default: false,
  },
  onChange: {
    type: Function,
    default: () => ({}),
  },
  checked: {
    type: Boolean,
    default: false,
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
