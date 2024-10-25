<template>
  <nav id="main-navigation" :class="mainNavigationClass" aria-label="Main">
    <ul>
      <li>
        <a href="javascript:alert('link')">
          <span>News</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link)">
          <span>Geodaten</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link')">
          <span>Karten</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link')">
          <span>Geoportale</span>
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          role="button"
          class="navy__has-children"
          :class="{ active: showActiveNavigation }"
          :aria-current="showActiveNavigation"
        >
          <span>Dienstleistungen</span>
          <SvgIcon v-if="context == 'mobile'" icon="ArrowRight" size="lg" />
        </a>
        <ul>
          <li>
            <a href="javascript:void(0)" role="button" class="navy__back">
              <SvgIcon icon="ArrowLeft" size="lg" />
              <span>Back</span>
            </a>
            <h2 class="navy__title">Dienstleistungen</h2>
            <a href="javascript:alert('link')">Überblick</a>
          </li>
          <li><a href="javascript:alert('link')">Datenmodellablage</a></li>
          <li>
            <a
              href="javascript:void(0)"
              role="button"
              class="navy__has-children"
              :class="{ active: showActiveNavigation }"
              :aria-current="showActiveNavigation"
            >
              <span>Geodienste</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
            <ul>
              <li>
                <a href="javascript:void(0)" role="button" class="navy__back">
                  <SvgIcon icon="ArrowLeft" size="lg" />
                  <span>Back</span>
                </a>
                <h2 class="navy__title">Geodienste</h2>
                <a href="javascript:alert('link')">Überblick</a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="navy__has-children"
                  :class="{ active: showActiveNavigation }"
                  :aria-current="showActiveNavigation"
                >
                  <span>Darstellungsdienste</span>
                  <SvgIcon icon="ArrowRight" size="lg" />
                </a>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      role="button"
                      class="navy__back"
                    >
                      <SvgIcon icon="ArrowLeft" size="lg" />
                      <span>Back</span>
                    </a>
                    <h2 class="navy__title">Darstellungsdienste</h2>
                    <a href="javascript:alert('link')">Überblick</a>
                  </li>
                  <li>
                    <a
                      href="javascript:alert('link')"
                      :class="{ active: showActiveNavigation }"
                      :aria-current="showActiveNavigation ? 'page' : false"
                    >
                      Web Map Services
                    </a>
                  </li>
                  <li>
                    <a href="javascript:alert('link')">Web tiling Services</a>
                  </li>
                  <li>
                    <a href="javascript:alert('link')">Vector Tiles Service</a>
                  </li>
                  <li>
                    <a href="javascript:alert('link')"
                      >Web Integration: iFrame</a
                    >
                  </li>
                  <li><a href="javascript:alert('link')">FAQ API</a></li>
                </ul>
              </li>
              <li><a href="javascript:alert('link')">Download-Dienste</a></li>
              <li>
                <a href="javascript:alert('link')"
                  >Linked Data Dienst: GeoDaten semantisch verlinken</a
                >
              </li>
              <li>
                <a href="javascript:alert('link')"
                  >Allgemeine Nutzungsbedingungen und Betriebsbestimmungen der
                  Bundes Geodaten-Infrastruktur BGDI</a
                >
              </li>
              <li><a href="javascript:alert('link')">Suchdienst CSW</a></li>
              <li>
                <a href="javascript:alert('link')"
                  >Konformitätsprüfung Geobasisdienste nach eCH-0056</a
                >
              </li>
              <li><a href="javascript:alert('link')">INSPIRE Dienste</a></li>
            </ul>
          </li>
          <li><a href="javascript:alert('link')">Geodatenmodelle</a></li>
          <li><a href="javascript:alert('link')">FAQ</a></li>
          <li>
            <a href="javascript:alert('link')">Koordinatenreferenzsysteme</a>
          </li>
          <li>
            <a href="javascript:alert('link')">Geografische Bezeichnungen</a>
          </li>
          <li><a href="javascript:alert('link')">Verwaltungseinheiten</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:alert('link')"> Forschung und Lehre </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> Über geo.admin.ch </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> test1 </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> test2 </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> test3 </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> Extra mainmenu example </a>
      </li>
      <li>
        <a href="javascript:alert('link')"> Try to limit mainmenus to 5 </a>
      </li>
      <!-- more button -->
      <li v-if="context == 'desktop'" id="more-button">
        <a
          href="javascript:void(0)"
          role="button"
          class="navy__has-children desktop-menu__more"
        >
          <span>Mehr</span>
          <SvgIcon icon="MoreFilled" size="lg" />
        </a>
        <ul id="more-container" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  context: {
    type: String,
    required: true,
    validator: (prop) => ['desktop', 'mobile'].includes(prop as string),
  },
  // Allow disabling active navigation item highlighting for pages like shopping cart
  showActiveNavigation: {
    type: Boolean,
  },
})

const mainNavigationClass = computed(() => {
  let base = `main-navigation `
  if (props.context) base += `main-navigation--${props.context} `
  return base
})
</script>
