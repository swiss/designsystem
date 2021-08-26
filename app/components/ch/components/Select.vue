<template>
  <div class="form__group__select">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <div :class="selectWrapperClasses">
      <select
        :class="selectClasses"
        :id="id"
        :name="name"
      >
        <slot></slot>
      </select>
      <div class="select__icon">
        <svg
          role="presentation"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
          />
        </svg>
      </div>
    </div>
    <div v-if="message" class="badge badge--sm" :class="`badge--${messageType}`">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline'
    },
    bare: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    label: {
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
      default: 'error'
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
      return base
    },
  },
}
</script>
