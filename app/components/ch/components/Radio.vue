<template>
  <div class="form__group__radio">
    <input
      type="radio"
      :class="classes"
      :id="id"
      :name="name"
      :value="value"
    />
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
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
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },

  computed: {
    classes() {
      let base = 'input '
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      return base
    },
  },
}
</script>
