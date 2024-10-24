<template>
  <p class="meta-info">
    <span
      v-for="(info, i) in metainfos"
      :key="info + i"
      class="meta-info__item"
    >
      {{ info }}
    </span>
  </p>
</template>

<script setup lang="ts">
defineProps({
  metainfos: {
    type: Array<string>,
    required: true,
  },
})
</script>
