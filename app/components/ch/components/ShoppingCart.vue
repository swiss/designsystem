<template>
  <div class="container container--grid">
    <ul v-if="!showConfirmation" class="accordion container__center--md my-16">
      <li class="accordion__item">
        <button
          class="accordion__button"
          :class="{ active: activeIndex === 1 }"
          @click="handleAccordionClick(1)"
        >
          <StepIndicator :step="1" :isConfirmed="activeIndex > 1" />
          <h3 class="accordion__title">{{ cartOverviewTitle }}</h3>
          <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
        </button>
        <div
          class="accordion__drawer"
          :id="getUniqueId('shopping-cart-drawer-overview')"
          :class="{ active: activeIndex === 1 }"
        >
          <div class="shopping__cart-accordion-content">
            <div>
              <ul class="shopping__cart-card-list">
                <li>
                  <ShoppingCard
                    id="1"
                    type="edit"
                    :image="{
                      src: 'images/publication-cover.png',
                      alt: 'publication-cover',
                    }"
                    context="mobile"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 1’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
                <li>
                  <ShoppingCard
                    id="1"
                    type="edit"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 1’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
                <li>
                  <ShoppingCard
                    id="1"
                    type="edit"
                    :image="{
                      src: 'images/publication-cover.png',
                      alt: 'publication-cover',
                    }"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 10’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
              </ul>
            </div>
            <ShoppingCartTotal
              title="Provisorischer Bestellwert exkl. MWSt:"
              total="CHF 3’600.00"
              description="Ermässigungen werden gemäss Gebührenverordnung für statistische
                Dienstleistungen (Art. 19 und 22) gewährt. Ansprüche können im
                Bestellformular unter „Nachricht“ angebracht werden."
              nextStepLabel="Nächster Schritt"
              nextStepAriaLabel="Nächster Schritt"
              @nextStep="activeIndex = 2"
            />
          </div>
        </div>
      </li>

      <li class="accordion__item">
        <button
          class="accordion__button"
          :class="{ active: activeIndex === 2 }"
          @click="handleAccordionClick(2)"
        >
          <StepIndicator :step="2" :isConfirmed="activeIndex > 2" />
          <h3 class="accordion__title">{{ cartAddressTitle }}</h3>
          <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
        </button>
        <div
          class="accordion__drawer"
          :id="getUniqueId('shopping-cart-drawer-address')"
          :class="{ active: activeIndex === 2 }"
        >
          <div class="shopping__cart-accordion-content">
            <Notification
              type="info"
              :closeBtn="false"
              text="Bitte füllen Sie alle Pflichtfelder aus. (Diese sind mit mit einem “*” markiert)"
            />
            <h3 class="shopping__cart-order-form-invoice-title">
              Rechnungsaddresse
            </h3>
            <Form class="shopping__cart-order-form">
              <div>
                <Fieldset
                  variant="outline"
                  size="base"
                  :required="true"
                  legend="Anrede"
                  messageType="error"
                  :message="
                    formInputFields.gender.touched &&
                    !formInputFields.gender.valid
                      ? 'Bitte wählen Sie eine Anrede aus.'
                      : ''
                  "
                >
                  <Radio
                    :required="true"
                    size="base"
                    type="outline"
                    name="radio-gender"
                    value="Frau"
                    label="Frau"
                  />
                  <Radio
                    :required="true"
                    size="base"
                    type="outline"
                    name="radio-gender"
                    value="Herr"
                    label="Herr"
                  />
                </Fieldset>
              </div>

              <div class="shopping__cart-order-form-container">
                <!-- First cells -->
                <div>
                  <Input
                    :required="true"
                    label="Name"
                    placeholder="Nachname"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'lastName', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.lastName.touched &&
                      !formInputFields.invoice.lastName.valid
                        ? 'Bitte geben Sie einen Nachnamen an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Organisation"
                    placeholder="Organisation"
                    messageType="error"
                    :onInput="
                      (e) => setFormFieldValue('invoice', 'org', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.org.touched &&
                      !formInputFields.invoice.org.valid
                        ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Postfach"
                    placeholder="Posteach"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue(
                          'invoice',
                          'postOffice',
                          e.target.value
                        )
                    "
                    :message="
                      formInputFields.invoice.postOffice.touched &&
                      !formInputFields.invoice.postOffice.valid
                        ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Ort"
                    placeholder="Ort"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'city', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.city.touched &&
                      !formInputFields.invoice.city.valid
                        ? 'Bitte geben Sie eine Ortschaft an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Telefon"
                    placeholder="Telefon nummer (+41...)"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'phone', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.phone.touched &&
                      !formInputFields.invoice.phone.valid
                        ? 'Bitte geben Sie eine gültige Telefonnummer an.'
                        : ''
                    "
                  />
                </div>
                <!-- Second cells -->
                <div>
                  <Input
                    :required="true"
                    label="Vorname"
                    placeholder="Vorname"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue(
                          'invoice',
                          'firstName',
                          e.target.value
                        )
                    "
                    :message="
                      formInputFields.invoice.firstName.touched &&
                      !formInputFields.invoice.firstName.valid
                        ? 'Bitte geben Sie einen Vornamen an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Strasse / Nr."
                    placeholder="Strasse & Hausnummer"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'street', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.street.touched &&
                      !formInputFields.invoice.street.valid
                        ? 'Bitte geben Sie eine Strasse und Hausnummer an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Postleitzahl"
                    placeholder="Postleitzahl"
                    messageType="error"
                    :onInput="
                      (e) => setFormFieldValue('invoice', 'zip', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.zip.touched &&
                      !formInputFields.invoice.zip.valid
                        ? 'Bitte geben Sie eine Postleitzahl an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Land"
                    placeholder="Land"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'country', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.country.touched &&
                      !formInputFields.invoice.country.valid
                        ? 'Bitte geben Sie ein Land an.'
                        : ''
                    "
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="E-Mail"
                    placeholder="E-mail Addresse"
                    messageType="error"
                    :onInput="
                      (e) =>
                        setFormFieldValue('invoice', 'email', e.target.value)
                    "
                    :message="
                      formInputFields.invoice.email.touched &&
                      !formInputFields.invoice.email.valid
                        ? 'Bitte geben Sie eine gültige E-Mail Adresse an.'
                        : ''
                    "
                  />
                </div>
              </div>
              <Textarea
                class="shopping__cart-order-form-input-spacing"
                label="Nachricht (Bitte Ermässigungsansprüche hier anbringen)"
                name="order-message"
                placeholder="Erweiterte Details hier angeben"
              />
              <div class="shopping__cart-order-form-fieldset-spacing">
                <Fieldset
                  variant="outline"
                  size="base"
                  :required="false"
                  legend="Lieferadresse"
                >
                  <Checkbox
                    :required="false"
                    size="base"
                    type="outline"
                    name="radio-delivery-address"
                    value="matching delivery address"
                    label="Lieferadresse ist mit Rechnungsadresse identisch."
                    :checked="!showDeliveryAddress"
                    :onChange="
                      (e) => {
                        e.target.checked
                          ? (showDeliveryAddress = false)
                          : (showDeliveryAddress = true)
                      }
                    "
                  />
                </Fieldset>
              </div>

              <div v-if="showDeliveryAddress">
                <h3 class="shopping__cart-order-form-title">Lieferadresse</h3>
                <div class="shopping__cart-order-form-container">
                  <!-- First cells -->
                  <div>
                    <Input
                      :required="true"
                      label="Name"
                      placeholder="Nachname"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'delivery',
                            'lastName',
                            e.target.value
                          )
                      "
                      :message="
                        formInputFields.invoice.lastName.touched &&
                        !formInputFields.invoice.lastName.valid
                          ? 'Bitte geben Sie einen Nachnamen an.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="false"
                      label="Organisation"
                      placeholder="Organisation"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue('delivery', 'org', e.target.value)
                      "
                      :message="
                        formInputFields.invoice.org.touched &&
                        !formInputFields.invoice.org.valid
                          ? 'Bitte überprüfen Sie Ihre Eingabe.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="false"
                      label="Postfach"
                      placeholder="Postfach"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'delivery',
                            'postOffice',
                            e.target.value
                          )
                      "
                      :message="
                        formInputFields.invoice.postOffice.touched &&
                        !formInputFields.invoice.postOffice.valid
                          ? 'Bitte überprüfen Sie Ihre Eingabe.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Ort"
                      placeholder="Ort"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue('delivery', 'city', e.target.value)
                      "
                      :message="
                        formInputFields.invoice.city.touched &&
                        !formInputFields.invoice.city.valid
                          ? 'Bitte geben Sie eine Ortschaft an.'
                          : ''
                      "
                    />
                  </div>
                  <!-- Second cells -->
                  <div>
                    <Input
                      :required="true"
                      label="Vorname"
                      placeholder="Vorname"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'delivery',
                            'firstName',
                            e.target.value
                          )
                      "
                      :message="
                        formInputFields.invoice.firstName.touched &&
                        !formInputFields.invoice.firstName.valid
                          ? 'Bitte geben Sie einen Vornamen an.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Strasse / Nr."
                      placeholder="Strasse  & Hausnummer"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'delivery',
                            'street',
                            e.target.value
                          )
                      "
                      :message="
                        formInputFields.invoice.street.touched &&
                        !formInputFields.invoice.street.valid
                          ? 'Bitte geben Sie eine Strasse und Hausnummer an.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Postleitzahl"
                      placeholder="Postleitzahl"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue('delivery', 'zip', e.target.value)
                      "
                      :message="
                        formInputFields.invoice.zip.touched &&
                        !formInputFields.invoice.zip.valid
                          ? 'Bitte geben Sie eine Postleitzahl an.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Land"
                      placeholder="Land"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'delivery',
                            'country',
                            e.target.value
                          )
                      "
                      :message="
                        formInputFields.invoice.country.touched &&
                        !formInputFields.invoice.country.valid
                          ? 'Bitte geben Sie ein Land an.'
                          : ''
                      "
                    />
                  </div>
                </div>
              </div>

              <div class="shopping__cart-order-form-fieldset-spacing">
                <Fieldset
                  :required="true"
                  variant="outline"
                  size="base"
                  legend="AGB’s"
                >
                  <Checkbox
                    :required="true"
                    size="base"
                    type="outline"
                    name="radio-delivery-address"
                    value="agb accepted"
                    label="Ich bin mit den <a class='link' href='https://www.google.ch'>allgemeinen Geschäftsbedingungen</a> einverstanden."
                  />
                </Fieldset>
              </div>

              <div class="shopping__cart__action-container">
                <btn
                  class="shopping__cart-temporary-button"
                  variant="outline-negative"
                  size="base"
                  label="Nächster Schritt"
                  ariaLabel="Nächster Schritt"
                  @emitClick="checkFormAndSetNextActiveStep"
                  :fullWidth="screenSize < 1024"
                />
              </div>
            </Form>
          </div>
        </div>
      </li>

      <li class="accordion__item">
        <button
          class="accordion__button accordion__button-disabled"
          :class="{ active: activeIndex === 3 }"
        >
          <StepIndicator :step="3" />
          <h3 class="accordion__title">{{ cartCheckoutTitle }}</h3>
          <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
        </button>
        <div
          class="accordion__drawer"
          :id="getUniqueId('shopping-cart-drawer-checkout')"
          :class="{ active: activeIndex === 3 }"
        >
          <div class="shopping__cart-accordion-content">
            <div class="shopping__cart-order-overview-container">
              <ul class="shopping__cart-card-list">
                <li>
                  <ShoppingCard
                    id="1"
                    type="view"
                    :image="{
                      src: 'images/publication-cover.png',
                      alt: 'publication-cover',
                    }"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 1’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
                <li>
                  <ShoppingCard
                    id="1"
                    type="view"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 1’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
                <li>
                  <ShoppingCard
                    id="1"
                    type="view"
                    :image="{
                      src: 'images/publication-cover.png',
                      alt: 'publication-cover',
                    }"
                    title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                    description="Preis pro Stück: CHF 12.00"
                    price="CHF 1’200.00"
                    removeLabel="Entfernen"
                    editLabel="Editieren"
                  />
                </li>
              </ul>
              <div class="shopping__cart-delivery-summary">
                <div class="box">
                  <h3 class="h3 shopping__cart-summary-box-title">
                    Lieferadresse
                  </h3>
                  <Contact
                    address1="Max Mustermann"
                    street="Enikonstrasse 3"
                    zip="6331"
                    city="Hünenberg"
                    country="Schweiz"
                  />
                </div>
                <div class="box shopping__cart-bill-address-container">
                  <h3 class="h3 shopping__cart-summary-box-title">
                    Rechnungsadresse
                  </h3>
                  <p>Entspricht der Lieferadresse</p>
                </div>
                <ShoppingCartTotalSummary
                  title="Gesamtsumme"
                  subTotalTitle="Zwischensumme"
                  subTotal="CHF 3’600.00"
                  totalTitle="Gesamtsumme (exkl. MwSt.)"
                  total="CHF 3’600.00"
                  orderButtonText="Jetzt bestellen"
                  orderButtonAriaLabel="Jetzt bestellen"
                  agreementText="Mit deiner Bestellung erklärst du dich mit unseren <a>Datenschutzbestimmungen</a> und <a>AGB</a> einverstanden."
                  @nextStep="showConfirmation = true"
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="container__center--sm my-60">
      <div class="shopping__cart-confirmation-container">
        <div>
          <div class="shopping__cart-confirmation">
            <SvgIcon
              class="shopping__cart-confirmation-badge"
              icon="ConfirmationBadge"
              size="2xl"
            ></SvgIcon>
            <SvgIcon
              class="shopping__cart-confirmation-checkmark"
              icon="CheckmarkBold"
              size="xl"
            ></SvgIcon>
          </div>
          <h1 class="h1 shopping__cart-confirmation-title">
            Ihre Bestellung ist bei uns eingetroffen
          </h1>
          <div class="font--bold shopping__cart-confirmation-text">
            <p>Die Bestellung wurde erfolgreich aufgegeben.</p>
            <p>
              Wir werden dir eine E-Mail mit der Bestellbestätigung zukommen
              lassen.
            </p>
          </div>
          <btn
            class="shopping__cart-confirmation-action"
            variant="outline-negative"
            size="base"
            label="Zurück zur Übersicht"
            ariaLabel="Zurück zur Übersicht"
            :fullWidth="screenSize < 1024"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '../components/Btn.vue'
