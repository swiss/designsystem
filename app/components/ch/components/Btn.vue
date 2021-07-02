<template>
  <button type="button" :class="classes">
    <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
      class="🇨🇭-btn__icon" />
    <span
      v-if="this.label"
      class="🇨🇭-btn__text"
    >
      {{ label }}
    </span>
  </button>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'btn',
  components: {
    SvgIcon
  },
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
        'default',
        'sm',
        'base',
        'lg'
      ].includes(prop)
    },
    icon: {
      type: String,
      default: ''
    },
    iconPos: {
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
      if (this.iconPos) base += `🇨🇭-btn--icon-${this.iconPos} `
      return base
    },
  }
}
</script>
