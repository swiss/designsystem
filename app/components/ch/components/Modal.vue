<template>
  <div v-if="isOpen" :class="computedClasses" tabindex="0">
    <div class="modal__content">
			<header v-if="$slots.header" class="modal__header">
        <h4 class="h4">
          <slot name="header"></slot>
        </h4>
			</header>

			<div v-if="$slots.body" class="modal__body">
        <slot name="body"></slot>
      </div>

			<footer v-if="$slots.footer" class="modal__footer">
        <slot name="footer"></slot>
			</footer>
		</div>
    <div class="modal__backdrop"></div>
	</div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    layout: {
      type: String,
      validator: (prop) => [
        'auto',
        'sm',
        'lg'
      ].includes(prop)
    },
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    computedClasses () {
      let base = 'modal '
      if (this.layout && this.layout !== 'auto') base += `modal--${this.layout} `
      return base
    }
  }
}
</script>


