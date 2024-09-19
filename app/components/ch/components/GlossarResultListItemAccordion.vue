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

<script setup>
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
  },
})

onMounted(() => {
  Accordion.init(`#accordion-${props.id} button`)
})
</script>
