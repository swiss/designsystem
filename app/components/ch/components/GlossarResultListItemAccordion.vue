<template>
  <ul class="accordion" :id="`accordion-${id}`">
    <GlossarResultListItem
      v-for="(listItem, itemIndex) in item.results"
      :key="`listItem-${itemIndex}`"
      :title="listItem.title"
      :description="listItem.description"
      :searchTerm="searchTerm"
    />
  </ul>
</template>

<script>
import Accordion from '../../../scripts/Accordion.js';
import GlossarResultListItem from '../components/GlossarResultListItem.vue';

export default {
  name: 'GlossarResultListItemAccordion',
  components: { GlossarResultListItem },
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    searchTerm: {
      type: String,
      required: false,
    },
  },
  mounted() {
    Accordion.init(`#accordion-${this.id} button`)
  },
}
</script>
