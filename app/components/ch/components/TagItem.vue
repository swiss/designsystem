<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
  >
    <span class="tag-item__inner">
      <span
        class="tag-item__text"
      >
        {{ label }}
      </span>
    </span>
  </component>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'TagItem',
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
        'active'
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
      let base = 'tag-item '
      if (this.variant) base += `tag-item--${this.variant} `
      return base
    },
  }
}
</script>
