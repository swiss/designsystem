<template>
  <li class="accordion__item">
    <button class="accordion__button">
      <h3 class="accordion__title" v-html="markedTitle" />
      <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
    </button>
    <div class="accordion__drawer" aria-hidden="true">
      <div class="accordion__content vertical-spacing">
        <p v-html="markedDescription" />
      </div>
    </div>
  </li>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  searchTerm: {
    type: String,
    default: () => undefined,
  },
})

const markedTitle = computed(() => {
  return marker(props.title, props.searchTerm)
})

const markedDescription = computed(() => {
  return marker(props.description, props.searchTerm)
})

const marker = function (text?: string, searchterm?: string) {
  if (!searchterm || !text) return text
  const escapedTerm = searchterm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const parts = text.split(/(<[^>]*>)/g)

  return parts
    .map((part) => {
      if (part.startsWith('<') && part.endsWith('>')) {
        return part
      }

      const regex = new RegExp(escapedTerm, 'gi')
      return part.replace(
        regex,
        (match) => `<span class="highlight-blue">${match}</span>`,
      )
    })
    .join('')
}
</script>
