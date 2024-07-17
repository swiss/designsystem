<template>
  <div>
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" :isSignLanguage="true" />
      <TopHeader :isSignLanguage="true" />
      <DesktopMenu :isSimplePage="true" />
      <MobileMenu :isSimplePage="true" />
    </header>
    <main id="main-content">
      <section class="section section--default">
        <div class="container">
          <hero type="hub">
            <template v-slot:title>
              <h1 class="h1 hero__title">Corona</h1>
            </template>
          </hero>
          <div class="grid grid--responsive-cols-3 gap--responsive">
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image" />
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
                        ></path>
                      </svg>
                      <span class="btn__text">Weiterlesen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image" />
              </div>
              <div class="card__content">
                <div class="card__body">
                  <div class="card__title">
                    <h3>Covid-Zertifikate</h3>
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
                        ></path>
                      </svg>
                      <span class="btn__text">Weiterlesen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card--default card--clickable">
              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="image" />
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
                        ></path>
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

<script>
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Hero from '../components/ch/sections/Hero.vue'

export default {
  name: 'OverviewSignLanguage',
  components: {
    TopBar,
    TopHeader,
    DesktopMenu,
    MobileMenu,
    Hero,
  },
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>
