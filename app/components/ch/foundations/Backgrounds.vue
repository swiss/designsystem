<template>
<div>
  <div class="bg--secondary-900">
    bg--secondary-900
  </div>
  <div class="bg--secondary-800">
    bg--secondary-800
  </div>
  <div class="bg--secondary-700">
    bg--secondary-700
  </div>
  <div class="bg--secondary-600">
    bg--secondary-600
  </div>
  <div class="bg--secondary-500">
    bg--secondary-500
  </div>
  <div class="bg--secondary-400">
    bg--secondary-400
  </div>
  <div class="bg--secondary-300">
    bg--secondary-300
  </div>
  <div class="bg--secondary-200">
    bg--secondary-200
  </div>
  <div class="bg--secondary-100">
    bg--secondary-100
  </div>
  <div class="bg--secondary-50">
    bg--secondary-50
  </div>
</div>
</template>

<script>

export default {
  name: 'backgrounds',
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
