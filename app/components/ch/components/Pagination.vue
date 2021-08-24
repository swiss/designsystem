<template>
  <button type="button" :class="classes" :aria-label="ariaLabel">
    <SvgIcon
      v-if="this.icon !== 'none'"
      :icon="this.icon"
      class="pagination__icon"
    />
    <span
      v-if="this.label"
      class="pagination__text"
    >
      {{ label }}
    </span>
  </button>
</template>

<script>

import SvgIcon from "~/components/ch/components/SvgIcon";

export default {
  name: 'pagination',
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'outline',
        'outline-negative',
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
      default: 'none'
    },
    label: {
      type: String,
      required: true,
    }
  },

  computed: {
    classes () {
      let base = 'pagination '
      if (this.type) base += `pagination--${this.type} `
      if (this.size) base += `pagination--${this.size} `
      if (this.icon !== 'none') base += `pagination--icon-only `
      return base
    },
    ariaLabel () {
      let ariaLabel = ''
      if (this.icon === 'ChevronLineLeft') ariaLabel = 'First page'
      if (this.icon === 'ChevronLeft') ariaLabel = 'Previous page'
      if (this.icon === 'ChevronLineRight') ariaLabel = 'Last page'
      if (this.icon === 'ChevronRight') ariaLabel = 'Next page'
      if (this.icon === 'none') ariaLabel = `Page ${this.label}`
      return ariaLabel
    }
  }
}
</script>
