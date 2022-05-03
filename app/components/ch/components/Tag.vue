<template>
  <component
    :is="tag"
    :href="link"
    :type="type"
    :class="classes"
    :aria-label="aria"
  >
    <span class="tag__inner">
      <span
        class="tag__text"
      >
        {{ label }}
      </span>
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
      return base
    },
  }
}
</script>
