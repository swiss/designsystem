<template>
  <button type="button" :class="computedClasses" :aria-label="icon ? label : ''">
    <SvgIcon
      v-if="this.icon !== 'none'"
      :icon="this.icon"
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
    computedClasses () {
      let base = 'btn '
      if (this.type) base += `btn--${this.type} `
      if (this.size) base += `btn--${this.size} `
      if (this.icon !== 'none') base += `btn--icon-only `
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
