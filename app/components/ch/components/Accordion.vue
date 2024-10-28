<template>
  <ul
    :id="`accordion-${id}`"
    class="accordion "
    :class="spaced ? 'accordion--spaced' : ''"
  >
    <slot />
</ul>
</template>

<script>
import Accordion from '../../../scripts/Accordion.js'

export default {
  name: 'Accordion',
  components: {
    Accordion
  },
  props: {
    id: {
      type: String,
      required: true
    },
    spaced: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    Accordion.init (
      `#accordion-${this.id} button`
    )
  }
}
</script>

