<template>
  <button class="burger" title="Toggle mobile menu">
    <span class="burger__icon" :class="isOpen ? 'burger--is-open' : ''">
      <span class="burger__bar" />
      <span class="burger__bar" />
      <span class="burger__bar" />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>
