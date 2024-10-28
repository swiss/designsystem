<template>
  <div :open="isOpen" :class="computedClasses" :aria-modal="isOpen">
    <div
      class="modal__content"
      role="dialog"
      :aria-labelledby="'modal-title-' + uuid"
      :aria-describedby="'modal-desc-' + uuid"
    >
      <header
        :class="{ 'modal__header--with-title': title }"
        class="modal__header"
      >
        <h4 v-if="title" :id="'modal-title-' + uuid" class="h4">
          {{ title }}
        </h4>
        <button
          ref="close"
          tabindex="0"
          class="modal__close"
          aria-label="close"
          @click="close"
        >
          <SvgIcon icon="Cancel" size="2xl" />
        </button>
      </header>

      <div v-if="slots.body" :id="'modal-desc-' + uuid" class="modal__body">
        <slot name="body" />
      </div>

      <footer v-if="slots.footer" class="modal__footer">
        <slot name="footer" />
      </footer>
    </div>
    <div
      ref="backdrop"
      tabindex="0"
      class="modal__backdrop"
      aria-label="close"
      @click="close"
      @focus="backdropFocusListener"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  useTemplateRef,
  useSlots,
} from 'vue'

const isOpen = ref(false)
const triggerElement = ref(undefined as HTMLElement | undefined)
const closeBtn = useTemplateRef('close')

const slots = useSlots()

const props = defineProps({
  uuid: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: () => '',
  },
  layout: {
    type: String,
    validator: (prop) =>
      ['auto', 'xs', 'sm', 'md', 'lg', 'xl', 'xs'].includes(prop as string),
    default: () => undefined,
  },
  triggerElements: {
    type: String,
    default: () => '',
  },
})

const computedClasses = computed(() => {
  let base = 'modal '
  if (props.layout) base += `modal--${props.layout} `
  return base
})

const open = function (e: Event) {
  isOpen.value = true

  document.addEventListener('keyup', keyListener)

  if (e) {
    triggerElement.value = e.currentTarget as HTMLElement
    e.preventDefault()
  }

  requestAnimationFrame(() => {
    // because the focus() won't work directly after the change of  display:block
    closeBtn.value?.focus()
  })
}

const close = function (e: Event) {
  isOpen.value = false

  document.removeEventListener('keyup', keyListener)

  if (triggerElement.value) {
    triggerElement.value.focus()
    triggerElement.value = undefined
  }

  if (e) {
    e.preventDefault()
  }
}

const keyListener = function (e: KeyboardEvent) {
  if (e.key === 'Escape') {
    close(e)
  }
}

const backdropFocusListener = function () {
  closeBtn.value?.focus()
}

onMounted(() => {
  document.querySelectorAll(props.triggerElements).forEach((item) => {
    item.addEventListener('click', open)
  })
})

onBeforeUnmount(() => {
  document.querySelectorAll(props.triggerElements).forEach((item) => {
    item.removeEventListener('click', open)
  })
})
</script>
