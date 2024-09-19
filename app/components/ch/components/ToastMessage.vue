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

<script setup>
import notification from './Notification.vue'
import { ref, onMounted } from 'vue'
import mitt from 'mitt'

const showMessage = ref(false)
const text = ref('')
const icon = ref('CheckmarkCircle')
const type = ref('success')
const showTimeout = ref(null)

const props = defineProps({
  triggerName: {
    type: String,
    default: 'trigger-toast-message',
  },
})

onMounted(async () => {
  await nextTick()
  useNuxtApp().$on(props.triggerName, (e) => {
    text.value = e.text
    icon.value = e.icon
    type.value = e.type

    showMessage.value = true
    if (showTimeout.value) clearTimeout(showTimeout.value)
    showTimeout.value = setTimeout(() => {
      showMessage.value = false
    }, 5000)
  })
})
</script>
