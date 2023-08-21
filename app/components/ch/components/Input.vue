<template>
  <div class="form__group__input">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses"
    >
      {{ label }}<span v-if="required" class="form__group__required" />
      {{ message }}
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
      :readonly=readonly
      :required="required"
    />
    <div v-if="message" class="badge badge--sm" :class="`badge--${messageType}`">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      validator: (prop) => ['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week', 'submit'].includes(prop),
      default: 'text'
    },
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline'
    },
    message: {
      type: String,
    },
    messageType: {
      type: String,
      validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
      default: 'error'
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
  },

  computed: {
    classes() {
      let base = ''
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.message) base += `input--${this.messageType} `
      if (this.type === 'submit') base += 'input--submit'
      return base
    },
    labelClasses() {
      let base = ''
      if (this.variant === 'negative') base += `text--negative `
      if (this.size) base += `text--${this.size} `
      if (this.hideLabel) base += `sr-only `
      if (this.required) base += `text--asterisk `
      return base
    },
  },
}
</script>
