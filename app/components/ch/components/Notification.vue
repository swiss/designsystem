<template>
  <div v-if="!isClosed" :class="classes">
    <SvgIcon v-if="icon" :icon="icon" class="notification__icon" />
    <div class="notification__content" v-html="text" />
    <button
      v-if="closeBtn"
      class="notification__close"
      aria-label="Close notification"
      @click="isClosed = true"
    >
      <SvgIcon icon="Cancel" />
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const isClosed = defineModel('isClosed', {
  type: Boolean,
  default: () => false,
})
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: () => undefined,
    validator: (prop) =>
      ['info', 'warning', 'error', 'success', 'alert', 'hint'].includes(
        prop as string,
      ),
  },
  icon: {
    type: String,
    default: () => undefined,
  },
  closeBtn: {
    type: Boolean,
    default: () => true,
  },
})

const classes = computed(() => {
  let base = 'notification '
  if (props.type) base += `notification--${props.type} `
  return base
})
</script>
