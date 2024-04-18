<template>
  <li class="accordion__item">
    <button
      class="accordion__button"
      aria-expanded="false"
      :aria-controls="`content-${id}`"
      :id="`accordion-control-${id}`"
    >
      <component :is="tag" class="accordion__title">
        {{ title }}
      </component>
      <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
    </button>
    <div class="accordion__drawer" aria-hidden="true" :id="`content-${id}`">
      <div class="accordion__content vertical-spacing">
        <slot />
      </div>
    </div>
  </li>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
export default {
  name: 'AccordionItem',
  components: {
    SvgIcon,
  },
  props: {
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
      default: 'h3',
      validator: (prop) => ['h2', 'h3', 'h4', 'h5', 'div'].includes(prop),
    },
  },
  computed: {
    tag() {
      return this.headingLevel
    },
  },
}
</script>
