<template>
  <div class="form__group__select">
    <label
      v-if="label"
      :for="getUniqueId('multi-select')"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <div :class="selectWrapperClasses">
      <VSelect
        :id="getUniqueId('multi-select')"
        v-model="currentSelected"
        :multiple="multiple"
        :placeholder="placeholder"
        :class="selectClasses"
        :disabled="disabled"
        :components="{ Deselect, OpenIndicator }"
        :options="options"
        :name="name"
        :selectable="
          (option: string) =>
            !excluded.includes(option) &&
            (selectLimit
              ? !currentSelected || currentSelected.length < selectLimit
              : true)
        "
      >
        <!-- Workaround for required validation -->
        <template #search="{ attributes, events }">
          <input
            class="vs__search"
            :required="
              required && (!currentSelected || currentSelected.length === 0)
            "
            v-bind="attributes as any"
            v-on="events"
          />
        </template>
      </VSelect>
      <div class="select__icon">
        <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="message"
      class="badge badge--sm"
      :class="`badge--${messageType}`"
    >
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as VSelect } from 'vue-select'
import { ref, computed, watch, onMounted, h, type PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const selectId = ref('')
const currentSelected = ref([] as string[])
const Deselect = { render: () => h('span', '×') }
const OpenIndicator = { render: () => h('span') }

const props = defineProps({
  bare: {
    type: Boolean,
    default: () => false,
  },
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop as string),
    default: () => 'outline',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop as string),
    default: () => 'base',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  hideLabel: {
    type: Boolean,
    default: () => false,
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  label: {
    type: String,
    default: () => undefined,
  },
  name: {
    type: String,
    default: () => undefined,
  },
  message: {
    type: String,
    default: () => undefined,
  },
  messageType: {
    type: String,
    validator: (prop) =>
      ['error', 'warning', 'success', 'info'].includes(prop as string),
    default: () => undefined,
  },
  onChange: {
    type: Function as PropType<(value: string[]) => void>,
    default: () => ({}),
  },
  options: {
    type: Array<string>,
    default: () => [],
  },
  selected: {
    type: Array<string>,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: () => true,
  },
  placeholder: {
    type: String,
    default: () => undefined,
  },
  excluded: {
    type: Array<string>,
    default: () => [],
  },
  selectLimit: {
    type: Number,
    default: () => undefined,
  },
})

const selectWrapperClasses = computed(() => {
  let base = 'select shadow-lg '
  if (props.bare) base += 'select--bare'
  return base
})

const selectClasses = computed(() => {
  let base = ''
  if (props.variant) base += `input--${props.variant} `
  if (props.size) base += `input--${props.size} `
  if (props.disabled) base += 'input--disabled '
  if (props.messageType) base += `input--${props.messageType} `
  return base
})

const labelClasses = computed(() => {
  let base = ''
  if (props.variant === 'negative') base += 'text--negative '
  if (props.size) base += `text--${props.size} `
  if (props.hideLabel) base += 'sr-only '
  if (props.required) base += 'text--asterisk '
  return base
})

const getUniqueId = function (text = '') {
  return `${text}-${selectId.value}`
}

watch(currentSelected, function () {
  props.onChange(currentSelected.value)
  window.postMessage({
    trigger: 'emitSelect',
    data: [...currentSelected.value],
  })
})

onMounted(() => {
  // Set initial selected element
  currentSelected.value = props.selected
  selectId.value = uuidv4()
})
</script>
