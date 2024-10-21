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

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: () => false,
  },
  isActive: {
    type: Boolean,
    default: () => false,
  },
})

const colorClasses = computed(() => {
  let base = 'step__indicator-step--'
  if (props.isConfirmed) {
    base += 'confirmed'
  } else if (props.isActive) {
    base += 'active'
  }
  return base
})
</script>
