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
            <div>
              <div class="container--flex font--bold mt-7">
                <h4>Provisorischer Bestellwert exkl. MWSt:</h4>
                <p>CHF 3’600.00</p>
              </div>
              <p class="shopping__card-temporary-description">
                Ermässigungen werden gemäss Gebührenverordnung für statistische
                Dienstleistungen (Art. 19 und 22) gewährt. Ansprüche können im
                Bestellformular unter „Nachricht“ angebracht werden.
              </p>
              <div class="shopping__cart__action-container">
                <btn
                  class="shopping__cart-temporary-button"
                  variant="outline-negative"
                  size="base"
                  label="Nächster Schritt"
                  ariaLabel="Nächster Schritt"
                  @emitClick="activeIndex = 2"
                />
              </div>
            </div>
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
            <Form class="mt-7">
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

              <div class="grid grid-columns-2 gap--responsive mt-4">
                <!-- First cells -->
                <div>
                  <Input :required="true" label="Name" placeholder="Nachname" />
                  <Input
                    class="mt-4"
                    :required="false"
                    label="Organisation"
                    placeholder="Organisation"
                  />
                  <Input
                    class="mt-4"
                    :required="false"
                    label="Postfach"
                    placeholder="Posteach"
                  />
                  <Input
                    class="mt-4"
                    :required="true"
                    label="Ort"
                    placeholder="Ort"
                  />
                  <Input
                    class="mt-4"
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
                    class="mt-4"
                    :required="true"
                    label="Strasse / Nr."
                    placeholder="Strasse  & Hausnummer"
                  />
                  <Input
                    class="mt-4"
                    :required="true"
                    label="Postleitzahl"
                    placeholder="Postleitzahl"
                  />
                  <Input
                    class="mt-4"
                    :required="true"
                    label="Land"
                    placeholder="Land"
                  />
                  <Input
                    class="mt-4"
                    :required="true"
                    label="E-Mail"
                    placeholder="E-mail Addresse"
                  />
                </div>
              </div>
              <div class="mt-4">
                <Textarea
                  label="Nachricht (Bitte Ermässigungsansprüche hier anbringen)"
                  name="order-message"
                  placeholder="Erweiterte Details hier angeben"
                />
              </div>
              <div class="mt-6">
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
                <h3 class="mt-4">Lieferadresse</h3>
                <div class="grid grid-columns-2 gap--responsive mt-4">
                  <!-- First cells -->
                  <div>
                    <Input
                      :required="true"
                      label="Name"
                      placeholder="Nachname"
                    />
                    <Input
                      class="mt-4"
                      :required="false"
                      label="Organisation"
                      placeholder="Organisation"
                    />
                    <Input
                      class="mt-4"
                      :required="false"
                      label="Postfach"
                      placeholder="Posteach"
                    />
                    <Input
                      class="mt-4"
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
                      class="mt-4"
                      :required="true"
                      label="Strasse / Nr."
                      placeholder="Strasse  & Hausnummer"
                    />
                    <Input
                      class="mt-4"
                      :required="true"
                      label="Postleitzahl"
                      placeholder="Postleitzahl"
                    />
                    <Input
                      class="mt-4"
                      :required="true"
                      label="Land"
                      placeholder="Land"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-6">
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
            <div class="grid grid-columns-5 gap--responsive">
              <ul class="shopping__cart-card-list grid-span-3">
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
              <div class="grid-span-2">
                <div class="box">
                  <h3 class="h3">Lieferadresse</h3>
                  <Contact
                    address1="Max Mustermann"
                    street="Enikonstrasse 3"
                    zip="6331"
                    city="Hünenberg"
                    country="Schweiz"
                  />
                </div>
                <div class="box !mt-5">
                  <h3 class="h3">Rechnungsadresse</h3>
                  <p>Entspricht der Lieferadresse</p>
                </div>
                <div class="box !mt-5">
                  <h3 class="h3">Gesamtsumme</h3>
                  <div>
                    <div class="container--flex">
                      <p>Zwischensumme</p>
                      <p class="font--bold">CHF 3’600.00</p>
                    </div>
                    <hr class="separator separator--md" />
                    <div class="container--flex">
                      <p>Gesamtsumme (exkl. MwSt.)</p>
                      <p class="font--bold">CHF 3’600.00</p>
                    </div>
                  </div>
                  <btn
                    class="shopping__cart-temporary-button"
                    variant="outline-negative"
                    size="base"
                    label="Jetzt bestellen"
                    ariaLabel="Jetzt bestellen"
                    :fullWidth="true"
                  />

                  <div class="text--xs shopping__cart-order-agreement">
                    <p>
                      Mit deiner Bestellung erklärst du dich mit unseren
                      <a>Datenschutzbestimmungen</a> und
                      <a>AGB</a> einverstanden.
                    </p>
                  </div>
                </div>
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
    }
  },
  mounted() {
    this.activeIndex = 1
  },
  methods: {
    getUniqueId(text = '') {
      return `${text}-${this.shoppingCartId}`
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
