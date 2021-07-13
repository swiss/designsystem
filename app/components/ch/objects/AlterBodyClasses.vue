<template />
<script>
export default {
  name: 'AlterBodyClasses',
  props: {
		isMobileMenuOpen: {
			type: Boolean,
			default: false,
		}
	},
  methods: {
    alterMenuClasses () {
      let mobilemenu = document.getElementById('mobile-menu')
      let context = window.getComputedStyle(mobilemenu).display === "none" ? 'desktop' : 'mobile'

      if (context === 'mobile' && this.isMobileMenuOpen) {
        document.body.classList.add('body--mobile-menu-is-open')
        this.$store.dispatch('layout/openMobileMenu')
      } else {
        document.body.classList.remove('body--mobile-menu-is-open')
        this.$store.dispatch('layout/closeMobileMenu')
      }
    },
  },
  watch: {
    isMobileMenuOpen: function () {
      this.alterMenuClasses()
    }
  },
  mounted () {
    this.alterMenuClasses()
    window.addEventListener("resize", this.alterMenuClasses)
  },
  destroyed() {
    window.removeEventListener("resize", this.alterMenuClasses)
  },

};
</script>
