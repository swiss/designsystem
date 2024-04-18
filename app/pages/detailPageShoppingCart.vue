<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader
        :shoppingCartAriaLabel="shoppingCartAriaLabel"
        :shoppingCartAmmount="shoppingCartAmmount"
        :shoppingCartLink="shoppingCartLink"
        :shoppingCartTarget="shoppingCartTarget"
      />
      <DesktopMenu />
      <MobileMenu />
    </header>
    <main id="main-content">
      <div class="shopping__cart-wrapper">
        <ShoppingCart
          cartOverviewTitle="Ihr Warenkorb"
          cartAddressTitle="Rechnungsadresse & Lieferadresse"
          cartCheckoutTitle="Bestellung übermitteln"
        />
      </div>
    </main>
    <footer class="footer" id="main-footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script>
import ShoppingCart from '../components/ch/components/ShoppingCart.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

export default {
  name: 'detailPageShoppingCart',
  components: {
    FooterInformation,
    AlterBodyClasses,
    FooterNavigation,
    DesktopMenu,
    MobileMenu,
    TopHeader,
    TopBar,
    ShoppingCart,
  },
  data() {
    return {}
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
  computed() {},
}
</script>
