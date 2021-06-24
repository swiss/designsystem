<template>
  <button
    type="button"
    :class="classes"
  >
    {{ label }}
  </button>
</template>

<script>

export default {
  name: 'Btn',

  props: {
    type: {
      type: String,
      validator: (prop) => [
        'outline',
        'bare',
        'filled',
        'outline-negative',
        'bare-negative'
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
        'sm',
        'md',
        'lg'
      ].includes(prop)
    },
    icon: {
      type: String,
      validator: (prop) => [
        'left',
        'right',
        'none',
        'only',
      ].includes(prop)
    },
    label: {
      type: String,
      required: true,
    }
  },

  computed: {
    classes () {
      let base = '🇨🇭-btn '
      if (this.type) base += `🇨🇭-btn--${this.type} `
      if (this.size) base += `🇨🇭-btn--${this.size} `
      return base
    }
  }
}
</script>
