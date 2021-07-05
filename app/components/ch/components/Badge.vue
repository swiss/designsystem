<template>
<div :class="classes">
  <span class="badge__text">{{ label }}</span>
  <SvgIcon
    icon="Cancel"
    class="badge__icon"
  />
</div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'badge',
  components: {
    SvgIcon
  },
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
      if (this.remove) base += `badge--icon `
      return base
    },
  }
};
</script>
