<template>
  <ul
    :id="`accordion-${id}`"
    class="accordion"
    :class="spaced ? 'accordion--spaced' : ''"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import Accordion from '../../../scripts/Accordion.js'
import { onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  spaced: {
    type: Boolean,
    default: () => false,
  },
})

onMounted(() => {
  Accordion.init(`#accordion-${props.id} button`)
})
</script>
