<template>
  <p class="meta-info">
    <span v-for="(info, i) in metaInfos" :key="info+i" class="meta-info__item">
      {{ info }}
    </span>
  </p>
</template>

<script setup>

const props = defineProps({
    metaInfos: {
      type: Array,
      required: true,
    },
  });
</script>
