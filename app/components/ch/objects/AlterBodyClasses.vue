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
      if (this.isMobileMenuOpen) {
        document.body.classList.add('body--mobilemenu-is-open')
      } else {
        document.body.classList.remove('body--mobilemenu-is-open')
      }
    },
    alterContextClasses () {
      let mobilemenu = document.getElementById('mobilemenu')
      let context = window.getComputedStyle(mobilemenu).display === "none" ? 'desktop' : 'mobile'
      if (context === 'desktop') {
        document.body.classList.add('body--context-desktop')
        document.body.classList.remove('body--context-mobile')
        this.$store.dispatch('layout/toggleMobileMenu')
      } else {
        document.body.classList.add('body--context-mobile')
        document.body.classList.remove('body--context-desktop')
      }
    }
  },
  watch: {
    isMobileMenuOpen: function () {
      this.alterMenuClasses()
    }
  },
  mounted () {
    this.alterMenuClasses()
    this.alterContextClasses()
    window.addEventListener("resize", this.alterContextClasses);
  },
  destroyed() {
    window.removeEventListener("resize", this.alterContextClasses);
  },

};
</script>
