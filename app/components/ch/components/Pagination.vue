<template>
  <button type="button" :class="classes" aria-label="pagination">
    {{ label }}
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
