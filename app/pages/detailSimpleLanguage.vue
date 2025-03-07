<template>
  <div>
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar
        :isOpen="false"
        :isEasyLanguage="isEasyLanguage"
        :isSignLanguage="isSignLanguage"
        :isSticky="useStickyNavigation"
      />
      <TopHeader
        :isEasyLanguage="isEasyLanguage"
        :isSignLanguage="isSignLanguage"
      />
      <DesktopMenu :isSimplePage="true" :isSticky="useStickyNavigation" />
      <MobileMenu :isSimplePage="true" :isSticky="useStickyNavigation" />
      <Breadcrumb :isSimplePage="true" />
      <div class="container">
        <Btn
          to="/"
          variant="outline"
          size="sm"
          icon="ArrowLeft"
          iconPos="left"
          label="Zurück"
          class="btn--back"
        />
        <ShareBar :showEasyIcons="false" />
      </div>
    </header>
    <main id="main-content">
      <section class="section section--py-half">
        <div class="container">
          <div class="container container--grid gap--responsive">
            <div class="container__center--xs vertical-spacing">
              <h1 class="h1">
                Datenmodellablage: Model Repository für Geobasisdaten des
                Bundesrechts
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container">
          <div class="container container--grid gap--responsive">
            <div class="container__center--xs vertical-spacing">
              <figure v-if="isEasyLanguage">
                <picture>
                  <img
                    src="https://picsum.photos/1600/1200"
                    alt="placeholder"
                  />
                </picture>
              </figure>
              <figure v-if="isSignLanguage">
                <div class="ratio ratio--16/9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM"
                    title="Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal"
                    frameborder="0"
                  />
                </div>
                <figcaption>
                  Geoinformation - Alles findet irgendwo statt — © Swiss
                  Geoportal
                </figcaption>
              </figure>
            </div>
            <div class="container__center--xs vertical-spacing">
              <h2 class="h2">
                At vero eos et accusam et justo duo dolores et ea rebum
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div class="container container--grid gap--responsive">
            <div class="container__center--sm vertical-spacing">
              <figure>
                <picture>
                  <img
                    src="https://picsum.photos/1600/1200"
                    alt="placeholder"
                  />
                </picture>
              </figure>
            </div>
            <div class="container__center--xs vertical-spacing">
              <h2 class="h2">
                At vero eos et accusam et justo duo dolores et ea rebum
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--py-half">
        <div class="container">
          <Btn
            to="/"
            variant="outline"
            size="sm"
            icon="ArrowLeft"
            iconPos="left"
            label="Zurück"
            class="btn--back"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Btn from '../components/ch/components/Btn.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

defineProps({
  isEasyLanguage: {
    type: Boolean,
    default: () => false,
  },
  isSignLanguage: {
    type: Boolean,
    default: () => false,
  },
  useStickyNavigation: {
    type: Boolean,
    default: () => false,
  },
})
</script>
