<template>
  <div
    class="index-page__card"
    :class="footerAction ? 'index-page__card-clickable' : ''"
  >
    <div class="index-page__card-image" v-if="image">
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
      <div class="index-page__footer" v-if="footerInfos.length > 0">
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

<script>
import Btn from './Btn.vue';
import Metainfo from './MetaInfo.vue';

export default {
  name: 'IndexPageResultListItem',
  components: { Metainfo, Btn },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    searchTerm: {
      type: String,
      required: false,
    },
    metaInfos: {
      type: Array,
      required: false,
      default: () => [],
    },
    footerInfos: {
      type: Array,
      required: false,
      default: () => [],
    },
    image: {
      type: String,
      required: false,
    },
    footerAction: {
      type: String,
      required: false,
    },
  },
  methods: {
    /* TODO: This doesn't work if link in text is the same as word before */
    highlightTextNodes(node, searchterm) {
      if (node.nodeType === Node.TEXT_NODE) {
        const regex = new RegExp(searchterm, 'gi')
        const span = document.createElement('span')
        span.innerHTML = node.textContent.replace(
          regex,
          (match) => `<span class='highlight-blue'>${match}</span>`
        )
        node.replaceWith(...span.childNodes)
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach((elm) =>
          this.highlightTextNodes(elm, searchterm)
        )
      }
    },
    marker(text, searchterm) {
      if (!searchterm) return text
      const parser = new DOMParser()
      const doc = parser.parseFromString(text, 'text/html')

      doc.body.childNodes.forEach((elm) =>
        this.highlightTextNodes(elm, searchterm)
      )
      return doc.body.innerHTML
    },
  },
  computed: {
    markedTitle() {
      return this.marker(this.title, this.searchTerm)
    },
    markedDescription() {
      return this.marker(this.description, this.searchTerm)
    },
  },
}
</script>
