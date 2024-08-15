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
<script>
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'GlossarResultListItem',
  components: { SvgIcon },
  props: {
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
          (match) => `<span class='highlight'>${match}</span>`
        )
        node.replaceWith(...span.childNodes)
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(elm => this.highlightTextNodes(elm, searchterm))
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
