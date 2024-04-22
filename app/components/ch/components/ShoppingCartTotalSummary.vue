<template>
  <div class="box total__summary-container">
    <h3 class="h3 total__sumary-title">{{ title }}</h3>
    <div>
      <div class="container--flex">
        <p class="total__summary-total-title">{{ subTotalTitle }}</p>
        <p class="font--bold total__summary-inline-text">{{ subTotal }}</p>
      </div>
      <hr class="separator separator--md" />
      <div class="container--flex">
        <p class="total__summary-total-title">{{ totalTitle }}</p>
        <p class="font--bold total__summary-inline-text">{{ total }}</p>
      </div>
    </div>
    <btn
      class="shopping__cart-temporary-button"
      variant="outline-negative"
      size="base"
      :label="orderButtonText"
      :ariaLabel="orderButtonAriaLabel"
      :fullWidth="true"
      @emitClick="orderClicked"

    />
    <div class="text--xs shopping__cart-order-agreement">
      <p v-html="agreementText" />
    </div>
  </div>
</template>
<script>
import Btn from './Btn.vue';
export default {
  name: 'ShoppingCartTotalSummary',
  components: {
    Btn,
  },
  props: {
    title: {
      type: String,
      default: 'Total',
    },
    subTotalTitle: {
      type: String,
      default: 'Subtotal',
    },
    subTotal: {
      type: String,
      required: true,
    },
    totalTitle: {
      type: String,
      default: 'Total',
    },
    total: {
      type: String,
      required: true,
    },
    orderButtonText: {
      type: String,
      default: 'Order',
    },
    orderButtonAriaLabel: {
      type: String,
      default: 'Order',
    },
    agreementText: {
      type: String,
      required: true,
    },
  },
  methods: {
    orderClicked() {
      this.$emit('nextStep')
    },
  },
}
</script>
