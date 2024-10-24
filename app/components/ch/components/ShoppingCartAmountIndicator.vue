<template>
  <div class="shopping__cart-amount-indicator">
    {{ limitedAmount }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
})

const limitedAmount = computed(() => {
  return props.amount > 9 ? '9+' : props.amount
})
</script>
