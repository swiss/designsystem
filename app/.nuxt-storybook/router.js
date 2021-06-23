import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _442ca7e2 = () => interopDefault(import('../pages/index_old.vue' /* webpackChunkName: "pages/index_old" */))
const _71cd6b2b = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _53cae6e4 = () => interopDefault(import('../pages/components/artboard.vue' /* webpackChunkName: "pages/components/artboard" */))
const _4005891a = () => interopDefault(import('../pages/components/avatar.vue' /* webpackChunkName: "pages/components/avatar" */))
const _46e601f2 = () => interopDefault(import('../pages/components/badge.vue' /* webpackChunkName: "pages/components/badge" */))
const _a7225942 = () => interopDefault(import('../pages/components/breadcrumbs.vue' /* webpackChunkName: "pages/components/breadcrumbs" */))
const _6d6c5a73 = () => interopDefault(import('../pages/components/button.vue' /* webpackChunkName: "pages/components/button" */))
const _63a44ba5 = () => interopDefault(import('../pages/components/button-group.vue' /* webpackChunkName: "pages/components/button-group" */))
const _503fe591 = () => interopDefault(import('../pages/components/card.vue' /* webpackChunkName: "pages/components/card" */))
const _309e0761 = () => interopDefault(import('../pages/components/carousel.vue' /* webpackChunkName: "pages/components/carousel" */))
const _39d0db2e = () => interopDefault(import('../pages/components/collapse.vue' /* webpackChunkName: "pages/components/collapse" */))
const _d41d5c00 = () => interopDefault(import('../pages/components/countdown.vue' /* webpackChunkName: "pages/components/countdown" */))
const _56b05ca8 = () => interopDefault(import('../pages/components/divider.vue' /* webpackChunkName: "pages/components/divider" */))
const _715634b2 = () => interopDefault(import('../pages/components/drawer.vue' /* webpackChunkName: "pages/components/drawer" */))
const _382e2992 = () => interopDefault(import('../pages/components/dropdown.vue' /* webpackChunkName: "pages/components/dropdown" */))
const _2bd9b57b = () => interopDefault(import('../pages/components/hero.vue' /* webpackChunkName: "pages/components/hero" */))
const _d028d50a = () => interopDefault(import('../pages/components/link.vue' /* webpackChunkName: "pages/components/link" */))
const _6123236d = () => interopDefault(import('../pages/components/mask.vue' /* webpackChunkName: "pages/components/mask" */))
const _2cc0c060 = () => interopDefault(import('../pages/components/menu.vue' /* webpackChunkName: "pages/components/menu" */))
const _4a4ccbfc = () => interopDefault(import('../pages/components/modal.vue' /* webpackChunkName: "pages/components/modal" */))
const _4b6bb051 = () => interopDefault(import('../pages/components/navbar.vue' /* webpackChunkName: "pages/components/navbar" */))
const _1af40b4a = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _16418ca4 = () => interopDefault(import('../pages/components/progress.vue' /* webpackChunkName: "pages/components/progress" */))
const _c16fa256 = () => interopDefault(import('../pages/components/stat.vue' /* webpackChunkName: "pages/components/stat" */))
const _1a2ed776 = () => interopDefault(import('../pages/components/steps.vue' /* webpackChunkName: "pages/components/steps" */))
const _e5ac82b8 = () => interopDefault(import('../pages/components/tab.vue' /* webpackChunkName: "pages/components/tab" */))
const _5271949d = () => interopDefault(import('../pages/components/table.vue' /* webpackChunkName: "pages/components/table" */))
const _44d8d6dc = () => interopDefault(import('../pages/components/tooltip.vue' /* webpackChunkName: "pages/components/tooltip" */))
const _59cefcf0 = () => interopDefault(import('../pages/core/colors.vue' /* webpackChunkName: "pages/core/colors" */))
const _cce95b7c = () => interopDefault(import('../pages/core/layout.vue' /* webpackChunkName: "pages/core/layout" */))
const _641781c7 = () => interopDefault(import('../pages/core/typography.vue' /* webpackChunkName: "pages/core/typography" */))
const _096c992c = () => interopDefault(import('../pages/demos/cards.vue' /* webpackChunkName: "pages/demos/cards" */))
const _12c3f280 = () => interopDefault(import('../pages/demos/mobile-screen.vue' /* webpackChunkName: "pages/demos/mobile-screen" */))
const _4e66732e = () => interopDefault(import('../pages/demos/style-guide.vue' /* webpackChunkName: "pages/demos/style-guide" */))
const _52b60172 = () => interopDefault(import('../pages/docs/add-themes.vue' /* webpackChunkName: "pages/docs/add-themes" */))
const _fab9bb84 = () => interopDefault(import('../pages/docs/config.vue' /* webpackChunkName: "pages/docs/config" */))
const _0f014512 = () => interopDefault(import('../pages/docs/customize.vue' /* webpackChunkName: "pages/docs/customize" */))
const _3efae45c = () => interopDefault(import('../pages/docs/default-themes.vue' /* webpackChunkName: "pages/docs/default-themes" */))
const _3ae0768e = () => interopDefault(import('../pages/docs/features.vue' /* webpackChunkName: "pages/docs/features" */))
const _10639112 = () => interopDefault(import('../pages/docs/install/index.vue' /* webpackChunkName: "pages/docs/install/index" */))
const _06df99bb = () => interopDefault(import('../pages/docs/use.vue' /* webpackChunkName: "pages/docs/use" */))
const _69912996 = () => interopDefault(import('../pages/docs/whats-included.vue' /* webpackChunkName: "pages/docs/whats-included" */))
const _61b84e7d = () => interopDefault(import('../pages/components/form/checkbox.vue' /* webpackChunkName: "pages/components/form/checkbox" */))
const _64e22f00 = () => interopDefault(import('../pages/components/form/input.vue' /* webpackChunkName: "pages/components/form/input" */))
const _75612a9e = () => interopDefault(import('../pages/components/form/radio.vue' /* webpackChunkName: "pages/components/form/radio" */))
const _f6adb894 = () => interopDefault(import('../pages/components/form/select.vue' /* webpackChunkName: "pages/components/form/select" */))
const _4d185674 = () => interopDefault(import('../pages/components/form/textarea.vue' /* webpackChunkName: "pages/components/form/textarea" */))
const _96e483e4 = () => interopDefault(import('../pages/components/form/toggle.vue' /* webpackChunkName: "pages/components/form/toggle" */))
const _226a91b4 = () => interopDefault(import('../pages/components/mockup/code.vue' /* webpackChunkName: "pages/components/mockup/code" */))
const _19f7cff6 = () => interopDefault(import('../pages/components/mockup/phone.vue' /* webpackChunkName: "pages/components/mockup/phone" */))
const _4bda6769 = () => interopDefault(import('../pages/components/mockup/window.vue' /* webpackChunkName: "pages/components/mockup/window" */))
const _eea79ff8 = () => interopDefault(import('../pages/docs/install/basscss.vue' /* webpackChunkName: "pages/docs/install/basscss" */))
const _29f76626 = () => interopDefault(import('../pages/docs/install/cdn.vue' /* webpackChunkName: "pages/docs/install/cdn" */))
const _ee982346 = () => interopDefault(import('../pages/docs/install/tachyons.vue' /* webpackChunkName: "pages/docs/install/tachyons" */))
const _f6a18a1c = () => interopDefault(import('../pages/docs/install/windicss.vue' /* webpackChunkName: "pages/docs/install/windicss" */))
const _4411ff7a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index_old",
    component: _442ca7e2,
    name: "index_old"
  }, {
    path: "/components/alert",
    component: _71cd6b2b,
    name: "components-alert"
  }, {
    path: "/components/artboard",
    component: _53cae6e4,
    name: "components-artboard"
  }, {
    path: "/components/avatar",
    component: _4005891a,
    name: "components-avatar"
  }, {
    path: "/components/badge",
    component: _46e601f2,
    name: "components-badge"
  }, {
    path: "/components/breadcrumbs",
    component: _a7225942,
    name: "components-breadcrumbs"
  }, {
    path: "/components/button",
    component: _6d6c5a73,
    name: "components-button"
  }, {
    path: "/components/button-group",
    component: _63a44ba5,
    name: "components-button-group"
  }, {
    path: "/components/card",
    component: _503fe591,
    name: "components-card"
  }, {
    path: "/components/carousel",
    component: _309e0761,
    name: "components-carousel"
  }, {
    path: "/components/collapse",
    component: _39d0db2e,
    name: "components-collapse"
  }, {
    path: "/components/countdown",
    component: _d41d5c00,
    name: "components-countdown"
  }, {
    path: "/components/divider",
    component: _56b05ca8,
    name: "components-divider"
  }, {
    path: "/components/drawer",
    component: _715634b2,
    name: "components-drawer"
  }, {
    path: "/components/dropdown",
    component: _382e2992,
    name: "components-dropdown"
  }, {
    path: "/components/hero",
    component: _2bd9b57b,
    name: "components-hero"
  }, {
    path: "/components/link",
    component: _d028d50a,
    name: "components-link"
  }, {
    path: "/components/mask",
    component: _6123236d,
    name: "components-mask"
  }, {
    path: "/components/menu",
    component: _2cc0c060,
    name: "components-menu"
  }, {
    path: "/components/modal",
    component: _4a4ccbfc,
    name: "components-modal"
  }, {
    path: "/components/navbar",
    component: _4b6bb051,
    name: "components-navbar"
  }, {
    path: "/components/pagination",
    component: _1af40b4a,
    name: "components-pagination"
  }, {
    path: "/components/progress",
    component: _16418ca4,
    name: "components-progress"
  }, {
    path: "/components/stat",
    component: _c16fa256,
    name: "components-stat"
  }, {
    path: "/components/steps",
    component: _1a2ed776,
    name: "components-steps"
  }, {
    path: "/components/tab",
    component: _e5ac82b8,
    name: "components-tab"
  }, {
    path: "/components/table",
    component: _5271949d,
    name: "components-table"
  }, {
    path: "/components/tooltip",
    component: _44d8d6dc,
    name: "components-tooltip"
  }, {
    path: "/core/colors",
    component: _59cefcf0,
    name: "core-colors"
  }, {
    path: "/core/layout",
    component: _cce95b7c,
    name: "core-layout"
  }, {
    path: "/core/typography",
    component: _641781c7,
    name: "core-typography"
  }, {
    path: "/demos/cards",
    component: _096c992c,
    name: "demos-cards"
  }, {
    path: "/demos/mobile-screen",
    component: _12c3f280,
    name: "demos-mobile-screen"
  }, {
    path: "/demos/style-guide",
    component: _4e66732e,
    name: "demos-style-guide"
  }, {
    path: "/docs/add-themes",
    component: _52b60172,
    name: "docs-add-themes"
  }, {
    path: "/docs/config",
    component: _fab9bb84,
    name: "docs-config"
  }, {
    path: "/docs/customize",
    component: _0f014512,
    name: "docs-customize"
  }, {
    path: "/docs/default-themes",
    component: _3efae45c,
    name: "docs-default-themes"
  }, {
    path: "/docs/features",
    component: _3ae0768e,
    name: "docs-features"
  }, {
    path: "/docs/install",
    component: _10639112,
    name: "docs-install"
  }, {
    path: "/docs/use",
    component: _06df99bb,
    name: "docs-use"
  }, {
    path: "/docs/whats-included",
    component: _69912996,
    name: "docs-whats-included"
  }, {
    path: "/components/form/checkbox",
    component: _61b84e7d,
    name: "components-form-checkbox"
  }, {
    path: "/components/form/input",
    component: _64e22f00,
    name: "components-form-input"
  }, {
    path: "/components/form/radio",
    component: _75612a9e,
    name: "components-form-radio"
  }, {
    path: "/components/form/select",
    component: _f6adb894,
    name: "components-form-select"
  }, {
    path: "/components/form/textarea",
    component: _4d185674,
    name: "components-form-textarea"
  }, {
    path: "/components/form/toggle",
    component: _96e483e4,
    name: "components-form-toggle"
  }, {
    path: "/components/mockup/code",
    component: _226a91b4,
    name: "components-mockup-code"
  }, {
    path: "/components/mockup/phone",
    component: _19f7cff6,
    name: "components-mockup-phone"
  }, {
    path: "/components/mockup/window",
    component: _4bda6769,
    name: "components-mockup-window"
  }, {
    path: "/docs/install/basscss",
    component: _eea79ff8,
    name: "docs-install-basscss"
  }, {
    path: "/docs/install/cdn",
    component: _29f76626,
    name: "docs-install-cdn"
  }, {
    path: "/docs/install/tachyons",
    component: _ee982346,
    name: "docs-install-tachyons"
  }, {
    path: "/docs/install/windicss",
    component: _f6a18a1c,
    name: "docs-install-windicss"
  }, {
    path: "/",
    component: _4411ff7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
