<template>
  <div class="back-to-top-wrapper">
    <a :href="`#${target}`" type="button" :class="classes" aria-label="Scroll to top">
      <SvgIcon
        icon="ChevronUp"
        class="back-to-top-btn__icon"
      />
    </a>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'BackToTopBtn',
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'default',
        'negative',
        'outline'
      ].includes(prop)
    },
    target: {
      type: String,
      default: '#'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      let base = 'back-to-top-btn '
      if (this.type) base += `back-to-top-btn--${this.type} `
      if (this.fixed) base += `back-to-top-btn--fixed `
      return base
    },
  }
}
</script>
