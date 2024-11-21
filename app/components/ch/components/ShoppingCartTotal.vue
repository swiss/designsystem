<template>
  <div>
    <div class="shopping__cart-total-container">
      <h3>{{ title }}</h3>
      <p class="shopping__cart-total">
        {{ total }}
      </p>
    </div>
    <p class="shopping__cart-total-description">
      {{ description }}
    </p>
    <div class="shopping__cart__action-container">
      <Btn
        class="shopping__cart-button"
        variant="outline-negative"
        size="base"
        :label="nextStepLabel"
        :ariaLabel="nextStepAriaLabel"
        :fullWidth="screenSize < 1024"
        @emit-click="nextStep"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Btn from './Btn.vue'
import { ref, onMounted } from 'vue'

const screenSize = ref(0)

defineProps({
  title: {
    type: String,
    default: () => 'Total:',
  },
  total: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: () => undefined,
  },
  nextStepLabel: {
    type: String,
    default: () => 'Next step',
  },
  nextStepAriaLabel: {
    type: String,
    default: () => 'Go to next step',
  },
})

const emit = defineEmits(['nextStep'])

const nextStep = function () {
  emit('nextStep')
}

const resizeWindow = function () {
  screenSize.value = document.body.clientWidth
}

onMounted(() => {
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
