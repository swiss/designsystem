<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '../../../store/layout'

const layoutStore = useLayoutStore()

const props = defineProps({
  isMobileMenuOpen: {
    type: Boolean,
    default: () => false,
  },
  isIntranet: {
    type: Boolean,
    default: () => false,
  },
  isFreebrand: {
    type: Boolean,
    default: () => false,
  },
  usesMenuV2: {
    type: Boolean,
    default: false,
  },
})

const alterMenuClasses = function () {
  const mobilemenu = document.getElementById('mobile-menu-id') as HTMLElement
  const context =
    window.getComputedStyle(mobilemenu).display === 'none'
      ? 'desktop'
      : 'mobile'

  if (context === 'mobile') {
    document.body.classList.add('context--mobile')
    document.body.classList.remove('context--desktop')
  } else {
    document.body.classList.remove('context--mobile')
    document.body.classList.add('context--desktop')
  }

  if (context === 'mobile' && props.isMobileMenuOpen) {
    if (props.isFreebrand) {
      // TODO: Add mobile menu v2 for freebrand use cases once approved
      document.body.classList.add('body--mobile-menu-is-open-top-bar-disabled')
    } else {
      if (props.usesMenuV2) {
        document.body.classList.add('body--mobile-menu-v2-is-open')
      } else {
        document.body.classList.add('body--mobile-menu-is-open')
      }
    }
    layoutStore.openMobileMenu()
  } else {
    if (props.isFreebrand) {
      // TODO: Add mobile menu v2 for freebrand use cases once approved
      document.body.classList.remove(
        'body--mobile-menu-is-open-top-bar-disabled',
      )
    } else {
      if (props.usesMenuV2) {
        document.body.classList.remove('body--mobile-menu-v2-is-open')
      } else {
        document.body.classList.remove('body--mobile-menu-is-open')
      }
    }
    layoutStore.closeMobileMenu()
  }

  if (props.isIntranet) {
    document.body.classList.add('body--intranet')
  } else {
    document.body.classList.remove('body--intranet')
  }

  if (props.isFreebrand) {
    document.body.classList.add('body--freebrand')
  } else {
    document.body.classList.remove('body--freebrand')
  }
}

watch(props, function () {
  alterMenuClasses()
})

onMounted(() => {
  alterMenuClasses()
  window.addEventListener('resize', alterMenuClasses)
})

onUnmounted(() => {
  window.removeEventListener('resize', alterMenuClasses)
})
</script>
