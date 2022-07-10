<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
    :title="label"
  >
    <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
      class="btn__icon"
    />
    <span
      class="btn__text"
    >
      {{ label }}
    </span>
  </component>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'btn',
  components: {
    SvgIcon
  },
  props: {
    to: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      validator: (prop) => [
        'outline',
        'bare',
        'filled',
        'outline-negative',
        'bare-negative',
        'link',
        'link-negative'
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
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
        'none',
        'only',
        'left',
        'right',
      ].includes(prop)
    },
    label: {
      type: String,
      required: true,
    }
  },

  computed: {
    tag () {
      return this.to ? 'a' : 'button'
    },

    type () {
      return this.to ? false : 'button'
    },

    link () {
      return this.to ? this.to : false
    },

    aria () {
      return this.iconPos === 'only' && this.type === 'button' ? this.label : false
    },

    classes () {
      let base = 'btn '
      if (this.variant) base += `btn--${this.variant} `
      if (this.size) base += `btn--${this.size} `
      if (this.iconPos) base += `btn--icon-${this.iconPos} `
      return base
    },
  }
}
</script>
