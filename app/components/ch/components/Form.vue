<template>
  <form
    :action="action ? action : null"
    :target="target"
    :method="method"
    @submit="handleSubmit"
  >
    <slot />
  </form>
</template>

<script setup>
import { ref } from 'vue'

const isCustomInvalid = ref(false)

const props = defineProps({
  submitFunction: {
    type: Function,
  },
  action: {
    type: String,
  },
  method: {
    type: String,
    validator: (prop) => ['post', 'get'].includes(prop),
    default: () => 'post',
  },
  target: {
    type: String,
    validator: (prop) => ['_self', '_blank'].includes(prop),
    default: () => '_blank',
  },
})

const handleSubmit = function (e) {
  isCustomInvalid.value = false
  for (const element of $children) {
    if (element?.classes?.includes('input--error')) {
      isCustomInvalid.value = true
    }
    for (const child of element?.$children) {
      if (child?.classes?.includes('input--error')) {
        isCustomInvalid.value = true
      }
    }
  }
  if (!isCustomInvalid.value) {
    if (submitFunction && !action) {
      e.preventDefault()
      submitFunction(e)
    } else if (submitFunction) {
      submitFunction(e)
    }
    window.postMessage({ trigger: 'emitSubmit', data: e })
  } else {
    // Prevent action from executing
    e.preventDefault()
  }
}
</script>
