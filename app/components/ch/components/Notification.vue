<template>
  <div :class="classes" v-if="!isClosed">
    <SvgIcon v-if="icon" :icon="icon" class="notification__icon" />
    <div class="notification__content" v-html="text" />
    <button
      v-if="closeBtn"
      class="notification__close"
      @click="isClosed = true"
      aria-label="Close notification"
    >
      <SvgIcon icon="Cancel" />
    </button>
  </div>
</template>

<script setup>
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: () => undefined,
    validator: (prop) =>
      ['info', 'warning', 'error', 'success', 'alert', 'hint'].includes(prop),
  },
  icon: {
    type: String,
    default: () => undefined,
  },
  isClosed: {
    type: Boolean,
    default: () => false,
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
