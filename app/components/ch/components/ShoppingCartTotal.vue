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
        class="shopping__cart-button"
        variant="outline-negative"
        size="base"
        :label="nextStepLabel"
        :ariaLabel="nextStepAriaLabel"
        @emitClick="nextStep"
        :fullWidth="screenSize < 1024"
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
  data() {
    return {
      screenSize: 0,
    }
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
  },
}
</script>
