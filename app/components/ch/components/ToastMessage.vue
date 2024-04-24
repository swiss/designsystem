<template>
  <div class="toast__message" :class="showMessage ? 'active' : ''">
    <notification
      class="toast__message-notification"
      :closeBtn="false"
      :isClosed="false"
      :icon="icon"
      :type="type"
      :text="text"
    />
  </div>
</template>

<script>
import notification from '~/components/ch/components/Notification.vue'

export default {
  name: 'ToastMessage',
  components: {
    notification,
  },
  props: {
    triggerName: {
      type: String,
      default: 'trigger-toast-message',
    },
  },
  data() {
    return {
      showMessage: false,
      text: '',
      icon: 'CheckmarkCircle',
      type: 'success',
      showTimeout: null,
    }
  },
  async mounted() {
    await this.$nextTick()
    this.emitter.on(this.triggerName, (e) => {
      this.text = e.text
      this.icon = e.icon
      this.type = e.type

      this.showMessage = true
      if (this.showTimeout) clearTimeout(this.showTimeout)
      this.showTimeout = setTimeout(() => {
        this.showMessage = false
      }, 5000)
    })
  },
}
</script>
