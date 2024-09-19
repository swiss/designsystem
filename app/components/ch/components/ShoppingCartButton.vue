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

<script setup>
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
    default: 'Shopping cart: There are <amount> items in your shopping cart.',
  },
  href: {
    type: String,
  },
  target: {
    type: String,
    validator: (prop) => ['_blank', '_parent', '_self', '_top'].includes(prop),
    default: '_self',
  },
  label: {
    type: String,
    required: true,
  },
})

const limittedAmount = computed(() => {
  return props.amount > 9 ? '9+' : props.amount
})

const parsedLabel = computed(() => {
  return props.ariaLabel.replace('<amount>', props.amount)
})
</script>
