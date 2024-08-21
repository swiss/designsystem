<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="classes"
    @click="
      () => {
        if (clickable && !disabled) badgeClicked()
      }
    "
  >
    <SvgIcon
      v-if="this.iconLeft"
      :icon="this.iconLeft"
      class="badge__icon-left"
    />
    <span class="badge__text">{{ label }}</span>
    <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
      :class="`icon--${this.icon}`"
      class="badge__icon"
    />
  </component>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'badge',
  components: {
    SvgIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'gray',
      validator: (prop) =>
        [
          'info',
          'error',
          'warning',
          'success',
          'gray',
          'red',
          'yellow',
          'orange',
          'green',
          'blue',
          'indigo',
          'purple',
          'pink',
          'indigo',
          'negative',
        ].includes(prop),
    },
    size: {
      type: String,
      default: 'base',
      validator: (prop) => ['base', 'sm'].includes(prop),
    },
    icon: {
      type: String,
      default: undefined,
    },
    highlighCancel: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: String,
      default: undefined,
    },
    badgeClicked: {
      type: Function,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      let base = 'badge '
      if (this.color) base += `badge--${this.color} `
      if (this.size) base += `badge--${this.size} `
      if (this.icon) base += `badge--icon `
      if (this.clickable && !this.disabled) base += `badge--clickable`
      if (this.disabled) base += ` badge--disabled`
      return base
    },
  },
}
</script>
