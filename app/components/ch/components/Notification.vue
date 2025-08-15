<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div v-if="!isClosed" :class="classes">
    <SvgIcon v-if="icon && !title" :icon="icon" class="notification__icon" />
    <div v-if="title" class="notification__header">
      <SvgIcon v-if="icon" :icon="icon" class="notification__icon" />
      <component
        :is="heading"
        v-if="title"
        :class="heading"
        class="notification__title"
        v-html="title"
      />
    </div>
    <div
      class="notification__content"
      :class="{ 'notification__content-offset': icon }"
      v-html="text"
    />
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
import { computed } from 'vue'
import SvgIcon from '../components/SvgIcon.vue'

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
  heading: {
    type: String,
    default: 'h2',
    validator: (prop) => ['h2', 'h3', 'h4', 'h5'].includes(prop as string),
  },
  title: {
    type: String,
    default: undefined,
  },
})

const classes = computed(() => {
  let base = 'notification '
  if (props.type) base += `notification--${props.type} `
  if (props.title) base += 'notification--with-title '
  return base
})
</script>
