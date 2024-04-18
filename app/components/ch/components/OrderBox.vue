<template>
  <div class="box">
    <h2 class="h5">{{ title }}</h2>
    <span class="text--base font--bold order-description">{{
      description
    }}</span>
    <div class="order-input-container">
      <div class="form__group__input order-input-ammount-container">
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
          class="order-ammount-input input--outline input--base"
          :min="0"
        />
      </div>
      <div class="form__group__select order-input-language-container">
        <div class="select order-language-selector">
          <select
            variant="outline"
            :bare="false"
            size="sm"
            class="input--outline input--sm"
            @change="selectedValue = $event.target.value"
          >
            <option
              v-for="(option, index) in options"
              :key="`option-${index}`"
              :value="option.value"
              :selected="option.selected"
            >
              {{ option.label }}
            </option>
          </select>
          <div class="select__icon">
            <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <Btn
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
import ToastMessage from '~/components/ch/components/ToastMessage'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'OrderBox',
  components: {
    Btn,
    ToastMessage,
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
