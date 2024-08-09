<template>
  <div class="glossar-result__list">
    <div v-for="(item, index) in resultItems" :key="`item-${index}`">
      <GlossarResultTitle :title="item.filter.toUpperCase()" />
      <GlossarResultListItemAccordion :item="item" :id="index" />
    </div>
  </div>
</template>

<script>
import GlossarResultListItem from '../components/GlossarResultListItem.vue';
import GlossarResultListItemAccordion from '../components/GlossarResultListItemAccordion.vue';
import GlossarResultTitle from '../components/GlossarResultTitle.vue';

export default {
  name: 'GlossarResultList',
  components: {
    GlossarResultListItem,
    GlossarResultTitle,
    GlossarResultListItemAccordion,
  },
  props: {
    resultItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
