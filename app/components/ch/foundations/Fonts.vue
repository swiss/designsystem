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
  },
  computed: {
    classes () {
      let base = 'text'
      if (this.textStyle) base += `--${this.textStyle} `
      return base
    }
  }
};
</script>
