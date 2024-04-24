<template>
  <div class="top-header">
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
      />
      <Logo
        v-if="overrideLogoForPrint"
        title="Staatssekretariat für Wirtschaft"
        accronym="SECO"
        :class="overrideLogoForPrint ? 'logo--print-only' : ''"
      />
      <div class="top-header__right">
        <MetaNavigation
          context="desktop"
          :isFreebrand="isFreebrand"
          :shoppingCartAriaLabel="shoppingCartAriaLabel"
          :shoppingCartAmmount="shoppingCartAmmount"
          :shoppingCartLink="shoppingCartLink"
          :shoppingCartTarget="shoppingCartTarget"
        />
        <SearchMain />
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
import LanguageSwitcher from '../components/LanguageSwitcher'
import MetaNavigation from '../navigations/MetaNavigation.vue'

export default {
  name: 'topHeader',
  props: {
    overrideLogoForPrint: {
      type: String,
      default: '',
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
  components: {
    Logo,
    Burger,
    SearchMain,
    MetaNavigation,
    LanguageSwitcher,
  },
  created() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    toggleMobileMenu() {
      this.$store.dispatch('layout/toggleMobileMenu')
    },
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
  },
}
</script>
