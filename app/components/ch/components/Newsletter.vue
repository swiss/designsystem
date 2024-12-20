<template>
  <div :class="computedClasses" :data-default-theme="props.theme">
    <h3 class="newsletter__title h3" v-text="title" />
    <p class="newsletter__text" v-html="text" />
    <form
      v-if="state !== 'sent'"
      action="page.php"
      class="newsletter__form"
      @submit="submit"
    >
      <Input
        :id="'newsletter-address'"
        :type="'email'"
        :label="inputLabel"
        :autocomplete="'true'"
        class="newsletter__input"
        :theme="props.theme"
      />
      <Btn
        :variant="'filled'"
        :size="'base'"
        :label="buttonLabel"
        type="submit"
        class="newsletter__button"
      />
    </form>
    <Notification
      v-else
      :icon="'CheckmarkCircle'"
      :text="successText"
      :type="'success'"
      :closeBtn="false"
      class="newsletter__notification"
    />
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue'
import Btn from './Btn.vue'
import Notification from './Notification.vue'
import { computed } from 'vue'

const state = defineModel('state', {
  type: String,
  default: () => '',
  validator: (prop) => ['default', 'sent'].includes(prop as string),
})

const props = defineProps({
  type: {
    type: String,
    validator: (prop) => ['default', 'inline'].includes(prop as string),
    default: () => undefined,
  },
  theme: {
    type: String,
    validator: (prop) => ['dark', 'light'].includes(prop as string),
    default: () => 'light',
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  inputLabel: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  successText: {
    type: String,
    required: true,
  },
})

const computedClasses = computed(() => {
  let base = 'newsletter '
  if (props.type) base += `newsletter--${props.type} `
  return base
})

const submit = function (e: Event) {
  state.value = 'sent'
  e.preventDefault()
}
</script>
