<template>
  <p class="meta-info">
    <span v-for="(info, i) in metainfos" :key="info+i" class="meta-info__item">
      {{ info }}
    </span>
  </p>
</template>

<script setup>

const props = defineProps({
    metainfos: {
      type: Array,
      required: true,
    },
  });
</script>
