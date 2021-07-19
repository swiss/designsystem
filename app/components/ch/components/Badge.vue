<template>
<div :class="classes">
  <span class="badge__text">{{ label }}</span>
  <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
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
      default: 'gray',
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
      default: 'base',
      validator: (prop) => [
        'base',
        'sm'
      ].includes(prop)
    },
    icon: {
      type: String,
      default: undefined
    },
  },

    computed: {
    classes () {
      let base = 'badge '
      if (this.color) base += `badge--${this.color} `
      if (this.size) base += `badge--${this.size} `
      if (this.icon) base += `badge--icon `
      return base
    },
  }
};
</script>
