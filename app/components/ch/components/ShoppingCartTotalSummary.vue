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
    <div class="total__summary-agb">
      <Checkbox
        :required="true"
        size="base"
        type="outline"
        name="radio-delivery-address"
        value="agb accepted"
        :label="agreementText"
        :onChange="
          (e) => {
            agbAccepted = e.target.checked
          }
        "
      />
    </div>
    <btn
      class="shopping__cart-button"
      variant="outline-negative"
      size="base"
      :label="orderButtonText"
      :ariaLabel="orderButtonAriaLabel"
      :fullWidth="true"
      @emitClick="orderClicked"
      :disabled="!agbAccepted"
    />
  </div>
</template>
<script>
import Btn from './Btn.vue'
import Checkbox from './Checkbox.vue'

export default {
  name: 'ShoppingCartTotalSummary',
  components: {
    Btn,
    Checkbox,
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
  data() {
    return {
      agbAccepted: false,
    }
  },
  methods: {
    orderClicked() {
      if (!this.agbAccepted) return
      this.$emit('nextStep')
    },
  },
}
</script>
