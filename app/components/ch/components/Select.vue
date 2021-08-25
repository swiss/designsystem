<template>
  <div class="form__group__select">
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="select">
      <select
        :class="classes"
        :id="id"
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
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
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
  },

  computed: {
    classes() {
      let base = ''
      if (this.type) base += `input--${this.type} `
      if (this.size) base += `input--${this.size} `
      return base
    },
  },
}
</script>
