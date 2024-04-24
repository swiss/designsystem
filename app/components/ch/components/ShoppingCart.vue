<template>
  <div class="container container--grid">
    <ul v-if="!showConfirmation" class="accordion container__center--md my-16">
      <li class="accordion__item">
        <button
          class="accordion__button accordion__button-disabled"
          :class="{ active: activeIndex === 1 }"
        >
          <StepIndicator :step="1" :isConfirmed="activeIndex > 1" />
          <h3 class="accordion__title">{{ cartOverviewTitle }}</h3>
          <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
        </button>
        <div
          class="accordion__drawer"
          :id="getUniqueId('shopping-cart-drawer-overview')"
          :style="{ maxHeight: activeIndex === 1 ? getContentHeigth : null }"
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
                    price="CHF 1’200.00"
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
          class="accordion__button accordion__button-disabled"
          :class="{ active: activeIndex === 2 }"
        >
          <StepIndicator :step="2" :isConfirmed="activeIndex > 2" />
          <h3 class="accordion__title">{{ cartAddressTitle }}</h3>
          <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
        </button>
        <div
          class="accordion__drawer"
          :id="getUniqueId('shopping-cart-drawer-address')"
          :style="{ maxHeight: activeIndex === 2 ? getContentHeigth : null }"
        >
          <div class="shopping__cart-accordion-content">
            <Notification
              type="info"
              :closeBtn="false"
              text="Bitte füllen Sie alle Pflichtfelder aus. (Diese sind mit mit einem “*” markiert)"
            />
            <Form class="shopping__cart-order-form">
              <div>
                <Fieldset
                  variant="outline"
                  size="base"
                  :required="true"
                  legend="Anrede"
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
                  <Input :required="true" label="Name" placeholder="Nachname" />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Organisation"
                    placeholder="Organisation"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Postfach"
                    placeholder="Posteach"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Ort"
                    placeholder="Ort"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="false"
                    label="Telefon"
                    placeholder="Telefon nummer (+41...)"
                  />
                </div>
                <!-- Second cells -->
                <div>
                  <Input
                    :required="true"
                    label="Vorname"
                    placeholder="Vorname"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Strasse / Nr."
                    placeholder="Strasse  & Hausnummer"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Postleitzahl"
                    placeholder="Postleitzahl"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="Land"
                    placeholder="Land"
                  />
                  <Input
                    class="shopping__cart-order-form-input-spacing"
                    :required="true"
                    label="E-Mail"
                    placeholder="E-mail Addresse"
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
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="false"
                      label="Organisation"
                      placeholder="Organisation"
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="false"
                      label="Postfach"
                      placeholder="Posteach"
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Ort"
                      placeholder="Ort"
                    />
                  </div>
                  <!-- Second cells -->
                  <div>
                    <Input
                      :required="true"
                      label="Vorname"
                      placeholder="Vorname"
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Strasse / Nr."
                      placeholder="Strasse  & Hausnummer"
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Postleitzahl"
                      placeholder="Postleitzahl"
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="true"
                      label="Land"
                      placeholder="Land"
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
                  @emitClick="activeIndex = 3"
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
          :style="{ maxHeight: activeIndex === 3 ? getContentHeigth : null }"
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
      activeIndex: null,
      shoppingCartId: uuidv4(),
      showDeliveryAddress: true,
      showConfirmation: false,
      screenSize: 0,
    }
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
    this.activeIndex = 1
  },
  methods: {
    getUniqueId(text = '') {
      return `${text}-${this.shoppingCartId}`
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
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
