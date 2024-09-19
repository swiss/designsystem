<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb />
    </header>
    <main id="main-content">
      <Hero type="hub">
        <template v-slot:title> Unsere Dienstleistungen </template>
        <template v-slot:description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt enim id orci facilisis placerat. Proin odio mauris,
          venenatis non placerat at, finibus non tortor. Mauris sodales ultrices
          neque sit amet cogsectetur.
        </template>
      </Hero>
      <SubpagesSection />
    </main>
    <footer class="footer" id="main-footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup>
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import Hero from '../components/ch/sections/Hero'
import SubpagesSection from '../components/ch/sections/SubpagesSection.vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>
