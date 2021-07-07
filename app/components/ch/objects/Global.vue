<template>
  <div :class="globalClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Global',
  props: {
		isMobileMenuOpen: {
			type: Boolean,
			default: false,
		}
	},
  watch: {
    // whenever active changes, this function will run
    isMobileMenuOpen: function () {
      if (this.isMobileMenuOpen) {
        document.body.classList.add('body--mobilemenu-is-open')
      } else {
        document.body.classList.remove('body--mobilemenu-is-open')
      }

    }
  },
  computed: {
    globalClasses () {
      let base = `global `
      if (this.isMobileMenuOpen) base += ` `
      return base
    }
  }

};
</script>
