<template>
  <div
    :id="`popover-wrapper-${id}`"
    class="popover-wrapper"
  >
    <button
      :id="`popover-button-${id}`"
      class="popover-button"
      :aria-controls="`popover-${id}`"
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      <span
        v-if="label"
        class="popover-button__label"
      >
        {{ label }}
      </span>
      <SvgIcon v-if="icon"
        icon="HelpCircle"
        size="lg"
        class="popover-button__icon"
      />
    </button>
    <div
      :id="`popover-${id}`"
      :class="computedClasses"
      aria-hidden="true"
      role="tooltip"
    >
      <div class="popover__arrow" v-if="arrow"></div>
      <div class="popover__close" v-if="closeBtn" aria-hidden="true">
        <SvgIcon
          icon="Cancel"
          size="lg"
        />
      </div>
      <div>Popover content</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import Popover from '../../../scripts/Popover.js'

export default {
  name: 'popover',
  components: {
    SvgIcon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: 'blue',
      validator: (prop) => [
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
        'white',
      ].includes(prop)
    },
    position: {
      type: String,
      default: 'top',
      validator: (prop) => [
        'top',
        'bottom',
        'left',
        'right',
      ].includes(prop)
    },
    icon: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    },
    closeBtn: {
      type: Boolean,
      default: true
    },
  },

  computed: {
    computedClasses () {
      let base = 'popover '
      if (this.color) base += `popover--${this.color} `
      if (this.position) base += `popover--${this.position} `
      if (this.active) base += `popover--${this.active} `
      return base
    },
  },

  mounted () {
    Popover.init (
      `#popover-wrapper-${this.id}`
    )
  }
};
</script>
