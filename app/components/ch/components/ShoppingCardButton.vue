<template>
  <a
    class="shopping-cart-button"
    tabindex="0"
    :aria-label="parsedLabel"
    :target="target"
    :href="href"
  >
    <SvgIcon icon="ShoppingCart" size="lg" />
    <ShoppingCartAmmountIndicator v-if="ammount > 0" :ammount="ammount" />
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
  name: 'ShoppingCardButton',
  props: {
    ammount: {
      type: Number,
      required: true,
    },
    ariaLabel: {
      type: String,
      default: 'There are <ammount> items in your shopping cart.',
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
