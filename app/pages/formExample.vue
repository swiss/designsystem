<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb />
    </header>
    <main id="main-content">
      <Hero type="default">
        <template v-slot:title> Form Example </template>
      </Hero>
      <FormDemo />

      <BackToTopBtn fixed type="outline" target="main-header" />
    </main>
    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import FormDemo from '../components/ch/sections/FormDemo.vue'
import BackToTopBtn from '../components/ch/components/BackToTopBtn.vue'
import Hero from '../components/ch/sections/Hero.vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>
