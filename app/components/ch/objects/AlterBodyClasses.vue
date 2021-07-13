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
  },
  watch: {
    isMobileMenuOpen: function () {
      this.alterMenuClasses()
    }
  },
  mounted () {
    this.alterMenuClasses()
  }

};
</script>
