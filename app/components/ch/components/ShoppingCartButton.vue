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

<script>
import ShoppingCartAmountIndicator from './ShoppingCartAmountIndicator.vue'
import SvgIcon from './SvgIcon.vue'
export default {
  components: {
    ShoppingCartAmountIndicator,
    SvgIcon,
  },
  name: 'ShoppingCartButton',
  props: {
    amount: {
      type: Number,
      required: true,
    },
    ariaLabel: {
      type: String,
      default:
        'Shopping cart: There are <amount> items in your shopping cart.',
    },
    href: {
      type: String,
    },
    target: {
      type: String,
      validator: (prop) =>
        ['_blank', '_parent', '_self', '_top'].includes(prop),
      default: '_self',
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    limittedAmount() {
      return this.amount > 9 ? '9+' : this.amount
    },
    parsedLabel() {
      return this.ariaLabel.replace('<amount>', this.amount)
    },
  },
}
</script>
