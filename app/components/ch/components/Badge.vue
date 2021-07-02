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
      default: 'base',
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
      validator: (prop) => [
        'xs',
        'sm',
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
      return base
    },
  }
};
</script>