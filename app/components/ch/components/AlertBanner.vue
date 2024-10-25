<template>
  <div v-if="!isClosed" :class="classes">
    <div class="alert-banner__wrapper">
      <SvgIcon v-if="icon" :icon="icon" class="notification__icon" />
      <div class="alert-banner__grid">
        <div class="alert-banner__header">
          <h4 class="font--bold">
            {{ title }}
          </h4>
          <p>{{ topic }}</p>
          <p>{{ lastUpdated }}</p>
        </div>
        <div class="alert-banner__content">
          <p>{{ text }}</p>
        </div>
        <ul v-if="link" class="alert-banner__list">
          <li class="alert-banner__list-item">
            <p>{{ introLink }}</p>
            <div class="alert-banner__link">
              <Btn
                :href="link.href"
                :label="link.label"
                :icon="link.icon ? link.icon : 'ArrowRight'"
                icon-pos="right"
                size="sm"
                variant="link-negative"
              />
            </div>
          </li>
        </ul>
      </div>
      <button
        v-if="closeBtn"
        class="alert-banner__close"
        aria-label="Close alert banner"
        @click="isClosed = true"
      >
        <SvgIcon icon="Cancel" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import Btn from '../components/Btn.vue'
import { computed } from 'vue'

const isClosed = defineModel('isClosed', {
  type: Boolean,
  default: () => false,
})
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: () => undefined,
    validator: (prop) =>
      ['info', 'alert', 'warning', 'error', 'success'].includes(prop as string),
  },
  lastUpdated: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  introLink: {
    type: String,
    required: false,
    default: () => undefined,
  },
  link: {
    type: Object,
    required: false,
    default: () => undefined,
  },
  icon: {
    type: String,
    default: () => 'WarningCircle',
  },
  closeBtn: {
    type: Boolean,
    default: () => true,
  },
})

const classes = computed(() => {
  let base = 'alert-banner '
  if (props.type) base += `alert-banner--${props.type} `
  return base
})
</script>
