<template>
  <div>
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar
        :isOpen="false"
        :isEasyLanguage="true"
        :isSticky="useStickyNavigation"
      />
      <TopHeader :isEasyLanguage="true" />
      <DesktopMenu :isSimplePage="true" :isSticky="useStickyNavigation" />
      <MobileMenu :isSimplePage="true" :isSticky="useStickyNavigation" />
    </header>
    <main id="main-content">
      <section class="section-overview">
        <Hero type="overview">
          <template v-slot:title>
            <h1 class="h1 hero__title">
              Corona
            </h1>
          </template>
        </Hero>
        <div class="container">
          <div class="grid grid--responsive-cols-3 gap--responsive">
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image">
              </div>
              <div class="card__content">
                <div class="card__body">
                  <div class="card__title">
                    <h3>Regeln und Verbote</h3>
                  </div>
                </div>
                <div class="card__footer card__footer--icon-only">
                  <div class="card__footer__action">
                    <a
                      href="#"
                      aria-label="Weiterlesen"
                      class="btn btn--outline btn--icon-only"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="btn__icon icon icon--base icon--ArrowRight"
                      >
                        <path
                          d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"
                        />
                      </svg>
                      <span class="btn__text">Weiterlesen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image">
              </div>
              <div class="card__content">
                <div class="card__body">
                  <div class="card__title">
                    <h3>Covid-Zertifikate</h3>
                  </div>
                  <div class="card__description">
                    <span>
                      Hier finden Sie Informationen zu Covid-Zertifikaten.
                    </span>
                  </div>
                </div>
                <div class="card__footer card__footer--icon-only">
                  <div class="card__footer__action">
                    <a
                      href="#"
                      aria-label="Weiterlesen"
                      class="btn btn--outline btn--icon-only"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="btn__icon icon icon--base icon--ArrowRight"
                      >
                        <path
                          d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"
                        />
                      </svg>
                      <span class="btn__text">Weiterlesen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image">
              </div>
              <div class="card__content">
                <div class="card__body">
                  <div class="card__title">
                    <h3>Corona Impfung</h3>
                  </div>
                </div>
                <div class="card__footer card__footer--icon-only">
                  <div class="card__footer__action">
                    <a
                      href="#"
                      aria-label="Weiterlesen"
                      class="btn btn--outline btn--icon-only"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="btn__icon icon icon--base icon--ArrowRight"
                      >
                        <path
                          d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"
                        />
                      </svg>
                      <span class="btn__text">Weiterlesen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import Hero from '../components/ch/sections/Hero.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

defineProps({
  useStickyNavigation: {
    type: Boolean,
    default: () => false,
  },
})
</script>
