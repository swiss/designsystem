<template>
  <button type="button" :class="computedClasses" :aria-label="label" :disabled="disabled">
    <SvgIcon
      v-if="this.icon"
      :icon="this.icon"
      class="btn__icon"
    />
    <span
      v-if="this.label"
      class="btn__text"
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
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      let base = 'btn '
      if (this.type) base += `btn--${this.type} `
      if (this.icon) base += `btn--icon-only `
      return base
    }
  }
}
</script>
