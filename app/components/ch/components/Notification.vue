<template>
<div :class="classes">
  <SvgIcon
    v-if="this.icon"
    :icon="this.icon"
    class="notification__icon"
  />
  <div class="notification__text">
    {{ text }}
  </div>
</div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'notification',
  components: {
    SvgIcon
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: undefined,
      validator: (prop) => [
        'info',
        'warning',
        'error',
        'success'
      ].includes(prop)
    },
    icon: {
      type: String,
      default: undefined
    },
  },

  computed: {
    classes () {
      let base = 'notification '
      if (this.type) base += `notification--${this.type} `
      return base
    },
  }
};
</script>

