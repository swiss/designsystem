<template>
  <div v-if="isOpen" :class="computedClasses" tabindex="0">
    <div class="modal__content">
      <header
        :class="{ 'modal__header--with-title': title }"
        class="modal__header"
      >
        <h4 v-if="title" class="h4">
          {{ title }}
        </h4>
        <button @click="close" class="modal__close">
          <SvgIcon icon="Cancel" size="2xl" />
        </button>
      </header>

			<div v-if="$slots.body" class="modal__body">
        <slot name="body"></slot>
      </div>

			<footer v-if="$slots.footer" class="modal__footer">
        <slot name="footer"></slot>
			</footer>
		</div>
    <div @click="close" class="modal__backdrop"></div>
	</div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'Modal',
  components: {
    SvgIcon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    layout: {
      type: String,
      validator: (prop) => [
        'auto',
        'sm',
        'md',
        'lg',
        'xl'
      ].includes(prop),
    },
    triggerElements: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    computedClasses () {
      let base = 'modal '
      if (this.layout) base += `modal--${this.layout} `
      return base
    }
  },
  mounted () {
    document.querySelectorAll(this.triggerElements).forEach(item => {
      item.addEventListener("click", this.open);
    });
  },
  beforeDestroy() {
    document.querySelectorAll(this.triggerElements).forEach(item => {
      item.removeEventListener("click", this.open);
    });
  },
  methods: {
    open(e) {
      this.isOpen = true;
      e.preventDefault();
    },
    close(e) {
      this.isOpen = false;
      e.preventDefault();
    }
  },
}
</script>


