<template>
  <button type="button" :class="classes" aria-label="back-to-top-btn">
    <SvgIcon
      icon="ChevronUp"
      class="back-to-top-btn__icon"
    />
  </button>
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
  },

  computed: {
    classes () {
      let base = 'back-to-top-btn '
      if (this.type) base += `back-to-top-btn--${this.type} `
      return base
    },
  }
}
</script>
