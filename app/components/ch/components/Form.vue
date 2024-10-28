<template>
  <form
    ref="form"
    :action="action ? action : ''"
    :target="target"
    :method="method"
    @submit="handleSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, type PropType } from 'vue'
import type Checkbox from './Checkbox.vue'
import type Fieldset from './Fieldset.vue'
import type Input from './Input.vue'
import type MultiSelect from './MultiSelect.vue'
import type Radio from './Radio.vue'
import type Select from './Select.vue'
import type TextArea from './Textarea.vue'

const isCustomInvalid = ref(false)
const form = useTemplateRef<HTMLFormElement>('form')

const props = defineProps({
  submitFunction: {
    type: Function as PropType<(e: Event) => void>,
    default: () => undefined,
  },
  action: {
    type: String,
    default: () => undefined,
  },
  method: {
    type: String,
    validator: (prop) => ['post', 'get'].includes(prop as string),
    default: () => 'post',
  },
  target: {
    type: String,
    validator: (prop) => ['_self', '_blank'].includes(prop as string),
    default: () => '_blank',
  },
})

type ChildComponent =
  | typeof Checkbox
  | typeof Fieldset
  | typeof Input
  | typeof MultiSelect
  | typeof Radio
  | typeof Select
  | typeof TextArea

const handleSubmit = function (e: Event) {
  isCustomInvalid.value = false
  for (const element of [form.value]) {
    if (element?.classes?.includes('input--error')) {
      isCustomInvalid.value = true
    }
    for (const child of element!.children) {
      if (
        (child as unknown as ChildComponent).classes?.includes('input--error')
      ) {
        isCustomInvalid.value = true
      }
    }
  }
  if (!isCustomInvalid.value) {
    if (props.submitFunction && !props.action) {
      e.preventDefault()
      props.submitFunction(e)
    } else if (props.submitFunction) {
      props.submitFunction(e)
    }
    window.postMessage({ trigger: 'emitSubmit' })
  } else {
    // Prevent action from executing
    e.preventDefault()
  }
}
</script>
