<template>
  <h2 class="index-page-result__title">{{ title }}</h2>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
