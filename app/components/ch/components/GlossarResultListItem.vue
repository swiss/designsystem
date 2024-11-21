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
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

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

const highlightTextNodes = function (node: HTMLElement, term?: string) {
  /* TODO: This doesn't work if link in text is the same as word before */
  if (!term) return
  if (node.nodeType === Node.TEXT_NODE) {
    const regex = new RegExp(term, 'gi')
    const span = document.createElement('span')
    span.innerHTML =
      node.textContent?.replace(
        regex,
        (match) => `<span class='highlight-blue'>${match}</span>`,
      ) || ''
    node.replaceWith(...span.childNodes)
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach((elm) =>
      highlightTextNodes(elm as HTMLElement, term),
    )
  }
}

const marker = function (text: string, term?: string) {
  if (!term) return text
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, 'text/html')

  doc.body.childNodes.forEach((elm) =>
    highlightTextNodes(elm as HTMLElement, term),
  )
  return doc.body.innerHTML
}
</script>
