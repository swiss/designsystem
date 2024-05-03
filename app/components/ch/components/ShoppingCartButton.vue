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
      <ShoppingCartAmmountIndicator v-if="ammount > 0" :ammount="ammount" />
    </div>
  </a>
</template>

<script>
import ShoppingCartAmmountIndicator from './ShoppingCartAmmountIndicator.vue'
import SvgIcon from './SvgIcon.vue'
export default {
  components: {
    ShoppingCartAmmountIndicator,
    SvgIcon,
  },
  name: 'ShoppingCartButton',
  props: {
    ammount: {
      type: Number,
      required: true,
    },
    ariaLabel: {
      type: String,
      default:
        'Shopping cart: There are <ammount> items in your shopping cart.',
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
    limittedAmmount() {
      return this.ammount > 9 ? '9+' : this.ammount
    },
    parsedLabel() {
      return this.ariaLabel.replace('<ammount>', this.ammount)
    },
  },
}
</script>
