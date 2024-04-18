<template>
  <div class="step-indicator">
    <div
      class="step-indicator__step"
      :class="{ 'step-indicator__step--confirmed': isConfirmed }"
    >
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
  },
}
</script>
