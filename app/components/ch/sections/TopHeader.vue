<template>
  <div class="top-header" id="top-header-id">
    <div class="top-header__mobile-title" aria-hidden="true">
      <div class="container container--flex">
        Eidgenössisches Departement für Verteidigung, <br />Bevölkerungsschutz
        und Sport
      </div>
    </div>
    <div class="container container--flex">
      <Logo
        title="Eidgenössisches Departement für Verteidigung, <br/>Bevölkerungsschutz und Sport"
        accronym="DSS"
        :class="overrideLogoForPrint ? 'logo--print-hidden' : ''"
        :isFreebrand="isFreebrand"
        :isEasyLanguage="isEasyLanguage"
        :isSignLanguage="isSignLanguage"
      />
      <Logo
        v-if="overrideLogoForPrint"
        title="Staatssekretariat für Wirtschaft"
        accronym="SECO"
        :class="overrideLogoForPrint ? 'logo--print-only' : ''"
      />
      <div v-if="isEasyLanguage" class="icon-header-mobile icon-easy-language">
        <SvgIcon icon="EasyLanguage" size="2xl" />
      </div>
      <div v-if="isSignLanguage" class="icon-header-mobile icon-sign-language">
        <SvgIcon icon="SignLanguage" size="2xl" />
      </div>
      <div v-if="!isEasyLanguage && !isSignLanguage" class="top-header__right">
        <MetaNavigation :isFreebrand="isFreebrand" />
        <div class="top-header__container-flex">
          <SearchMain :isMenuV2="isMenuV2" @toggleSearch="toggleSearch" />
          <div class="top-header__shopping-cart-button-desktop">
            <ShoppingCartButton
              :amount="shoppingCartAmount"
              :ariaLabel="shoppingCartAriaLabel"
              :target="shoppingCartTarget"
              :href="shoppingCartLink"
              :label="shoppingCartLabel"
            />
          </div>
        </div>
        <div
          class="top-header__shopping-cart-button-mobile"
          :class="isFreebrand ? 'freebrand' : ''"
        >
          <ShoppingCartButton
            :amount="shoppingCartAmount"
            :ariaLabel="shoppingCartAriaLabel"
            :target="shoppingCartTarget"
            :href="shoppingCartLink"
          />
        </div>
        <LanguageSwitcher
          v-if="isFreebrand && screenSize <= 1023"
          type="outline"
        />
        <Burger
          @click.native="toggleMobileMenu()"
          :isOpen="getMobileMenuIsOpen()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Burger from '~/components/ch/components/Burger.vue'
import Logo from '~/components/ch/components/Logo.vue'
import SearchMain from '~/components/ch/components/SearchMain.vue'
import Input from '../components/Input.vue'
import LanguageSwitcher from '../components/LanguageSwitcher'
import ShoppingCartButton from '../components/ShoppingCartButton.vue'
import SvgIcon from '../components/SvgIcon.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'

export default {
  name: 'topHeader',
  props: {
    overrideLogoForPrint: {
      type: String,
      default: '',
    },
    isEasyLanguage: {
      type: Boolean,
      default: false,
    },
    isSignLanguage: {
      type: Boolean,
      default: false,
    },
    isFreebrand: {
      type: Boolean,
      default: false,
    },
    shoppingCartAriaLabel: {
      type: String,
      default: 'Shopping cart: There are <amount> items in your shopping cart.',
    },
    shoppingCartAmount: {
      type: Number,
      default: 0,
    },
    shoppingCartLink: {
      type: String,
    },
    shoppingCartLabel: {
      type: String,
      default: 'Shopping cart',
    },
    shoppingCartTarget: {
      type: String,
      validator: (prop) =>
        ['_blank', '_parent', '_self', '_top'].includes(prop),
      default: '_self',
    },
    isMenuV2: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      screenSize: 0,
      searchActive: false,
    }
  },
  components: {
    Logo,
    Burger,
    SearchMain,
    MetaNavigation,
    LanguageSwitcher,
    ShoppingCartButton,
    SvgIcon,
    Input,
  },
  created() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    toggleSearch() {
      // Toggles v2 search input bellow top header
      this.emitter.emit('top-header-search-toggle')
    },
    toggleMobileMenu() {
      this.$store.dispatch('layout/toggleMobileMenu')
    },
    getMobileMenuIsOpen() {
      /* Disable menu animation for new mobile menu */
      if (this.isMenuV2) {
        return false
      }
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
  },
}
</script>
