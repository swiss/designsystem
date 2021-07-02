<template>
<div :class="classes">
  {{ label }}
</div>
</template>

<script>

export default {
  name: 'badge',
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: (prop) => [
        'gray',
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink'
      ].includes(prop)
    },
    size: {
      type: String,
      default: 'sm',
      validator: (prop) => [
        'sm',
        'xs',
      ].includes(prop)
    },
    remove: {
      type: Boolean,
      default: false,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

    computed: {
    classes () {
      let base = '🇨🇭-badge '
      if (this.color) base += `🇨🇭-badge--${this.color} `
      if (this.size) base += `🇨🇭-badge--${this.size} `
      return base
    },
  }
};
</script>