<template>
  <div class="toast__message" :class="showMessage ? 'active' : ''">
    <Notification
      class="toast__message-notification"
      :closeBtn="false"
      :isClosed="false"
      :icon="icon"
      :type="type"
      :text="text"
    />
  </div>
</template>

<script setup lang="ts">
import Notification from './Notification.vue'
import { ref, onMounted, nextTick } from 'vue'

const showMessage = ref(false)
const text = ref('')
const icon = ref('CheckmarkCircle')
const type = ref('success')
const showTimeout = ref(null as ReturnType<typeof setTimeout> | null)

const props = defineProps({
  triggerName: {
    type: String,
    default: () => 'trigger-toast-message',
  },
})

onMounted(async () => {
  await nextTick()

  window.addEventListener('message', (e) => {
    if (!(e.data?.trigger === props.triggerName)) return

    const payload = e.data.data
    text.value = payload.text
    icon.value = payload.icon
    type.value = payload.type

    showMessage.value = true
    if (showTimeout.value) clearTimeout(showTimeout.value)
    showTimeout.value = setTimeout(() => {
      showMessage.value = false
    }, 5000)
  })
})
</script>
