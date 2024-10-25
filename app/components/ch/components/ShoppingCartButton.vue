<template>
  <a
    class="shopping-cart__button"
    tabindex="0"
    :aria-label="parsedLabel"
    :target="target"
    :href="href"
  >
    <p class="shopping-cart__button-label">{{ label }}</p>
    <div class="shopping-cart__icon-group">
      <SvgIcon class="shopping-cart__icon" icon="ShoppingCart" size="base" />
      <ShoppingCartAmountIndicator v-if="amount > 0" :amount="amount" />
    </div>
  </a>
</template>

<script setup lang="ts">
import ShoppingCartAmountIndicator from './ShoppingCartAmountIndicator.vue'
import SvgIcon from './SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: () =>
      'Shopping cart: There are <amount> items in your shopping cart.',
  },
  href: {
    type: String,
    default: () => undefined,
  },
  target: {
    type: String,
    validator: (prop) =>
      ['_blank', '_parent', '_self', '_top'].includes(prop as string),
    default: () => '_self',
  },
  label: {
    type: String,
    required: true,
  },
})

const parsedLabel = computed(() => {
  return props.ariaLabel.replace('<amount>', props.amount.toString())
})
</script>
