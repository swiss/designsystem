<template>
  <div>
    <div class="shopping__cart-total-container">
      <h4>{{ title }}</h4>
      <p class="shopping__cart-total">{{ total }}</p>
    </div>
    <p class="shopping__cart-total-description">
      {{ description }}
    </p>
    <div class="shopping__cart__action-container">
      <btn
        class="shopping__cart-temporary-button"
        variant="outline-negative"
        size="base"
        :label="nextStepLabel"
        :ariaLabel="nextStepAriaLabel"
        @emitClick="nextStep"
      />
    </div>
  </div>
</template>
<script>
import btn from './Btn.vue'
export default {
  name: 'ShoppingCartTotal',
  components: {
    btn,
  },
  props: {
    title: {
      type: String,
      default: 'Total:',
    },
    total: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    nextStepLabel: {
      type: String,
      default: 'Next step',
    },
    nextStepAriaLabel: {
      type: String,
      default: 'Go to next step',
    },
  },
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
  },
}
</script>
