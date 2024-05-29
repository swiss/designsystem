<template>
  <div class="shopping__cart-amount-indicator">
    {{ limittedAmount }}
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartAmountIndicator',
  props: {
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    limittedAmount() {
      return this.amount > 9 ? '9+' : this.amount
    },
  },
}
</script>
