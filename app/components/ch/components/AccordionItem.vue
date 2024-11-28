<template>
  <li class="accordion__item">
    <button
      :id="`accordion-control-${id}`"
      class="accordion__button"
      aria-expanded="false"
      :aria-controls="`content-${id}`"
    >
      <component :is="tag" class="accordion__title">
        {{ title }}
      </component>
      <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
    </button>
    <div :id="`content-${id}`" class="accordion__drawer" aria-hidden="true">
      <div class="accordion__content vertical-spacing">
        <slot />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  headingLevel: {
    type: String,
    default: () => 'h3',
    validator: (prop) =>
      ['h2', 'h3', 'h4', 'h5', 'div'].includes(prop as string),
  },
})

const tag = computed(() => {
  return props.headingLevel
})
</script>
