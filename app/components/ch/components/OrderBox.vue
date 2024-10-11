<template>
  <div class="box">
    <h2 class="h5 order__box-title">{{ title }}</h2>
    <div class="order__box-input-container">
      <!-- Add full-width class for single amount input -->
      <div class="form__group__input order__box-input-amount-container">
        <Input
          :label="amountInputLabel"
          :id="getUniqueId('input')"
          type="number"
          variant="outline"
          size="base"
          :value="inputValue"
          @keypress="restrictChars"
          @input="inputValue = $event.target.value"
          class="order__box-amount-input"
          :min="0"
        />
      </div>
      <Select
        class="order__box-input-language-container"
        variant="outline"
        :bare="false"
        size="base"
        :label="languageLabel"
        :id="getUniqueId('select')"
        @select="setSelectedValue"
      >
        <option
          v-for="(option, index) in options"
          :key="`option-${index}`"
          :value="option.value"
          :selected="option.selected"
        >
          {{ option.label }}
        </option></Select
      >
    </div>
    <div class="order__box-piece-price-container">
      <p class="order__box-piece-price-title">{{ pricePieceTitle }}</p>
      <p class="order__box-piece-price">
        {{ `${curencyPrefix} ${pricePiece}` }}
      </p>
    </div>
    <div class="order__box-total-price-container">
      <p class="order__box-total-price-title">{{ totalPriceTitle }}</p>
      <p class="order__box-total-price">{{ totalPrice }}</p>
    </div>
    <Btn
      class="order__box-order-button"
      variant="filled"
      :fullWidth="true"
      :label="buttonLabel"
      @emitClick="addToCart(selectedValue, parseInt(inputValue))"
    />
  </div>
</template>

<script setup>
import Btn from './Btn.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import { reactive, ref, computed, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const orderBoxId = uuidv4()
const inputValue = ref(0)
const selectedValue = reactive({})
const pricePiece = ref(0)

const props = defineProps({
  defaultAmount: {
    type: Number,
    default: () => 1,
  },
  amountInputLabel: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  totalPriceTitle: {
    type: String,
    required: true,
  },
  pricePieceTitle: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  addToCart: {
    type: Function,
    default: () => ({}),
  },
  languageLabel: {
    type: String,
    required: true,
  },
  curencyPrefix: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  inputValue.value = props.defaultAmount
  Object.assign(
    selectedValue,
    props.options.find((option) => option.selected),
  )
  pricePiece.value = props.options.find((option) => option.selected).pricePiece
})

const totalPrice = computed(() => {
  return `${props.curencyPrefix} ${(
    pricePiece.value * inputValue.value
  ).toFixed(2)}`
})

const restrictChars = function (event) {
  // Restrict input to numbric input chars
  const regex = /[0-9eE.+\-]/g
  if (regex.test(String.fromCharCode(event.keyCode))) {
    return true
  } else {
    event.preventDefault()
  }
}

const getUniqueId = function (text = '') {
  return `${text}-${orderBoxId}`
}

const setSelectedValue = function (value) {
  Object.assign(selectedValue, value)
}
</script>
