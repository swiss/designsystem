<template>
<div :class="classes">
  {{ label }}
</div>
</template>

<script>

export default {
  name: 'fonts',
  props: {
    label: {
      type: String,
      required: true,
    },
    textStyle: {
      type: String,
      validator: (prop) => [
        'regular',
        'italic',
        'bold',
        'bold-italic',
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ].includes(prop)
    },
  },
  computed: {
    classes () {
      let base = ''
      if (this.textStyle) base += `text--${this.textStyle} `
      if (this.size) base += `text--${this.size} `
      return base
    }
  }
};
</script>
