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
      <v-select
        :id="getUniqueId('multi-select')"
        :multiple="multiple"
        :placeholder="placeholder"
        :class="selectClasses"
        :disabled="disabled"
        :components="{ Deselect, OpenIndicator }"
        :options="options"
        :name="name"
        v-model="currentSelected"
        :selectable="
          (option) =>
            !excluded.includes(option) &&
            (selectLimit
              ? !currentSelected || currentSelected.length < selectLimit
              : true)
        "
      />
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

<script setup>
import vSelect from 'vue-select' // TODO: Switch this to vueform/multiselect
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const selectId = ref('')
const currentSelected = reactive([])
const Deselect = reactive({
  render: (createElement) => createElement('span', '×'),
})
const OpenIndicator = reactive({
  render: (createElement) => createElement('span'),
})

const props = defineProps({
  bare: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    validator: (prop) => ['outline', 'negative'].includes(prop),
    default: 'outline',
  },
  size: {
    type: String,
    validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    default: 'base',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hideLabel: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  messageType: {
    type: String,
    validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
  },
  onChange: {
    type: Function,
    default: () => ({}),
  },
  options: {
    type: Array,
    default: () => [],
  },
  selected: {
    type: Array,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
  },
  excluded: {
    type: Array,
    default: () => [],
  },
  selectLimit: {
    type: Number,
  },
})

const selectWrapperClasses = computed(() => {
  let base = 'select shadow-lg '
  if (bare) base += 'select--bare'
  return base
})

const selectClasses = computed(() => {
  let base = ''
  if (variant) base += `input--${variant} `
  if (size) base += `input--${size} `
  if (disabled) base += 'input--disabled '
  if (messageType) base += `input--${messageType} `
  return base
})

const labelClasses = computed(() => {
  let base = ''
  if (variant === 'negative') base += 'text--negative '
  if (size) base += `text--${size} `
  if (hideLabel) base += 'sr-only '
  if (required) base += 'text--asterisk '
  return base
})

const getUniqueId = function (text = '') {
  return `${text}-${selectId}`
}

watch(currentSelected, function () {
  useNuxtApp().$emit('emitSelect', currentSelected)
  onChange(currentSelected)
})

// Set initial selected element
currentSelected = selected

onMounted(() => {
  selectId.value = uuidv4()
})
</script>
