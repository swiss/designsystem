<template>
  <div class="box">
    <h2 class="h5 order__box-title">{{ title }}</h2>
    <div class="order__box-input-container">
      <!-- Add full-width class for single ammount input -->
      <div class="form__group__input order__box-input-ammount-container">
        <Input
          :label="ammountInputLabel"
          :id="getUniqueId('input')"
          type="number"
          variant="outline"
          size="base"
          :value="defaultAmmount"
          @keypress="restrictChars($event)"
          v-on:input="inputValue = $event.target.value"
          v-model="inputValue"
          class="order__box-ammount-input"
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

<script>
import Btn from '~/components/ch/components/Btn'
import Input from '~/components/ch/components/Input.vue'
import Select from '~/components/ch/components/Select.vue'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'OrderBox',
  components: {
    Btn,
    Select,
    Input,
  },
  data() {
    return {
      orderBoxId: uuidv4(),
      inputValue: this.defaultAmmount,
      selectedValue: this.options.find((option) => option.selected).value,
      pricePiece: 0,
    }
  },
  props: {
    defaultAmmount: {
      type: Number,
      default: 1,
    },
    ammountInputLabel: {
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
  },
  created() {
    this.pricePiece = this.options.find((option) => option.selected).pricePiece
  },
  methods: {
    restrictChars($event) {
      // Restrict input to numbric input chars
      // eslint-disable-next-line no-useless-escape
      const regex = /[0-9eE.+\-]/g
      if (regex.test(String.fromCharCode($event.keyCode))) {
        return true
      } else {
        $event.preventDefault()
      }
    },
    getUniqueId(text = '') {
      return `${text}-${this.orderBoxId}`
    },
    setSelectedValue(value) {
      this.selectedValue = value
      this.pricePiece = this.options.find(
        (option) => option.value === value
      ).pricePiece
    },
  },
  computed: {
    totalPrice() {
      return `${this.curencyPrefix} ${(
        this.pricePiece * this.inputValue
      ).toFixed(2)}`
    },
  },
}
</script>
