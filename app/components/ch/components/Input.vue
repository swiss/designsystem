<template>
  <div class="form__group">
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
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
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      validator: (prop) => ['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'].includes(prop),
      default: 'text'
    },
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline'
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    label: {
      type: String,
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
