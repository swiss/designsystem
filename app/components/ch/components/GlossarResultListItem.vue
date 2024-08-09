<template>
  <li class="accordion__item">
    <button class="accordion__button">
      <h3 class="accordion__title">{{ title }}</h3>
      <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
    </button>
    <div class="accordion__drawer" aria-hidden="true">
      <div class="accordion__content vertical-spacing">
        <p>{{ description }}</p>
      </div>
    </div>
  </li>
</template>
<script>
import SvgIcon from '../components/SvgIcon.vue';

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
  },
}
</script>
