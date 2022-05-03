<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
  >
    <!-- TODO: IF REMOVABLE
      <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
      class="btn__icon"
    /> -->
    <span
      class="tag__text"
    >
      {{ label }}
    </span>
  </component>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'Tag',
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
        'default',
        'removable'
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
        'sm',
        'base',
        'lg',
        'xl'
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
      return this.type === 'button' ? this.label : false
    },

    classes () {
      let base = 'tag '
      if (this.variant) base += `tag--${this.variant} `
      if (this.size) base += `tag--${this.size} `
      return base
    },
  }
}
</script>
