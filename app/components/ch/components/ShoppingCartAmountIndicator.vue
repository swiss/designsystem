<template>
  <div class="shopping__cart-amount-indicator">
    {{ limittedAmount }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
})

const limittedAmount = computed(() => {
  return props.amount > 9 ? '9+' : props.amount
})
</script>
