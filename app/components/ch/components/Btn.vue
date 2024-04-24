<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
    @click="eventHandler"
  >
    <SvgIcon v-if="this.icon" :icon="this.icon" class="btn__icon" />
    <span :class="buttonClasses">
      {{ label }}
    </span>
  </component>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'btn',
  components: {
    SvgIcon,
  },
  props: {
    to: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      validator: (prop) =>
        [
          'outline',
          'bare',
          'filled',
          'outline-negative',
          'bare-negative',
          'link',
          'link-negative',
        ].includes(prop),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    icon: {
      type: String,
      default: '',
    },
    iconPos: {
      type: String,
      validator: (prop) => ['none', 'only', 'left', 'right'].includes(prop),
    },
    label: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    isSubmit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    eventHandler: function () {
      if (!this.to && !this.disabled) {
        this.$emit('emitClick')
      }
    },
  },
  computed: {
    tag() {
      if (this.isSubmit) return 'submit'

      return this.to ? 'a' : 'button'
    },

    type() {
      return this.to ? false : 'button'
    },

    link() {
      return this.to ? this.to : false
    },

    aria() {
      let base
      if (this.ariaLabel) {
        base = this.ariaLabel
      } else {
        base =
          (this.iconPos === 'only' && this.type === 'button') || 'a'
            ? this.label
            : false
      }
      return base
    },

    buttonClasses() {
      let base = 'btn__text'
      if (this.fullWidth) base += '-centered'
      return base
    },

    classes() {
      let base = 'btn '
      if (this.variant) base += `btn--${this.variant} `
      if (this.size) base += `btn--${this.size} `
      if (this.iconPos) base += `btn--icon-${this.iconPos} `
      if (this.fullWidth) base += 'btn--full-width '
      return base
    },
  },
}
</script>
