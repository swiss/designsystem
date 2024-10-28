<template>
  <ul :id="`accordion-${id}`" class="accordion">
    <GlossarResultListItem
      v-for="(listItem, itemIndex) in item.results"
      :key="`listItem-${itemIndex}`"
      :title="listItem.title"
      :description="listItem.description"
      :searchTerm="searchTerm"
    />
  </ul>
</template>

<script setup lang="ts">
import Accordion from '../../../scripts/Accordion.js'
import GlossarResultListItem from '../components/GlossarResultListItem.vue'
import { onMounted } from 'vue'

const props = defineProps({
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
    default: () => undefined,
  },
})

onMounted(() => {
  Accordion.init(`#accordion-${props.id} button`)
})
</script>
