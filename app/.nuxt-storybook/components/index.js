import { wrapFunctional } from './utils'

export { default as Alert } from '../../components/daisy/ui/Alert.vue'
export { default as Avatar } from '../../components/daisy/ui/Avatar.vue'
export { default as Button } from '../../components/daisy/ui/Button.vue'
export { default as Checkbox } from '../../components/daisy/ui/Checkbox.vue'
export { default as Collapse } from '../../components/daisy/ui/Collapse.vue'
export { default as FormControl } from '../../components/daisy/ui/FormControl.vue'
export { default as Hero } from '../../components/daisy/ui/Hero.vue'
export { default as Icon } from '../../components/daisy/ui/Icon.vue'
export { default as Input } from '../../components/daisy/ui/Input.vue'
export { default as Menu } from '../../components/daisy/ui/Menu.vue'
export { default as MenuItem } from '../../components/daisy/ui/MenuItem.vue'
export { default as Navbar } from '../../components/daisy/ui/Navbar.vue'
export { default as Progress } from '../../components/daisy/ui/Progress.vue'
export { default as Radio } from '../../components/daisy/ui/Radio.vue'
export { default as Select } from '../../components/daisy/ui/Select.vue'
export { default as Textarea } from '../../components/daisy/ui/Textarea.vue'
export { default as Toggle } from '../../components/daisy/ui/Toggle.vue'
export { default as Badge } from '../../components/daisy/ui/badge.vue'
export { default as Card } from '../../components/daisy/ui/card.vue'
export { default as GalleryCard } from '../../components/daisy/demo/GalleryCard.vue'
export { default as MobileScreen } from '../../components/daisy/demo/MobileScreen.vue'
export { default as CardsDemo } from '../../components/daisy/landing/CardsDemo.vue'
export { default as FeatureCustomize } from '../../components/daisy/landing/FeatureCustomize.vue'
export { default as FeatureHtmlCompare } from '../../components/daisy/landing/FeatureHtmlCompare.vue'
export { default as FeatureInstall } from '../../components/daisy/landing/FeatureInstall.vue'
export { default as FeatureTheming } from '../../components/daisy/landing/FeatureTheming.vue'
export { default as HomepageDemoAlert } from '../../components/daisy/landing/HomepageDemoAlert.vue'
export { default as HomepageDemoAvatar } from '../../components/daisy/landing/HomepageDemoAvatar.vue'
export { default as HomepageDemoBreadcrumb } from '../../components/daisy/landing/HomepageDemoBreadcrumb.vue'
export { default as HomepageDemoButton } from '../../components/daisy/landing/HomepageDemoButton.vue'
export { default as HomepageDemoCard } from '../../components/daisy/landing/HomepageDemoCard.vue'
export { default as HomepageDemoCard2 } from '../../components/daisy/landing/HomepageDemoCard2.vue'
export { default as HomepageDemoCheckbox } from '../../components/daisy/landing/HomepageDemoCheckbox.vue'
export { default as HomepageDemoLoading } from '../../components/daisy/landing/HomepageDemoLoading.vue'
export { default as HomepageDemoMenu } from '../../components/daisy/landing/HomepageDemoMenu.vue'
export { default as HomepageDemoNav } from '../../components/daisy/landing/HomepageDemoNav.vue'
export { default as HomepageDemoPagination } from '../../components/daisy/landing/HomepageDemoPagination.vue'
export { default as HomepageDemoTab } from '../../components/daisy/landing/HomepageDemoTab.vue'
export { default as HomepageDemoToggle } from '../../components/daisy/landing/HomepageDemoToggle.vue'
export { default as HomepageHero } from '../../components/daisy/landing/HomepageHero.vue'
export { default as TryOnline } from '../../components/daisy/landing/TryOnline.vue'
export { default as Btn } from '../../components/ch/components/Btn.vue'
export { default as Logo } from '../../components/ch/components/Logo.vue'
export { default as ClassTable } from '../../components/daisy/ClassTable.vue'
export { default as CollapseTransition } from '../../components/daisy/CollapseTransition.vue'
export { default as Footer } from '../../components/daisy/Footer.vue'
export { default as Header } from '../../components/daisy/Header.vue'
export { default as PromoDropdown } from '../../components/daisy/PromoDropdown.vue'
export { default as TabHandler } from '../../components/daisy/TabHandler.vue'
export { default as Wrapper } from '../../components/daisy/Wrapper.vue'

