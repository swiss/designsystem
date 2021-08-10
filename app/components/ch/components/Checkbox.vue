<template>
  <input :class="classes" type="checkbox" value="Input text" />
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    type: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
  },

  computed: {
    classes() {
      let base = 'input '
      if (this.type) base += `input--${this.type} `
      if (this.size) base += `input--${this.size} `
      return base
    },
  },
}
</script>
