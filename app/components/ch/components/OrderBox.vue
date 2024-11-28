<template>
  <div class="box">
    <h2 class="h5 order__box-title">
      {{ title }}
    </h2>
    <div class="order__box-input-container">
      <!-- Add full-width class for single amount input -->
      <div class="form__group__input order__box-input-amount-container">
        <Input
          :id="getUniqueId('input')"
          :label="amountInputLabel"
          type="number"
          variant="outline"
          size="base"
          :value="inputValue.toString()"
          class="order__box-amount-input"
          :min="0"
          @keypress="restrictChars"
          @input="
            inputValue = parseInt(($event.target as HTMLInputElement).value)
          "
        />
      </div>
      <Select
        :id="getUniqueId('select')"
        class="order__box-input-language-container"
        variant="outline"
        :bare="false"
        size="base"
        :label="languageLabel"
        @select="setSelectedValue"
      >
        <option
          v-for="(option, index) in options"
          :key="`option-${index}`"
          :value="option.value"
          :selected="option.selected"
        >
          {{ option.label }}
        </option>
      </Select>
    </div>
    <div class="order__box-piece-price-container">
      <p class="order__box-piece-price-title">
        {{ pricePieceTitle }}
      </p>
      <p class="order__box-piece-price">
        {{ `${currencyPrefix} ${pricePiece}` }}
      </p>
    </div>
    <div class="order__box-total-price-container">
      <p class="order__box-total-price-title">
        {{ totalPriceTitle }}
      </p>
      <p class="order__box-total-price">
        {{ totalPrice }}
      </p>
    </div>
    <Btn
      class="order__box-order-button"
      variant="filled"
      :fullWidth="true"
      :label="buttonLabel"
      @emit-click="addToCart(selectedValue, inputValue)"
    />
  </div>
</template>

<script setup lang="ts">
import Btn from './Btn.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import { reactive, ref, computed, onMounted, type PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { OrderBoxOption } from '../../../types'

const orderBoxId = uuidv4()
const inputValue = ref(0 as number)
const selectedValue = reactive({} as OrderBoxOption)
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
    type: Array<OrderBoxOption>,
    required: true,
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  addToCart: {
    type: Function as PropType<
      (selectedValue: OrderBoxOption, amount: number) => void
    >,
    default: () => ({}),
  },
  languageLabel: {
    type: String,
    required: true,
  },
  currencyPrefix: {
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
  pricePiece.value =
    props.options.find((option) => option.selected)?.pricePiece || 0
})

const totalPrice = computed(() => {
  return `${props.currencyPrefix} ${(
    pricePiece.value * inputValue.value
  ).toFixed(2)}`
})

const restrictChars = function (event: KeyboardEvent) {
  // Restrict input to numeric input chars
  const regex = /[0-9]/g
  if (regex.test(event.key)) {
    return true
  } else {
    event.preventDefault()
  }
}

const getUniqueId = function (text = '') {
  return `${text}-${orderBoxId}`
}

const setSelectedValue = function (value: string) {
  const newPriceObject = props.options.find((option) => option.value === value)
  pricePiece.value = newPriceObject?.pricePiece || 0
  Object.assign(selectedValue, newPriceObject)
}
</script>