export const LazyAlert = import('../../components/daisy/ui/Alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c))
export const LazyAvatar = import('../../components/daisy/ui/Avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/daisy/ui/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckbox = import('../../components/daisy/ui/Checkbox.vue' /* webpackChunkName: "components/checkbox" */).then(c => wrapFunctional(c.default || c))
export const LazyCollapse = import('../../components/daisy/ui/Collapse.vue' /* webpackChunkName: "components/collapse" */).then(c => wrapFunctional(c.default || c))
export const LazyFormControl = import('../../components/daisy/ui/FormControl.vue' /* webpackChunkName: "components/form-control" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/daisy/ui/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyIcon = import('../../components/daisy/ui/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const LazyInput = import('../../components/daisy/ui/Input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/daisy/ui/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuItem = import('../../components/daisy/ui/MenuItem.vue' /* webpackChunkName: "components/menu-item" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../../components/daisy/ui/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyProgress = import('../../components/daisy/ui/Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c))
export const LazyRadio = import('../../components/daisy/ui/Radio.vue' /* webpackChunkName: "components/radio" */).then(c => wrapFunctional(c.default || c))
export const LazySelect = import('../../components/daisy/ui/Select.vue' /* webpackChunkName: "components/select" */).then(c => wrapFunctional(c.default || c))
export const LazyTextarea = import('../../components/daisy/ui/Textarea.vue' /* webpackChunkName: "components/textarea" */).then(c => wrapFunctional(c.default || c))
export const LazyToggle = import('../../components/daisy/ui/Toggle.vue' /* webpackChunkName: "components/toggle" */).then(c => wrapFunctional(c.default || c))
export const LazyBadge = import('../../components/daisy/ui/badge.vue' /* webpackChunkName: "components/badge" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../components/daisy/ui/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyGalleryCard = import('../../components/daisy/demo/GalleryCard.vue' /* webpackChunkName: "components/gallery-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileScreen = import('../../components/daisy/demo/MobileScreen.vue' /* webpackChunkName: "components/mobile-screen" */).then(c => wrapFunctional(c.default || c))
export const LazyCardsDemo = import('../../components/daisy/landing/CardsDemo.vue' /* webpackChunkName: "components/cards-demo" */).then(c => wrapFunctional(c.default || c))
export const LazyFeatureCustomize = import('../../components/daisy/landing/FeatureCustomize.vue' /* webpackChunkName: "components/feature-customize" */).then(c => wrapFunctional(c.default || c))
export const LazyFeatureHtmlCompare = import('../../components/daisy/landing/FeatureHtmlCompare.vue' /* webpackChunkName: "components/feature-html-compare" */).then(c => wrapFunctional(c.default || c))
export const LazyFeatureInstall = import('../../components/daisy/landing/FeatureInstall.vue' /* webpackChunkName: "components/feature-install" */).then(c => wrapFunctional(c.default || c))
export const LazyFeatureTheming = import('../../components/daisy/landing/FeatureTheming.vue' /* webpackChunkName: "components/feature-theming" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoAlert = import('../../components/daisy/landing/HomepageDemoAlert.vue' /* webpackChunkName: "components/homepage-demo-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoAvatar = import('../../components/daisy/landing/HomepageDemoAvatar.vue' /* webpackChunkName: "components/homepage-demo-avatar" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoBreadcrumb = import('../../components/daisy/landing/HomepageDemoBreadcrumb.vue' /* webpackChunkName: "components/homepage-demo-breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoButton = import('../../components/daisy/landing/HomepageDemoButton.vue' /* webpackChunkName: "components/homepage-demo-button" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoCard = import('../../components/daisy/landing/HomepageDemoCard.vue' /* webpackChunkName: "components/homepage-demo-card" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoCard2 = import('../../components/daisy/landing/HomepageDemoCard2.vue' /* webpackChunkName: "components/homepage-demo-card2" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoCheckbox = import('../../components/daisy/landing/HomepageDemoCheckbox.vue' /* webpackChunkName: "components/homepage-demo-checkbox" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoLoading = import('../../components/daisy/landing/HomepageDemoLoading.vue' /* webpackChunkName: "components/homepage-demo-loading" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoMenu = import('../../components/daisy/landing/HomepageDemoMenu.vue' /* webpackChunkName: "components/homepage-demo-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoNav = import('../../components/daisy/landing/HomepageDemoNav.vue' /* webpackChunkName: "components/homepage-demo-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoPagination = import('../../components/daisy/landing/HomepageDemoPagination.vue' /* webpackChunkName: "components/homepage-demo-pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoTab = import('../../components/daisy/landing/HomepageDemoTab.vue' /* webpackChunkName: "components/homepage-demo-tab" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageDemoToggle = import('../../components/daisy/landing/HomepageDemoToggle.vue' /* webpackChunkName: "components/homepage-demo-toggle" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageHero = import('../../components/daisy/landing/HomepageHero.vue' /* webpackChunkName: "components/homepage-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyTryOnline = import('../../components/daisy/landing/TryOnline.vue' /* webpackChunkName: "components/try-online" */).then(c => wrapFunctional(c.default || c))
export const LazyBtn = import('../../components/ch/components/Btn.vue' /* webpackChunkName: "components/btn" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/ch/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyClassTable = import('../../components/daisy/ClassTable.vue' /* webpackChunkName: "components/class-table" */).then(c => wrapFunctional(c.default || c))
export const LazyCollapseTransition = import('../../components/daisy/CollapseTransition.vue' /* webpackChunkName: "components/collapse-transition" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/daisy/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/daisy/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyPromoDropdown = import('../../components/daisy/PromoDropdown.vue' /* webpackChunkName: "components/promo-dropdown" */).then(c => wrapFunctional(c.default || c))
export const LazyTabHandler = import('../../components/daisy/TabHandler.vue' /* webpackChunkName: "components/tab-handler" */).then(c => wrapFunctional(c.default || c))
export const LazyWrapper = import('../../components/daisy/Wrapper.vue' /* webpackChunkName: "components/wrapper" */).then(c => wrapFunctional(c.default || c))
