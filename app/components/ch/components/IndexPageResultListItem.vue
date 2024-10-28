<template>
  <div
    class="index-page__card"
    :class="footerAction ? 'index-page__card-clickable' : ''"
  >
    <div v-if="image" class="index-page__card-image">
      <img :src="image" />
    </div>
    <div class="index-page__card-details-continer">
      <div v-if="metaInfos.length > 0" class="index-page__header">
        <Metainfo :metainfos="metaInfos" />
      </div>
      <h3 class="index-page__card-title" v-html="markedTitle" />
      <div v-if="description" class="index-page__description">
        <p v-html="markedDescription" />
      </div>
      <div v-if="footerInfos.length > 0" class="index-page__footer">
        <Metainfo :metainfos="footerInfos" />
      </div>
      <div v-if="footerAction" class="index-page__card-footer__action">
        <Btn
          :to="footerAction"
          variant="outline"
          icon-pos="only"
          icon="ArrowRight"
          label="Weiterlesen"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from './Btn.vue'
import Metainfo from './MetaInfo.vue'
import { computed, type PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: () => undefined,
  },
  searchTerm: {
    type: String,
    default: () => undefined,
  },
  metaInfos: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  footerInfos: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  image: {
    type: String,
    default: () => undefined,
  },
  footerAction: {
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

const highlightTextNodes = function (node: HTMLElement, searchterm: string) {
  if (node.nodeType === Node.TEXT_NODE) {
    const regex = new RegExp(searchterm, 'gi')
    const span = document.createElement('span')
    span.innerHTML =
      node.textContent?.replace(
        regex,
        (match) => `<span class='highlight-blue'>${match}</span>`,
      ) || ''
    node.replaceWith(...span.childNodes)
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach((elm) =>
      highlightTextNodes(elm as HTMLElement, searchterm),
    )
  }
}

const marker = function (text?: string, searchterm?: string) {
  if (!searchterm) return text
  const parser = new DOMParser()
  const doc = parser.parseFromString(text || '', 'text/html')

  doc.body.childNodes.forEach((elm) =>
    highlightTextNodes(elm as HTMLElement, searchterm),
  )
  return doc.body.innerHTML
}
</script>
