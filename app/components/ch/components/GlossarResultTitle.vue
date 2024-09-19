<template>
  <h2 class="glossar-result__title">{{ title }}</h2>
</template>
<script setup>

const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>
