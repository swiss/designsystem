<template>
  <div class="storybook-icon">
    <SvgIcon :icon="id" size="3xl" />
    <div class="storybook-icon__text">
      {{ id }}
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
