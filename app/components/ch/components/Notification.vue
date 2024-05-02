<template>
  <div :class="classes" v-if="!isClosed">
    <div class="notification__content-container">
      <SvgIcon v-if="icon" :icon="icon" class="notification__icon" />
      <div class="notification__content" v-html="text" />
    </div>
    <button
      v-if="closeBtn"
      class="notification__close"
      @click="isClosed = true"
      aria-label="Close notification"
    >
      <SvgIcon icon="Cancel" />
    </button>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'notification',
  components: {
    SvgIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: undefined,
      validator: (prop) =>
        ['info', 'warning', 'error', 'success', 'alert', 'hint'].includes(prop),
    },
    icon: {
      type: String,
      default: undefined,
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
    closeBtn: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      let base = 'notification '
      if (this.type) base += `notification--${this.type} `
      return base
    },
  },
}
</script>
