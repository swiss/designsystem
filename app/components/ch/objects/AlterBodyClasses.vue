<template />
<script>
export default {
  name: 'AlterBodyClasses',
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
    isIntranet: {
      type: Boolean,
      default: false,
    },
    isFreebrand: {
      type: Boolean,
      default: false,
    },
    UsesMenuV2: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    alterMenuClasses() {
      let mobilemenu = document.getElementById('mobile-menu-id')
      let context =
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

      if (context === 'mobile' && this.isMobileMenuOpen) {
        if (this.isFreebrand) {
          // TODO: Add mobile menu v2 for freebrand use cases once approved
          document.body.classList.add(
            'body--mobile-menu-is-open-top-bar-disabled'
          )
        } else {
          if (this.UsesMenuV2) {
            document.body.classList.add('body--mobile-menu-v2-is-open')
          } else {
            document.body.classList.add('body--mobile-menu-is-open')
          }
        }
        this.$store.dispatch('layout/openMobileMenu')
      } else {
        if (this.isFreebrand) {
          // TODO: Add mobile menu v2 for freebrand use cases once approved
          document.body.classList.remove(
            'body--mobile-menu-is-open-top-bar-disabled'
          )
        } else {
          if (this.UsesMenuV2) {
            document.body.classList.remove('body--mobile-menu-v2-is-open')
          } else {
            document.body.classList.remove('body--mobile-menu-is-open')
          }
        }
        this.$store.dispatch('layout/closeMobileMenu')
      }

      if (this.isIntranet) {
        document.body.classList.add('body--intranet')
      } else {
        document.body.classList.remove('body--intranet')
      }

      if (this.isFreebrand) {
        document.body.classList.add('body--freebrand')
      } else {
        document.body.classList.remove('body--freebrand')
      }
    },
  },
  watch: {
    isMobileMenuOpen: function () {
      this.alterMenuClasses()
    },
  },
  mounted() {
    this.alterMenuClasses()
    window.addEventListener('resize', this.alterMenuClasses)
  },
  destroyed() {
    window.removeEventListener('resize', this.alterMenuClasses)
  },
}
</script>
