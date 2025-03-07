<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader
        shoppingCartAriaLabel="Warenkorb: Es hat <amount> Artikel in Ihrem Warenkorb."
        :shoppingCartAmount="3"
        shoppingCartLink="/?path=/docs/pages-detail-shopping-cart--example"
        shoppingCartTarget="_blank"
        shoppingCartLabel="Warenkorb"
      />
      <DesktopMenu :showActiveNavigation="false" />
      <MobileMenu :showActiveNavigation="false" />
    </header>
    <main id="main-content">
      <section class="section section--default">
        <ShoppingCart
          cartOverviewTitle="Ihr Warenkorb"
          cartAddressTitle="Rechnungsadresse & Lieferadresse"
          cartCheckoutTitle="Bestellung übermitteln"
          cartTitle="Ihre Bestellübersicht"
        />
      </section>
    </main>
    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import ShoppingCart from '../components/ch/components/ShoppingCart.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>
