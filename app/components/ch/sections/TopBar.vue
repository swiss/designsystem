<template>
  <div
    id="top-bar-container"
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : ''"
  >
    <div id="top-bar" :class="computedTopBarClass">
      <div class="container container--flex">
        <button
          v-if="!isEasyLanguage && !isSignLanguage"
          class="top-bar__btn"
          @click="triggerTopBar()"
        >
          <span>Alle Schweizer Bundesbehörden</span>
          <SvgIcon icon="ChevronDown" size="lg" class="top-bar__btn__icon" />
        </button>
        <div v-else />
        <div class="top-bar__right">
          <Badge
            v-if="isEasyLanguage || isSignLanguage"
            icon="Cancel"
            :iconLeft="computedAccessibilityIcon"
            :label="computedAccessibilityBadgeLabel"
            size="base"
          />
          <TopBarNavigation v-if="!isEasyLanguage && !isSignLanguage" />
          <LanguageSwitcher type="negative" />
        </div>
      </div>
    </div>
    <div v-if="useStickyPlaceholder" id="stickyTopBarPlaceholder" />
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">
        <div class="flex justify-end">
          <button class="top-bar__drawer__close__btn" @click="isOpen = !isOpen">
            <span>Schliessen</span>
            <SvgIcon icon="Cancel" size="lg" />
          </button>
        </div>
        <div>
          <h3 class="top-bar__main-title">Wo befinde ich mich?</h3>
          <nav
            aria-label="breadcrumb"
            aria-current="location"
            class="localization"
          >
            <ul>
              <li>
                <a href="javascript:void(0)">UVEK</a>
                <SvgIcon icon="ArrowRight" class="localization__icon" />
              </li>
              <li>
                <a href="javascript:void(0)">Swisstopo</a>
                <SvgIcon icon="ArrowRight" class="localization__icon" />
              </li>
              <li>
                <a href="javascript:void(0)" class="active" aria-current="page">
                  Das Geoportal des Bundes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="separator separator--negative separator--xl" />

        <div>
          <h3 class="top-bar__main-title">
            Eine andere Bundesbehörde besuchen
          </h3>

          <div class="top-bar__grid">
            <div class="top-bar__grid__box-1">
              <h4 class="top-bar__title">Regierung</h4>
              <ul class="menu">
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">BR</div>
                      <div>Der Schweizerische Bundesrat</div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">BK</div>
                      <div>
                        Die Schweizerische Bundeskanzlei – die Stabsstelle des
                        Bundesrats
                      </div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="top-bar__grid__box-2">
              <!-- Potential additional information here -->
            </div>

            <div class="top-bar__grid__box-3">
              <h4 class="top-bar__title">Departemente</h4>
              <ul class="menu">
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDA</div>
                      <div>
                        Eidgenössisches Departement für auswärtige
                        Angelegenheiten
                      </div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDI</div>
                      <div>Eidgenössisches Departement des Innern</div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EJPD</div>
                      <div>Eidgenössisches Justiz- und Polizeidepartement</div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">VBS</div>
                      <div>
                        Eidgenössisches Departement für Verteidigung,
                        Bevölkerungsschutz und Sport
                      </div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EFD</div>
                      <div>Eidgenössisches Finanzdepartement</div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">WBF</div>
                      <div>
                        Eidgenössisches Departement für Wirtschaft, Bildung und
                        Forschung
                      </div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">UVEK</div>
                      <div>
                        Eidgenössisches Departement für Umwelt, Verkehr, Energie
                        und Kommunikation
                      </div>
                    </div>
                    <SvgIcon icon="External" class="menu__item__icon" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="top-bar__grid__box-4">
              <h4 class="top-bar__title">Weitere Bundes-Websites</h4>
              <div class="search search--negative search--large">
                <div class="search__group">
                  <input
                    id="search-input"
                    ref="searchInput"
                    v-model="filterString"
                    type="search"
                    label="Ämter filtern"
                    placeholder="Filtern"
                    autocomplete="off"
                  />
                  <Btn
                    v-if="filterString !== ''"
                    label="Clear search input"
                    icon="CancelCircle"
                    icon-pos="only"
                    variant="bare-negative"
                    size="lg"
                    @click="
                      () => {
                        filterString = ''
                        $refs.searchInput.focus()
                      }
                    "
                  />
                  <div v-else class="btn btn--negative btn--lg btn--icon-only">
                    <SvgIcon icon="Filter" class="icon--lg" />
                  </div>
                </div>
                <div class="search__results search__results--negative">
                  <ul class="menu">
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>Bundesamt für Kultur</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BLV</span>
                          </div>
                          <div>
                            Bundesamt für Lebensmittelsicherheit und
                            Veterinärwesen
                          </div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>UVEK</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BS</span>
                          </div>
                          <div>Bundesamt für Sozialversicherungen</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BAR</span>
                          </div>
                          <div>Schweizerisches Bundesarchiv</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>Bundesamt für Kultur</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BAR</span>
                          </div>
                          <div>Schweizerisches Bundesarchiv</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>Bundesamt für Kultur</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                    <li
                      class="menu__item menu__item--negative menu__item--icon-on-hover"
                    >
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>Bundesamt für Kultur</div>
                        </div>
                        <SvgIcon icon="External" class="menu__item__icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import Badge from '../components/Badge.vue'
import Btn from '../components/Btn.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'

const filterString = ref('')
const useStickyPlaceholder = ref(false)
const initialTopBarOffset = ref(0)

const isOpen = defineModel('isOpen', {
  type: Boolean,
  default: () => false,
})
const props = defineProps({
  isEasyLanguage: {
    type: Boolean,
    default: () => false,
  },
  isSignLanguage: {
    type: Boolean,
    default: () => false,
  },
  isSticky: {
    type: Boolean,
    default: () => false,
  },
})

const computedTopBarClass = computed(() => {
  let base = `top-bar__bar`
  if (props.isEasyLanguage) base += `--easy-language `
  if (props.isSignLanguage) base += `--sign-language `
  return base
})

const computedAccessibilityIcon = computed(() => {
  if (props.isEasyLanguage) {
    return 'EasyLanguage'
  }
  if (props.isSignLanguage) {
    return 'SignLanguage'
  }
  return ''
})

const computedAccessibilityBadgeLabel = computed(() => {
  if (props.isEasyLanguage) {
    return 'Leichte Sprache schliessen'
  }
  if (props.isSignLanguage) {
    return 'Gebärdensprache schliessen'
  }
  return ''
})

const resizeWindow = function () {
  const topBar = document.getElementById('top-bar-container') as HTMLElement
  initialTopBarOffset.value = topBar.offsetTop
  handleScroll()
}

const handleScroll = async function () {
  const topBar = document.getElementById('top-bar') as HTMLElement
  if (window.scrollY > initialTopBarOffset.value) {
    useStickyPlaceholder.value = true
    await nextTick()
    // Set height on placeholder to avoid jump when top bar is set to sticky
    const stickyPlaceholder = document.getElementById(
      'stickyTopBarPlaceholder',
    ) as HTMLElement
    stickyPlaceholder.style.height = `${topBar.clientHeight}px`

    topBar.classList.add('sticky-top-bar')
  } else {
    useStickyPlaceholder.value = false
    topBar.classList.remove('sticky-top-bar')
  }
}

const triggerTopBar = function () {
  isOpen.value = !isOpen.value
  window.postMessage({ trigger: 'top-bar-drawer-change' })
}

onMounted(() => {
  if (props.isSticky) {
    window.addEventListener('scroll', handleScroll)
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
  }
})
</script>
