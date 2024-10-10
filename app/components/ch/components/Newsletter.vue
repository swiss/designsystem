<template>
  <div :class="computedClasses">
    <h3 v-text="title" class="newsletter__title h3"></h3>
    <p v-html="text" class="newsletter__text"></p>
    <form
      v-if="state !== 'sent'"
      @submit="submit"
      action="page.php"
      class="newsletter__form"
    >
      <Input
        :type="'email'"
        :id="'newsletter-address'"
        :label="inputLabel"
        :autocomplete="'true'"
        class="newsletter__input"
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

<script setup>
import Input from './Input.vue'
import Btn from './Btn.vue'
import Notification from './Notification.vue'
import { computed } from 'vue'

const state = defineModel('state', {
  type: String,
  default: () => '',
  validator: (prop) => ['default', 'sent'].includes(prop),
})

const props = defineProps({
  type: {
    type: String,
    validator: (prop) => ['default', 'inline'].includes(prop),
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

const submit = function (e) {
  state.value = 'sent'
  e.preventDefault()
}
</script>
