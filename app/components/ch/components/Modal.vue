<template>
  <div
    :open="isOpen"
    :class="computedClasses"
    :aria-modal="isOpen"
  >
    <div
      class="modal__content"
      role="dialog"
      :aria-labelledby="'modal-title-'+uuid"
      :aria-describedby="'modal-desc-'+uuid"
    >
      <header
        :class="{ 'modal__header--with-title': title }"
        class="modal__header"
      >
        <h4
          v-if="title"
          :id="'modal-title-'+uuid"
          class="h4"
        >
          {{ title }}
        </h4>
        <button
          ref="close"
          tabindex="0"
          class="modal__close"
          aria-label="close"
          @click="close"
        >
          <SvgIcon icon="Cancel" size="2xl" />
        </button>
      </header>

			<div
        v-if="$slots.body"
        :id="'modal-desc-'+uuid"
        class="modal__body"
      >
        <slot name="body"></slot>
      </div>

			<footer
        v-if="$slots.footer"
        class="modal__footer"
      >
        <slot name="footer"></slot>
			</footer>
		</div>
    <div
      ref="backdrop"
      tabindex="0"
      class="modal__backdrop"
      aria-label="close"
      @click="close"
      @focus="backdropFocusListener"
    ></div>
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
    uuid: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    layout: {
      type: String,
      validator: (prop) => [
        'auto',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xs'
      ].includes(prop),
    },
    triggerElements: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false,
      triggerElement: undefined
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

      document.addEventListener('keyup', this.keyListener);

      if (e) {
        this.triggerElement = e.currentTarget;
        e.preventDefault();
      }

      requestAnimationFrame(() => { // because the focus() won't work directly after the change of  display:block
        this.$refs.close.focus();
      })
  },
    close(e) {
      this.isOpen = false;

      document.removeEventListener('keyup', this.keyListener);

      if (this.triggerElement) {
        this.triggerElement.focus();
        this.triggerElement = undefined;
      }

      if (e) {
        e.preventDefault();
      }
    },
    keyListener(e) {
      if(e.key === 'Escape') {
        this.close();
      }
    },
    backdropFocusListener(e) {
      this.$refs.close.focus();
    }
  },
}
</script>


