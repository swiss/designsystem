<template>
  <ul
    :id="`accordion-${id}`"
    class="accordion "
    :class="spaced ? 'accordion--spaced' : ''"
  >
  <li
    v-for="(item, key) in content"
    :key="`${key}`"
    class="accordion__item"
  >
    <button
      class="accordion__button"
      aria-expanded="false"
      :aria-controls="`content-${id}-${key}`"
      :id="`accordion-control-${id}-${key}`"
    >
      <h3 class="accordion__title">
        {{ item.title }}
      </h3>
      <SvgIcon
        icon="ChevronDown"
        size="xl"
        class="accordion__arrow"
      />
    </button>
    <div
      class="accordion__drawer"
      aria-hidden="true"
      :id="`content-${id}-${key}`"
    >
      <div
        class="accordion__content"
        v-html="item.content"
      />
    </div>
  </li>
</ul>
</template>

<script>
import Accordion from '../../../scripts/Accordion.js'
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'Accordion',
  components: {
    Accordion,
    SvgIcon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    spaced: {
      type: Boolean,
      default: false
    },
    content: {
      type: Array,
      required: true
    }
  },
  
  mounted () {
    Accordion.init (
      `#accordion-${this.id} button`
    )
  }
}
</script>

