<template>
  <div class="box">
    <h2 class="h5 order__box-title">{{ title }}</h2>
    <div class="order__box-information-price-piece">
      <p>{{ pricePiece }}</p>
    </div>
    <span class="text--base font--bold order-description">{{
      description
    }}</span>
    <div class="order__box-input-container">
      <div class="form__group__input order__box-input-ammount-container">
        <label :for="getUniqueId('input')" class="text--base">
          {{ ammountInputLabel }}
        </label>
        <Input
          :id="getUniqueId('input')"
          type="number"
          varian="outline"
          :value="defaultAmmount"
          @keypress="restrictChars($event)"
          v-on:input="inputValue = $event.target.value"
          v-model="inputValue"
          class="order__box-ammount-input input--outline input--base"
          :min="0"
        />
      </div>
      <Select
        class="order__box-input-language-container"
        variant="outline"
        :bare="false"
        size="sm"
        :label="languageLabel"
        :id="getUniqueId('select')"
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
    <Btn
      class="order__box-order-button"
      variant="filled"
      :fullWidth="true"
      :label="buttonLabel"
      @emitClick="addToCart(selectedValue, inputValue)"
    />
    <!-- TODO: Add toast message overlay -->
    <!-- <ToastMessage v-bind="toastMessage" /> -->
  </div>
</template>

<script>
import Btn from '~/components/ch/components/Btn'
import Select from '~/components/ch/components/Select.vue'
import ToastMessage from '~/components/ch/components/ToastMessage'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'OrderBox',
  components: {
    Btn,
    ToastMessage,
    Select,
  },
  data() {
    return {
      orderBoxId: uuidv4(),
      inputValue: this.defaultAmmount,
      selectedValue: this.options.find((option) => option.selected).value,
    }
  },
  props: {
    toastMessage: {
      type: Object,
      required: true,
    },
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
    description: {
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
    pricePiece: {
      type: String,
      required: true,
    },
    languageLabel: {
      type: String,
      required: true,
    },
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
  },
}
</script>
