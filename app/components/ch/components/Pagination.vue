<template>
  <button type="button" :class="classes">
    <span
      v-if="this.label"
      class="btn__text"
    >
      {{ label }}
    </span>
  </button>
</template>

<script>

export default {
  name: 'pagination',
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'outline',
        'outline-negative',
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
        'sm',
        'base',
        'lg'
      ].includes(prop)
    },
    label: {
      type: String,
      required: true,
    }
  },

  computed: {
    classes () {
      let base = 'pagination '
      if (this.type) base += `pagination--${this.type} `
      if (this.size) base += `pagination--${this.size} `
      return base
    },
  }
}
</script>
