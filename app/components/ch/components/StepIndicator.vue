<template>
  <div class="step__indicator">
    <div class="step__indicator-step" :class="colorClasses">
      <span v-if="isConfirmed">
        <SvgIcon icon="CheckmarkBold" size="lg" />
      </span>
      <span v-else>{{ step }}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'StepIndicator',
  components: {
    SvgIcon,
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClasses() {
      let base = 'step__indicator-step--'
      if (this.isConfirmed) {
        base += 'confirmed'
      } else if (this.isActive) {
        base += 'active'
      }
      return base
    },
  },
}
</script>
