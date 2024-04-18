<template>
  <notification
    class="toast-message"
    :closeBtn="false"
    :isClosed="false"
    :icon="icon"
    :type="type"
    :text="text"
  />
</template>

<script>
import notification from '~/components/ch/components/Notification.vue';

export default {
  name: 'ToastMessage',
  components: {
    notification,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      validator: (prop) =>
        ['info', 'warning', 'error', 'success', 'alert'].includes(prop),
      default: 'success',
    },
  },
}
</script>
