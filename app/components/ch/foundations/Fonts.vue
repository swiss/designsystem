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
      default: 'regular',
      validator: (prop) => [
        'regular',
        'italic',
        'bold',
        'bold-italic',
      ].includes(prop)
    },
    size: {
      type: String,
      default: 'base',
      validator: (prop) => [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'lg',
        'base',
        'sm',
        'xs'
      ].includes(prop)
    },
  },
  computed: {
    classes () {
      let base = ''
      if (this.textStyle) base += `font--${this.textStyle} `
      if (this.size) {
        if(this.size.startsWith('h')) {
          base += `${this.size} `
        } else {
          base += `text--${this.size} `
        }
      }
      return base
    }
  }
};
</script>
