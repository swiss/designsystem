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

<script>
export default {
  name: 'Select',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline',
    },
    bare: {
      type: Boolean,
      default: false,
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
      validator: (prop) =>
        ['error', 'warning', 'success', 'info'].includes(prop),
    },
    required: {
      type: Boolean,
      default: false,
    },
    onSelect: {
      type: Function,
      default: () => ({}),
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('select', e.target.value)
      this.onSelect(e)
    },
  },
  computed: {
    selectWrapperClasses() {
      let base = 'select '
      if (this.bare) base += `select--bare `
      return base
    },
    selectClasses() {
      let base = ''
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.message) base += `input--${this.messageType} `
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
