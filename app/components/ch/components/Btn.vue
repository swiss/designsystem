<template>
  <button type="button" :class="classes">
    <SvgIcon v-if="isIconLeftVisible" icon="ArrowLeft" />
    <div v-if="isLabelVisible">{{ label }}</div>
    <SvgIcon v-if="isIconRightVisible" icon="ArrowRight" />
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
      return base
    },
    isIconRightVisible () {
      if (this.icon === 'right' || this.icon === 'only') return true
      return false
    },
    isIconLeftVisible () {
      if (this.icon === 'left') return true
      return false
    },
    isLabelVisible () {
      if (this.icon === 'only') return false
      return true
    }
  }
}
</script>