import ShoppingCard from '../components/ShoppingCard.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Checkbox from './Checkbox.vue'
import Contact from './Contact.vue'
import Fieldset from './Fieldset.vue'
import Form from './Form.vue'
import Input from './Input.vue'
import Notification from './Notification.vue'
import Radio from './Radio.vue'
import ShoppingCartTotal from './ShoppingCartTotal.vue'
import ShoppingCartTotalSummary from './ShoppingCartTotalSummary.vue'
import StepIndicator from './StepIndicator.vue'
import Textarea from './Textarea'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'ShoppingCart',
  components: {
    SvgIcon,
    btn,
    ShoppingCard,
    StepIndicator,
    Notification,
    Form,
    Fieldset,
    Radio,
    Input,
    Textarea,
    Checkbox,
    Contact,
    ShoppingCartTotal,
    ShoppingCartTotalSummary,
  },
  props: {
    cartOverviewTitle: {
      type: String,
      default: 'Shopping cart',
    },
    cartAddressTitle: {
      type: String,
      default: 'Billing address & delivery address',
    },
    cartCheckoutTitle: {
      type: String,
      default: 'Submit order',
    },
  },
  data() {
    return {
      contentHeight: 0,
      activeIndex: null,
      switchTimeOut: null,
      shoppingCartId: uuidv4(),
      showDeliveryAddress: false,
      showConfirmation: false,
      screenSize: 0,
      formInputFields: {
        gender: {
          value: null,
          touched: false,
          valid: false,
        },
        invoice: {
          firstName: {
            value: '',
            touched: false,
            valid: false,
          },
          lastName: {
            value: '',
            touched: false,
            valid: false,
          },
          org: {
            value: '',
            touched: false,
            valid: false,
          },
          street: {
            value: '',
            touched: false,
            valid: false,
          },
          zip: {
            value: '',
            touched: false,
            valid: false,
          },
          postOffice: {
            value: '',
            touched: false,
            valid: false,
          },
          city: {
            value: '',
            touched: false,
            valid: false,
          },
          country: {
            value: '',
            touched: false,
            valid: false,
          },
          email: {
            value: '',
            touched: false,
            valid: false,
          },
          phone: {
            value: '',
            touched: false,
            valid: false,
          },
        },
        delivery: {
          firstName: {
            value: '',
            touched: false,
            valid: false,
          },
          lastName: {
            value: '',
            touched: false,
            valid: false,
          },
          org: {
            value: '',
            touched: false,
            valid: false,
          },
          street: {
            value: '',
            touched: false,
            valid: false,
          },
          zip: {
            value: '',
            touched: false,
            valid: false,
          },
          postOffice: {
            value: '',
            touched: false,
            valid: false,
          },
          city: {
            value: '',
            touched: false,
            valid: false,
          },
          country: {
            value: '',
            touched: false,
            valid: false,
          },
        },
      },
    }
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
    this.activeIndex = 1
  },
  methods: {
    setContentHeight() {
      if (this.activeIndex === 1) {
        this.contentHeight =
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-overview')
          ).scrollHeight + 'px'
      } else if (this.activeIndex === 2) {
        this.contentHeight =
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-address')
          ).scrollHeight + 'px'
      } else if (this.activeIndex === 3) {
        this.contentHeight =
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-checkout')
          ).scrollHeight + 'px'
      }
    },
    getUniqueId(text = '') {
      return `${text}-${this.shoppingCartId}`
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
    handleAccordionClick(index) {
      this.activeIndex === index
        ? (this.activeIndex = null)
        : (this.activeIndex = index)

      const accordionIdMap = {
        1: 'shopping-cart-drawer-overview',
        2: 'shopping-cart-drawer-address',
        3: 'shopping-cart-drawer-checkout',
      }

      const scroolTarget = document.getElementById(
        this.getUniqueId(accordionIdMap[this.activeIndex])
      )

      if (scroolTarget) {
        if (this.switchTimeOut) {
          clearTimeout(this.switchTimeOut)
        }
        this.switchTimeOut = setTimeout(() => {
          scrollTarget.scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    },
    setFormFieldValue(type, field, value) {
      this.formInputFields[type][field]['value'] = value
      this.formInputFields[type][field]['touched'] = true
      this.validateFields()
    },
    /* TODO: add skip for non mandatory fields */
    validateFields() {
      const keys = Object.keys(this.formInputFields)
      const keysToValidate = ['invoice']
      if (this.showDeliveryAddress) {
        keysToValidate.push('invoice')
      }
      keys.forEach((key) => {
        const fields = Object.keys(this.formInputFields[key])
        if (keysToValidate.includes(key)) {
          fields.forEach((field) => {
            if (
              this.formInputFields[key][field]['value'] &&
              this.formInputFields[key][field]['value'].trim() !== ''
            ) {
              this.formInputFields[key][field]['valid'] = true
            } else {
              this.formInputFields[key][field]['valid'] = false
            }
            this.formInputFields[key][field]['touched'] = true
          })
        }
      })
    },
    checkFormAndSetNextActiveStep() {
      this.validateFields()
      const keysToValidate = ['invoice']
      if (this.showDeliveryAddress) {
        keysToValidate.push('delivery')
      }

      const allFieldsValid = keysToValidate.every((key) => {
        const fields = Object.keys(this.formInputFields[key])
        return fields.every((field) => {
          return this.formInputFields[key][field]['valid']
        })
      })
      if (allFieldsValid) {
        this.activeIndex = 3
      }
    },
  },
  computed: {
    getContentHeigth() {
      if (this.activeIndex === 1) {
        return (
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-overview')
          ).scrollHeight + 'px'
        )
      } else if (this.activeIndex === 2) {
        return (
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-address')
          ).scrollHeight + 'px'
        )
      } else if (this.activeIndex === 3) {
        return (
          document.getElementById(
            this.getUniqueId('shopping-cart-drawer-checkout')
          ).scrollHeight + 'px'
        )
      }
    },
  },
}
</script>
