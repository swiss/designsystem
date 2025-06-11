<template>
  <div id="top-header-id" class="top-header">
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
        :isEasyLanguage="isEasyLanguage"
        :isSignLanguage="isSignLanguage"
      />
      <Logo
        v-if="overrideLogoForPrint"
        title="Staatssekretariat für Wirtschaft"
        accronym="SECO"
        :class="overrideLogoForPrint ? 'logo--print-only' : ''"
      />
      <div v-if="isEasyLanguage" class="icon-header-mobile icon-easy-language">
        <SvgIcon icon="EasyLanguage" size="2xl" />
      </div>
      <div v-if="isSignLanguage" class="icon-header-mobile icon-sign-language">
        <SvgIcon icon="SignLanguage" size="2xl" />
      </div>
      <div v-if="!isEasyLanguage && !isSignLanguage" class="top-header__right">
        <MetaNavigation :isFreebrand="isFreebrand" />
        <div class="top-header__container-flex">
          <SearchMain :isMenuV2="isMenuV2" @toggle-search="toggleSearch" />
          <div class="top-header__shopping-cart-button-desktop">
            <ShoppingCartButton
              :amount="shoppingCartAmount"
              :ariaLabel="shoppingCartAriaLabel"
              :target="shoppingCartTarget"
              :href="shoppingCartLink"
              :label="shoppingCartLabel"
            />
          </div>
        </div>
        <div
          class="top-header__shopping-cart-button-mobile"
          :class="isFreebrand ? 'freebrand' : ''"
        >
          <ShoppingCartButton
            :amount="shoppingCartAmount"
            :ariaLabel="shoppingCartAriaLabel"
            :target="shoppingCartTarget"
            :href="shoppingCartLink"
            :label="shoppingCartLabel"
          />
        </div>
        <LanguageSwitcher
          v-if="isFreebrand && screenSize <= 1023"
          type="outline"
        />
        <Burger
          :isOpen="getMobileMenuIsOpen()"
          @click="layoutStore.toggleMobileMenu"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useLayoutStore } from '../../../store/layout'
import Burger from '../components/Burger.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import Logo from '../components/Logo.vue'
import SearchMain from '../components/SearchMain.vue'
import ShoppingCartButton from '../components/ShoppingCartButton.vue'
import SvgIcon from '../components/SvgIcon.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'

const layoutStore = useLayoutStore()

const screenSize = ref(0)

const props = defineProps({
  overrideLogoForPrint: {
    type: String,
    default: () => '',
  },
  isEasyLanguage: {
    type: Boolean,
    default: () => false,
  },
  isSignLanguage: {
    type: Boolean,
    default: () => false,
  },
  isFreebrand: {
    type: Boolean,
    default: () => false,
  },
  shoppingCartAriaLabel: {
    type: String,
    default: () =>
      'Shopping cart: There are <amount> items in your shopping cart.',
  },
  shoppingCartAmount: {
    type: Number,
    default: () => 0,
  },
  shoppingCartLink: {
    type: String,
    default: () => undefined,
  },
  shoppingCartLabel: {
    type: String,
    default: () => 'Shopping cart',
  },
  shoppingCartTarget: {
    type: String,
    validator: (prop) =>
      ['_blank', '_parent', '_self', '_top'].includes(prop as string),
    default: () => '_self',
  },
  isMenuV2: {
    type: Boolean,
    default: () => false,
  },
})
const emit = defineEmits(['top-header-search-toggle'])

function toggleSearch() {
  // Toggles v2 search input bellow top header
  emit('top-header-search-toggle')
}

function getMobileMenuIsOpen() {
  /* Disable menu animation for new mobile menu */
  if (props.isMenuV2) {
    return false
  }
  return layoutStore.mobileMenuIsOpen
}

function resizeWindow() {
  screenSize.value = document.body.clientWidth
}

onMounted(() => {
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
