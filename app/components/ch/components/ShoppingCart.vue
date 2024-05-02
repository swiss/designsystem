<template>
  <div class="container container--grid">
    <div class="container__center--md my-16" v-if="!showConfirmation">
      <h1 class="h1 shopping__cart-title">{{ cartTitle }}</h1>
      <ul class="accordion">
        <li class="accordion__item">
          <button
            class="accordion__button"
            :class="{ active: activeIndex === 1 }"
            @click="handleAccordionClick(1)"
            :id="getUniqueId('shopping-cart-drawer-overview-button')"
          >
            <StepIndicator
              :step="1"
              :isConfirmed="activeIndex > 1"
              :isActive="activeIndex === 1"
            />
            <h2 class="accordion__title">{{ cartOverviewTitle }}</h2>
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
                      price="CHF 12.00"
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
                      price="CHF 12.00"
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
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                    />
                  </li>
                </ul>
              </div>
              <ShoppingCartTotal
                title="Provisorischer Bestellwert exkl. MWSt:"
                total="CHF 36.00"
                description="Ermässigungen werden gemäss Gebührenverordnung für statistische
                Dienstleistungen (Art. 19 und 22) gewährt. Ansprüche können im
                Bestellformular unter „Nachricht“ angebracht werden."
                nextStepLabel="Nächster Schritt"
                nextStepAriaLabel="Nächster Schritt"
                @nextStep="goToStep(2)"
              />
            </div>
          </div>
        </li>

        <li class="accordion__item">
          <button
            class="accordion__button"
            :class="{ active: activeIndex === 2 }"
            @click="handleAccordionClick(2)"
            :id="getUniqueId('shopping-cart-drawer-address-button')"
          >
            <StepIndicator
              :step="2"
              :isConfirmed="activeIndex > 2"
              :isActive="activeIndex === 2"
            />
            <h2 class="accordion__title">{{ cartAddressTitle }}</h2>
            <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
          </button>
          <div
            class="accordion__drawer"
            :id="getUniqueId('shopping-cart-drawer-address')"
            :class="{ active: activeIndex === 2 }"
          >
            <div class="shopping__cart-accordion-content">
              <Notification
                type="hint"
                :closeBtn="false"
                text="Bitte füllen Sie alle Pflichtfelder aus. Diese sind mit mit einem “*” markiert."
              />
              <h3 class="shopping__cart-order-form-invoice-title">
                Rechnungsaddresse
              </h3>
              <Form class="shopping__cart-order-form">
                <Fieldset
                  variant="outline"
                  size="base"
                  :required="formInputFields.invoice.gender.mandatory"
                  legend="Anrede"
                  messageType="error"
                  :message="
                    formInputFields.invoice.gender.touched &&
                    !formInputFields.invoice.gender.valid
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
                    :onChange="onChange"
                  />
                  <Radio
                    :required="true"
                    size="base"
                    type="outline"
                    name="radio-gender"
                    value="Herr"
                    label="Herr"
                    :onChange="onChange"
                  />
                </Fieldset>

                <div class="shopping__cart-order-form-container">
                  <div class="shopping__cart-order-form-input-group">
                    <Input
                      :required="formInputFields.invoice.lastName.mandatory"
                      label="Name"
                      placeholder="Nachname"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
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
                      :required="formInputFields.invoice.firstName.mandatory"
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
                  </div>

                  <div class="shopping__cart-order-form-input-group">
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.org.mandatory"
                      label="Organisation"
                      placeholder="Organisation"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue('invoice', 'org', e.target.value)
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
                      :required="formInputFields.invoice.street.mandatory"
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
                  </div>
                  <div class="shopping__cart-order-form-input-group">
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.postOffice.mandatory"
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
                      :required="formInputFields.invoice.zip.mandatory"
                      label="Postleitzahl"
                      placeholder="Postleitzahl"
                      messageType="error"
                      :onInput="
                        (e) =>
                          setFormFieldValue('invoice', 'zip', e.target.value)
                      "
                      :message="
                        formInputFields.invoice.zip.touched &&
                        !formInputFields.invoice.zip.valid
                          ? 'Bitte geben Sie eine Postleitzahl an.'
                          : ''
                      "
                    />
                  </div>
                  <div class="shopping__cart-order-form-input-group">
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.city.mandatory"
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
                    <!-- Works also with input -->
                    <Select
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.country.mandatory"
                      variant="outline"
                      size="base"
                      label="Land"
                      messageType="error"
                      :message="
                        formInputFields.invoice.country.touched &&
                        !formInputFields.invoice.country.valid
                          ? 'Bitte geben Sie ein Land an.'
                          : ''
                      "
                      :onSelect="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'country',
                            e.target.value
                          )
                      "
                    >
                      <option selected disabled>Land auswählen</option>
                      <option value="CH">Schweiz</option>
                      <option value="DE">Deutschland</option>
                      <option value="AT">Österreich</option>
                      <option value="FR">Frankreich</option>
                      <option value="IT">Italien</option>
                    </Select>
                  </div>
                  <div class="shopping__cart-order-form-input-group">
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.phone.mandatory"
                      label="Telefon"
                      placeholder="Telefon nummer (+41 (0)58 555 55 44)"
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
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.email.mandatory"
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
                  <Fieldset variant="outline" size="base" :required="false">
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
                    <div class="shopping__cart-order-form-input-group">
                      <Input
                        :required="formInputFields.delivery.lastName.mandatory"
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
                          formInputFields.delivery.lastName.touched &&
                          !formInputFields.delivery.lastName.valid
                            ? 'Bitte geben Sie einen Nachnamen an.'
                            : ''
                        "
                      />
                      <Input
                        :required="formInputFields.delivery.firstName.mandatory"
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
                          formInputFields.delivery.firstName.touched &&
                          !formInputFields.delivery.firstName.valid
                            ? 'Bitte geben Sie einen Vornamen an.'
                            : ''
                        "
                      />
                    </div>
                    <div class="shopping__cart-order-form-input-group">
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.org.mandatory"
                        label="Organisation"
                        placeholder="Organisation"
                        messageType="error"
                        :onInput="
                          (e) =>
                            setFormFieldValue('delivery', 'org', e.target.value)
                        "
                        :message="
                          formInputFields.delivery.org.touched &&
                          !formInputFields.delivery.org.valid
                            ? 'Bitte überprüfen Sie Ihre Eingabe.'
                            : ''
                        "
                      />
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.street.mandatory"
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
                          formInputFields.delivery.street.touched &&
                          !formInputFields.delivery.street.valid
                            ? 'Bitte geben Sie eine Strasse und Hausnummer an.'
                            : ''
                        "
                      />
                    </div>
                    <div class="shopping__cart-order-form-input-group">
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="
                          formInputFields.delivery.postOffice.mandatory
                        "
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
                          formInputFields.delivery.postOffice.touched &&
                          !formInputFields.delivery.postOffice.valid
                            ? 'Bitte überprüfen Sie Ihre Eingabe.'
                            : ''
                        "
                      />
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.zip.mandatory"
                        label="Postleitzahl"
                        placeholder="Postleitzahl"
                        messageType="error"
                        :onInput="
                          (e) =>
                            setFormFieldValue('delivery', 'zip', e.target.value)
                        "
                        :message="
                          formInputFields.delivery.zip.touched &&
                          !formInputFields.delivery.zip.valid
                            ? 'Bitte geben Sie eine Postleitzahl an.'
                            : ''
                        "
                      />
                    </div>
                    <div class="shopping__cart-order-form-input-group">
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.city.mandatory"
                        label="Ort"
                        placeholder="Ort"
                        messageType="error"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'city',
                              e.target.value
                            )
                        "
                        :message="
                          formInputFields.delivery.city.touched &&
                          !formInputFields.delivery.city.valid
                            ? 'Bitte geben Sie eine Ortschaft an.'
                            : ''
                        "
                      />
                      <!-- Works also with input -->
                      <Select
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.country.mandatory"
                        variant="outline"
                        size="base"
                        label="Land"
                        messageType="error"
                        :message="
                          formInputFields.delivery.country.touched &&
                          !formInputFields.delivery.country.valid
                            ? 'Bitte geben Sie ein Land an.'
                            : ''
                        "
                        :onSelect="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'country',
                              e.target.value
                            )
                        "
                      >
                        <option selected disabled>Land auswählen</option>
                        <option value="CH">Schweiz</option>
                        <option value="DE">Deutschland</option>
                        <option value="AT">Österreich</option>
                        <option value="FR">Frankreich</option>
                        <option value="IT">Italien</option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div class="shopping__cart__action-container">
                  <btn
                    class="shopping__cart-button"
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
            class="accordion__button"
            :class="{ active: activeIndex === 3 }"
            @click="handleAccordionClick(3)"
            :id="getUniqueId('shopping-cart-drawer-checkout-button')"
          >
            <StepIndicator :step="3" :isActive="activeIndex === 3" />
            <h2 class="accordion__title">{{ cartCheckoutTitle }}</h2>
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
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                      :editTriggered="editTriggered"
                    />
                  </li>
                  <li>
                    <ShoppingCard
                      id="1"
                      type="view"
                      title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                      description="Preis pro Stück: CHF 12.00"
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                      :editTriggered="editTriggered"
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
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                      :editTriggered="editTriggered"
                    />
                  </li>
                </ul>
                <div class="shopping__cart-delivery-summary">
                  <div class="box">
                    <h3 class="h3 shopping__cart-summary-box-title">
                      Rechnungsadresse
                    </h3>
                    <p>Entspricht der Lieferadresse</p>
                  </div>
                  <div class="box shopping__cart-delivery-address-container">
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
                  <ShoppingCartTotalSummary
                    title="Gesamtsumme"
                    subTotalTitle="Zwischensumme"
                    subTotal="CHF 36.00"
                    totalTitle="Gesamtsumme (exkl. MwSt.)"
                    total="CHF 36.00"
                    orderButtonText="Jetzt bestellen"
                    orderButtonAriaLabel="Jetzt bestellen"
                    agreementText=" Mit Ihrer Bestellung erklären Sie sich mit unseren <a class='link' href='https://www.google.ch'>Datenschutzbestimmungen und AGB </a> einverstanden"
                    @nextStep="triggerConfirmation()"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="container__center--sm my-60">
      <div
        :id="getUniqueId('confirmation-container')"
        class="shopping__cart-confirmation-container"
      >
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
import Select from './Select'
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
    Select,
  },
  props: {
    cartTitle: {
      type: String,
      default: 'Shopping cart',
    },
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
        invoice: {
          gender: {
            value: null,
            touched: false,
            valid: false,
            mandatory: true,
          },
          firstName: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          lastName: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          org: {
            value: '',
            touched: false,
            valid: true,
            mandatory: false,
          },
          street: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          zip: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          postOffice: {
            value: '',
            touched: false,
            valid: true,
            mandatory: false,
          },
          city: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          country: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          email: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          phone: {
            value: '',
            touched: false,
            valid: true,
            mandatory: false,
          },
        },
        delivery: {
          firstName: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          lastName: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          org: {
            value: '',
            touched: false,
            valid: true,
            mandatory: false,
          },
          street: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          zip: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          postOffice: {
            value: '',
            touched: false,
            valid: true,
            mandatory: false,
          },
          city: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
          },
          country: {
            value: '',
            touched: false,
            valid: false,
            mandatory: true,
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
    async triggerConfirmation() {
      this.showConfirmation = true
      await this.$nextTick()
      const scroolTarget = document.getElementById(
        this.getUniqueId('confirmation-container')
      )

      if (scroolTarget) {
        if (this.switchTimeOut) {
          clearTimeout(this.switchTimeOut)
        }
        this.switchTimeOut = setTimeout(() => {
          scroolTarget.scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    },
    onChange(e) {
      this.setFormFieldValue('invoice', 'gender', e.target.value)
    },
    editTriggered() {
      this.activeIndex = 1
      this.scroolContentIntoView(1)
    },
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
      if (index === 3 && !this.canContinue) {
        return
      }
      this.activeIndex === index
        ? (this.activeIndex = null)
        : (this.activeIndex = index)

      if (this.activeIndex) {
        this.scroolContentIntoView(index)
      }
    },
    scroolContentIntoView(index) {
      const accordionIdMap = {
        1: 'shopping-cart-drawer-overview-button',
        2: 'shopping-cart-drawer-address-button',
        3: 'shopping-cart-drawer-checkout-button',
      }

      const scroolTarget = document.getElementById(
        this.getUniqueId(accordionIdMap[index])
      )

      if (scroolTarget) {
        if (this.switchTimeOut) {
          clearTimeout(this.switchTimeOut)
        }
        this.switchTimeOut = setTimeout(() => {
          scroolTarget.scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    },
    goToStep(index) {
      this.activeIndex = index
      this.scroolContentIntoView(index)
    },
    setFormFieldValue(type, field, value) {
      this.formInputFields[type][field]['value'] = value
      this.formInputFields[type][field]['touched'] = true

      if (this.formInputFields[type][field]['mandatory'] === false) {
        this.formInputFields[type][field]['valid'] = true
      } else {
        if (
          this.formInputFields[type][field]['value'] &&
          this.formInputFields[type][field]['value'].trim() !== ''
        ) {
          this.formInputFields[type][field]['valid'] = true
        } else {
          this.formInputFields[type][field]['valid'] = false
        }
      }
    },
    validateFields() {
      const keys = Object.keys(this.formInputFields)
      const keysToValidate = ['invoice']
      if (this.showDeliveryAddress) {
        keysToValidate.push('delivery')
      }
      keys.forEach((key) => {
        const fields = Object.keys(this.formInputFields[key])
        if (keysToValidate.includes(key)) {
          fields.forEach((field) => {
            if (this.formInputFields[key][field]['mandatory'] === false) {
              this.formInputFields[key][field]['valid'] = true
            } else {
              if (
                this.formInputFields[key][field]['value'] &&
                this.formInputFields[key][field]['value'].trim() !== ''
              ) {
                this.formInputFields[key][field]['valid'] = true
              } else {
                this.formInputFields[key][field]['valid'] = false
              }
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
        this.goToStep(3)
      }
    },
  },
  computed: {
    canContinue() {
      const keysToValidate = ['invoice']
      if (this.showDeliveryAddress) {
        keysToValidate.push('delivery')
      }

      return keysToValidate.every((key) => {
        const fields = Object.keys(this.formInputFields[key])
        return fields.every((field) => {
          return this.formInputFields[key][field]['valid']
        })
      })
    },
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
