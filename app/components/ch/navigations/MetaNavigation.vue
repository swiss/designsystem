<template>
  <div class="meta-navigation-container">
    <nav :class="metanavigationClass" aria-label="Meta">
      <ul>
        <li>
          <a href="#" class="meta-navigation__item">
            <span> Leichte Sprache </span>
            <SvgIcon icon="EasyLanguage" size="lg" />
          </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item">
            <span> Gebärden Sprache </span>
            <SvgIcon icon="SignLanguage" size="lg" />
          </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item"> Jobs </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item"> Kontakt </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item"> Medien </a>
        </li>
        <li>
          <ShoppingCardButton :ammount="shoppingCartAmmount" :ariaLabel="shoppingCartAriaLabel" :target="shoppingCartTarget" :href="shoppingCartLink" />
        </li>
        <li>
          <a href="#" class="meta-navigation__more">
            <span> Mehr </span>
            <SvgIcon icon="MoreFilled" size="md" />
          </a>
        </li>
      </ul>
    </nav>
    <LanguageSwitcher v-if="isFreebrand && screenSize > 1023" type="outline" />
  </div>
</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ShoppingCardButton from '../components/ShoppingCardButton.vue'
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'MetaNavigation',
  components: {
    SvgIcon,
    LanguageSwitcher,
    ShoppingCardButton,
  },
  props: {
    context: {
      type: String,
      required: true,
      validator: (prop) => ['desktop', 'mobile'].includes(prop),
    },
    isFreebrand: {
      type: Boolean,
      default: false,
    },
    shoppingCartAriaLabel: {
      type: String,
      default: 'There are <ammount> items in your shopping cart.',
    },
    shoppingCartAmmount: {
      type: Number,
      default: 0,
    },
    shoppingCartLink: {
      type: String,
      required: true
    },
    shoppingCartTarget: {
      type: String,
      validator: (prop) =>
        ['_blank', '_parent', '_self', '_top'].includes(prop),
      default: '_self',
    },
  },
  data() {
    return {
      screenSize: 0,
    }
  },
  created() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  computed: {
    metanavigationClass() {
      let base = `meta-navigation `
      if (this.context) base += `meta-navigation--${this.context} `
      return base
    },
  },
  methods: {
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
  },
}
</script>
