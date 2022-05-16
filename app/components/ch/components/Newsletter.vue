<template>
<div :class="classes">
  I am a newsletter module
</div>
</template>

<script>
import SvgIcon from './Notification.vue';

export default {
  name: 'newsletter',
  components: {
    Notification
  },
  props: {
    state: {
      state: String,
      default: undefined,
      validator: (prop) => [
        'default',
        'sent'
      ].includes(prop)
    }
  },

  computed: {
    classes () {
      let base = 'newsletter '
      if (this.state) base += `notification--${this.state} `
      return base
    },
  }
};
</script>

