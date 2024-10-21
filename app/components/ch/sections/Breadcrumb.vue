<template>
  <div
    v-if="!isHomePage"
    id="breadcrumb"
    class="breadcrumb container container--flex"
  >
    <BreadcrumbNavigation :isSimplePage="isSimplePage" />
    <div id="breadcrumb__drawer" class="breadcrumb__drawer hidden" />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbNavigation from '../navigations/BreadcrumbNavigation.vue'
import BreadcrumbNav from '../../../scripts/BreadcrumbNav.js'
import { onMounted } from 'vue'

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: () => false,
  },
  isSimplePage: {
    type: Boolean,
    default: () => false,
  },
})

onMounted(async () => {
  if (props.isHomePage) return
  BreadcrumbNav.init('#breadcrumb > nav')
})
</script>
