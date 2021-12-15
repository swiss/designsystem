<template>
  <ul
    id="accordion"
    class="accordion "
    :class="spaced ? 'accordion--spaced' : ''"
  >
  <li
    v-for="(item, key) in demoData"
    :key="`${key}`"
    class="accordion__item"
  >
    <button
      class="accordion__button"
      aria-expanded="false"
      :aria-controls="`content-${key}`"
      :id="`accordion-control-${key}`"
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
      :id="`content-${key}`"
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
    spaced: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      demoData: [
        {
          title: 'Accordion item one',
          content: 'Content here <br>second line'
        },
        {
          title: 'Accordion item two',
          content: 'Content here <br>second line<br>third line'
        },
        {
          title: 'Accordion item three',
          content: '<h4 class="h3">Demo list</h4><ul class="list list--bullet"><li>list item</li><li>list item</li></ul>'
        }
      ]
    }
  },
  mounted () {
    Accordion.init (
      '#accordion button'
    )
  }
}
</script>

