<template>
  <div class="container container--grid">
    <div v-if="!showConfirmation" class="my-16 container__center--md">
      <h1 class="h1 shopping__cart-title">
        {{ cartTitle }}
      </h1>
      <ul class="accordion">
        <li class="accordion__item">
          <button
            :id="getUniqueId('shopping-cart-drawer-overview-button')"
            class="accordion__button"
            :class="{ active: activeAccordionIndex === 1 }"
            @click="handleAccordionClick(1)"
          >
            <StepIndicator
              :step="1"
              :isConfirmed="step1Confirmed"
              :isActive="activeStepIndex === 1"
            />
            <h2 class="accordion__title">
              {{ cartOverviewTitle }}
            </h2>
            <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
          </button>
          <div
            :id="getUniqueId('shopping-cart-drawer-overview')"
            class="accordion__drawer"
            :class="{ active: activeAccordionIndex === 1 }"
          >
            <div class="shopping__cart-accordion-content">
              <template v-if="card1Shown || card2Shown || card3Shown">
                <div>
                  <ul class="shopping__cart-card-list">
                    <li v-if="card1Shown">
                      <ShoppingCard
                        type="edit"
                        :image="{
                          src: 'images/publication-cover.png',
                          alt: 'publication-cover',
                        }"
                        context="mobile"
                        title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                        itemPrice="Preis pro Stück: CHF 12.00"
                        price="CHF 12.00"
                        removeLabel="Entfernen"
                        editLabel="Editieren"
                        :deleteTriggered="
                          () => {
                            card1Shown = false

                            if (!card2Shown && !card3Shown) {
                              step1Confirmed = false
                              step2Confirmed = false
                            }
                          }
                        "
                      />
                    </li>
                    <li v-if="card2Shown">
                      <ShoppingCard
                        type="edit"
                        title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                        itemPrice="Preis pro Stück: CHF 12.00"
                        price="CHF 12.00"
                        removeLabel="Entfernen"
                        editLabel="Editieren"
                        :deleteTriggered="
                          () => {
                            card2Shown = false

                            if (!card1Shown && !card3Shown) {
                              step1Confirmed = false
                              step2Confirmed = false
                            }
                          }
                        "
                      />
                    </li>
                    <li v-if="card3Shown">
                      <ShoppingCard
                        type="edit"
                        :image="{
                          src: 'images/publication-cover.png',
                          alt: 'publication-cover',
                        }"
                        title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                        itemPrice="Preis pro Stück: CHF 12.00"
                        price="CHF 12.00"
                        removeLabel="Entfernen"
                        editLabel="Editieren"
                        :deleteTriggered="
                          () => {
                            card3Shown = false

                            if (!card1Shown && !card2Shown) {
                              step1Confirmed = false
                              step2Confirmed = false
                            }
                          }
                        "
                      />
                    </li>
                  </ul>
                </div>
                <ShoppingCartTotal
                  title="Provisorischer Bestellwert exkl. MwSt:"
                  total="CHF 36.00"
                  description="Ermässigungen werden gemäss Gebührenverordnung für statistische Dienstleistungen (Art. 19 und 22) gewährt. Ansprüche können im nächsten Schritt unter „Nachricht“ angebracht werden."
                  nextStepLabel="Nächster Schritt"
                  nextStepAriaLabel="Nächster Schritt"
                  @next-step="overviewNextStepClicked"
                />
              </template>
              <template v-else>
                <p class="shopping__cart-empty-text">
                  Es befinden sich keine Produkte im Warenkorb
                </p>
              </template>
            </div>
          </div>
        </li>

        <li class="accordion__item">
          <button
            :id="getUniqueId('shopping-cart-drawer-address-button')"
            class="accordion__button"
            :class="{ active: activeAccordionIndex === 2 }"
            @click="handleAccordionClick(2)"
          >
            <StepIndicator
              :step="2"
              :isConfirmed="step2Confirmed"
              :isActive="activeStepIndex === 2"
            />
            <h2 class="accordion__title">
              {{ cartAddressTitle }}
            </h2>
            <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
          </button>
          <div
            :id="getUniqueId('shopping-cart-drawer-address')"
            class="accordion__drawer"
            :class="{ active: activeAccordionIndex === 2 }"
          >
            <div class="shopping__cart-accordion-content">
              <Notification
                class="shopping__cart-order-form-notification"
                type="hint"
                :closeBtn="false"
                text="Bitte füllen Sie alle Pflichtfelder aus. Diese sind mit mit einem “*” markiert."
              />
              <Form class="shopping__cart-order-form">
                <h3 class="shopping__cart-order-form-invoice-title">
                  Rechnungsaddresse
                </h3>
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
                      placeholder="Name"
                      messageType="error"
                      :value="formInputFields.invoice.lastName.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'lastName',
                            (e.target as HTMLInputElement).value,
                          )
                      "
                      :message="
                        formInputFields.invoice.lastName.touched &&
                        !formInputFields.invoice.lastName.valid
                          ? 'Bitte geben Sie einen Namen an.'
                          : ''
                      "
                    />
                    <Input
                      :required="formInputFields.invoice.firstName.mandatory"
                      label="Vorname"
                      placeholder="Vorname"
                      messageType="error"
                      :value="formInputFields.invoice.firstName.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'firstName',
                            (e.target as HTMLInputElement).value,
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
                      :value="formInputFields.invoice.org.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'org',
                            (e.target as HTMLInputElement).value,
                          )
                      "
                      :message="
                        formInputFields.invoice.org.touched &&
                        !formInputFields.invoice.org.valid
                          ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.street.mandatory"
                      label="Strasse / Nr."
                      placeholder="Strasse & Hausnummer"
                      messageType="error"
                      :value="formInputFields.invoice.street.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'street',
                            (e.target as HTMLInputElement).value,
                          )
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
                      placeholder="Postfach"
                      messageType="error"
                      :value="formInputFields.invoice.postOffice.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'postOffice',
                            (e.target as HTMLInputElement).value,
                          )
                      "
                      :message="
                        formInputFields.invoice.postOffice.touched &&
                        !formInputFields.invoice.postOffice.valid
                          ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.'
                          : ''
                      "
                    />
                    <Input
                      class="shopping__cart-order-form-input-spacing"
                      :required="formInputFields.invoice.zip.mandatory"
                      label="Postleitzahl"
                      placeholder="Postleitzahl"
                      messageType="error"
                      :value="formInputFields.invoice.zip.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'zip',
                            (e.target as HTMLInputElement).value,
                          )
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
                      :value="formInputFields.invoice.city.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'city',
                            (e.target as HTMLInputElement).value,
                          )
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
                        (e) => setFormFieldValue('invoice', 'country', e)
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
                      placeholder="+41 (0)58 555 55 44"
                      messageType="error"
                      :value="formInputFields.invoice.phone.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'phone',
                            (e.target as HTMLInputElement).value,
                          )
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
                      placeholder="E-Mail Addresse"
                      messageType="error"
                      :value="formInputFields.invoice.email.value"
                      :onInput="
                        (e) =>
                          setFormFieldValue(
                            'invoice',
                            'email',
                            (e.target as HTMLInputElement).value,
                          )
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
                          ;(e.target as HTMLInputElement).checked
                            ? (showDeliveryAddress = false)
                            : (showDeliveryAddress = true)
                        }
                      "
                    />
                  </Fieldset>
                </div>

                <div v-if="showDeliveryAddress">
                  <h3 class="shopping__cart-order-form-delivery-address-title">
                    Lieferadresse
                  </h3>
                  <div class="shopping__cart-order-form-container">
                    <div class="shopping__cart-order-form-input-group">
                      <Input
                        :required="formInputFields.delivery.lastName.mandatory"
                        label="Name"
                        placeholder="Name"
                        messageType="error"
                        :value="formInputFields.delivery.lastName.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'lastName',
                              (e.target as HTMLInputElement).value,
                            )
                        "
                        :message="
                          formInputFields.delivery.lastName.touched &&
                          !formInputFields.delivery.lastName.valid
                            ? 'Bitte geben Sie einen Namen an.'
                            : ''
                        "
                      />
                      <Input
                        :required="formInputFields.delivery.firstName.mandatory"
                        label="Vorname"
                        placeholder="Vorname"
                        messageType="error"
                        :value="formInputFields.delivery.firstName.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'firstName',
                              (e.target as HTMLInputElement).value,
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
                        :value="formInputFields.delivery.org.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'org',
                              (e.target as HTMLInputElement).value,
                            )
                        "
                        :message="
                          formInputFields.delivery.org.touched &&
                          !formInputFields.delivery.org.valid
                            ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.'
                            : ''
                        "
                      />
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.street.mandatory"
                        label="Strasse / Nr."
                        placeholder="Strasse  & Hausnummer"
                        messageType="error"
                        :value="formInputFields.delivery.street.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'street',
                              (e.target as HTMLInputElement).value,
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
                        :value="formInputFields.delivery.postOffice.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'postOffice',
                              (e.target as HTMLInputElement).value,
                            )
                        "
                        :message="
                          formInputFields.delivery.postOffice.touched &&
                          !formInputFields.delivery.postOffice.valid
                            ? 'Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.'
                            : ''
                        "
                      />
                      <Input
                        class="shopping__cart-order-form-input-spacing"
                        :required="formInputFields.delivery.zip.mandatory"
                        label="Postleitzahl"
                        placeholder="Postleitzahl"
                        messageType="error"
                        :value="formInputFields.delivery.zip.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'zip',
                              (e.target as HTMLInputElement).value,
                            )
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
                        :value="formInputFields.delivery.city.value"
                        :onInput="
                          (e) =>
                            setFormFieldValue(
                              'delivery',
                              'city',
                              (e.target as HTMLInputElement).value,
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
                          (e) => setFormFieldValue('delivery', 'country', e)
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
                  <Btn
                    class="shopping__cart-button"
                    variant="outline-negative"
                    size="base"
                    label="Nächster Schritt"
                    ariaLabel="Nächster Schritt"
                    :fullWidth="isMobile"
                    @emit-click="checkFormAndSetNextActiveStep"
                  />
                </div>
              </Form>
            </div>
          </div>
        </li>

        <li class="accordion__item">
          <button
            :id="getUniqueId('shopping-cart-drawer-checkout-button')"
            class="accordion__button"
            :class="{ active: activeAccordionIndex === 3 }"
            @click="handleAccordionClick(3)"
          >
            <StepIndicator :step="3" :isActive="activeStepIndex === 3" />
            <h2 class="accordion__title">
              {{ cartCheckoutTitle }}
            </h2>
            <SvgIcon icon="ChevronDown" size="xl" class="accordion__arrow" />
          </button>
          <div
            :id="getUniqueId('shopping-cart-drawer-checkout')"
            class="accordion__drawer"
            :class="{ active: activeAccordionIndex === 3 }"
          >
            <div class="shopping__cart-accordion-content">
              <div class="shopping__cart-order-overview-container">
                <ul class="shopping__cart-card-list">
                  <li>
                    <ShoppingCard
                      type="view"
                      :image="{
                        src: 'images/publication-cover.png',
                        alt: 'publication-cover',
                      }"
                      title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                      itemPrice="Preis pro Stück: CHF 12.00"
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                      :editTriggered="editTriggered"
                    />
                  </li>
                  <li>
                    <ShoppingCard
                      type="view"
                      title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                      itemPrice="Preis pro Stück: CHF 12.00"
                      price="CHF 12.00"
                      removeLabel="Entfernen"
                      editLabel="Editieren"
                      :editTriggered="editTriggered"
                    />
                  </li>
                  <li>
                    <ShoppingCard
                      type="view"
                      :image="{
                        src: 'images/publication-cover.png',
                        alt: 'publication-cover',
                      }"
                      title="Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)"
                      itemPrice="Preis pro Stück: CHF 12.00"
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
                    <Contact
                      address1="Max Mustermann"
                      street="Enikonstrasse 3"
                      zip="6331"
                      city="Hünenberg"
                      country="Schweiz"
                    />
                  </div>
                  <div class="box shopping__cart-delivery-address-container">
                    <h3 class="h3 shopping__cart-summary-box-title">
                      Lieferadresse
                    </h3>
                    <p>Entspricht der Rechnungsaddresse</p>
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
                    @next-step="triggerConfirmation()"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      v-else
      class="container__center--sm shopping__cart-confirmation-container"
    >
      <div class="shopping__cart-confirmation">
        <SvgIcon
          class="shopping__cart-confirmation-badge"
          icon="ConfirmationBadge"
          size="2xl"
        />
        <SvgIcon
          class="shopping__cart-confirmation-checkmark"
          icon="CheckmarkBold"
          size="xl"
        />
      </div>
      <h1 class="h1 shopping__cart-confirmation-title">
        Ihre Bestellung ist bei uns eingetroffen
      </h1>
      <div class="font--bold shopping__cart-confirmation-text">
        <p>Die Bestellung wurde erfolgreich aufgegeben.</p>
        <p>
          Wir werden dir eine E-Mail mit der Bestellbestätigung zukommen lassen.
        </p>
      </div>
      <Btn
        class="shopping__cart-confirmation-action"
        variant="outline-negative"
        size="base"
        label="Zurück"
        ariaLabel="Zurück"
        :fullWidth="isMobile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '../components/Btn.vue'
import ShoppingCard from '../components/ShoppingCard.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Checkbox from './Checkbox.vue'
import Contact from './Contact.vue'
import Fieldset from './Fieldset.vue'
import Form from './Form.vue'
import Input from './Input.vue'
import Notification from './Notification.vue'
import Radio from './Radio.vue'
import Select from './Select.vue'
import ShoppingCartTotal from './ShoppingCartTotal.vue'
import ShoppingCartTotalSummary from './ShoppingCartTotalSummary.vue'
import StepIndicator from './StepIndicator.vue'
import Textarea from './Textarea.vue'
import { reactive, ref, computed, watch, onMounted, nextTick } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const accordionIdMap = {
  1: 'shopping-cart-drawer-overview-button',
  2: 'shopping-cart-drawer-address-button',
  3: 'shopping-cart-drawer-checkout-button',
}
const activeAccordionIndex = ref(1 as keyof typeof accordionIdMap | null)
const activeStepIndex = ref(1)
const step1Confirmed = ref(false)
const step2Confirmed = ref(false)
const card1Shown = ref(true)
const card2Shown = ref(true)
const card3Shown = ref(true)
const switchTimeOut = ref(null as ReturnType<typeof setTimeout> | null)
const shoppingCartId = ref(uuidv4())
const showDeliveryAddress = ref(false)
const showConfirmation = ref(false)
const screenSize = ref(0)
const formInputFields = reactive({
  invoice: {
    gender: {
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
} as Record<
  string,
  Record<
    string,
    { value?: string; touched: boolean; valid: boolean; mandatory: boolean }
  >
>)

defineProps({
  cartTitle: {
    type: String,
    default: () => 'Shopping cart',
  },
  cartOverviewTitle: {
    type: String,
    default: () => 'Shopping cart',
  },
  cartAddressTitle: {
    type: String,
    default: () => 'Billing address & delivery address',
  },
  cartCheckoutTitle: {
    type: String,
    default: () => 'Submit order',
  },
})

const isMobile = computed(() => {
  return screenSize.value < 1024
})

const canContinue = computed(() => {
  const keysToValidate = ['invoice']
  if (showDeliveryAddress.value) {
    keysToValidate.push('delivery')
  }

  return keysToValidate.every((key) => {
    const fields = Object.keys(formInputFields[key])
    return fields.every((field) => {
      return formInputFields[key][field]['valid']
    })
  })
})

const handleAccordionClick = function (index: number) {
  if (!card1Shown.value && !card2Shown.value && !card3Shown.value) {
    return
  }
  if (activeAccordionIndex.value === index) {
    activeAccordionIndex.value = null
  } else if (index === 1 || index === 2 || (index === 3 && canContinue)) {
    activeAccordionIndex.value = index
    activeStepIndex.value = index
    if (index === 2) {
      step1Confirmed.value = true
    }
    if (index === 3) {
      step2Confirmed.value = true
    }
  } else if (index === 3 && !canContinue.value) {
    step2Confirmed.value = false
  }
}

const overviewNextStepClicked = function () {
  activeAccordionIndex.value = 2
  activeStepIndex.value = 2
  step1Confirmed.value = true
}

const triggerConfirmation = async function () {
  showConfirmation.value = true
  await nextTick()
  const scrollTarget = document.getElementById('main-header')

  if (scrollTarget) {
    if (switchTimeOut.value) {
      clearTimeout(switchTimeOut.value)
    }
    switchTimeOut.value = setTimeout(() => {
      scrollTarget.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }
}

const onChange = function (e: Event) {
  setFormFieldValue('invoice', 'gender', (e.target as HTMLInputElement).value)
}

const editTriggered = function () {
  activeAccordionIndex.value = 1
  activeStepIndex.value = 1
}

const getUniqueId = function (text = '') {
  return `${text}-${shoppingCartId.value}`
}

const resizeWindow = function () {
  screenSize.value = document.body.clientWidth
}

const scrollContentIntoView = function (index: keyof typeof accordionIdMap) {
  const scrollTarget = document.getElementById(
    getUniqueId(accordionIdMap[index]),
  )

  if (scrollTarget) {
    if (switchTimeOut.value) {
      clearTimeout(switchTimeOut.value)
    }
    switchTimeOut.value = setTimeout(() => {
      scrollTarget.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }
}

const setFormFieldValue = function (
  type: 'invoice' | 'delivery',
  field: string,
  value: string,
) {
  formInputFields[type][field]['value'] = value
  formInputFields[type][field]['touched'] = true

  if (formInputFields[type][field]['mandatory'] === false) {
    formInputFields[type][field]['valid'] = true
  } else {
    if (
      formInputFields[type][field]['value'] &&
      formInputFields[type][field]['value'].trim() !== ''
    ) {
      formInputFields[type][field]['valid'] = true
    } else {
      formInputFields[type][field]['valid'] = false
    }
  }
}

const validateFields = function () {
  const keys = Object.keys(formInputFields)
  const keysToValidate = ['invoice']
  if (showDeliveryAddress.value) {
    keysToValidate.push('delivery')
  }
  keys.forEach((key) => {
    const fields = Object.keys(formInputFields[key])
    if (keysToValidate.includes(key)) {
      fields.forEach((field) => {
        if (formInputFields[key][field]['mandatory'] === false) {
          formInputFields[key][field]['valid'] = true
        } else {
          if (
            formInputFields[key][field]['value'] &&
            formInputFields[key][field]['value'].trim() !== ''
          ) {
            formInputFields[key][field]['valid'] = true
          } else {
            formInputFields[key][field]['valid'] = false
          }
        }
        formInputFields[key][field]['touched'] = true
      })
    }
  })
}

const checkFormAndSetNextActiveStep = function () {
  validateFields()
  const keysToValidate = ['invoice']
  if (showDeliveryAddress.value) {
    keysToValidate.push('delivery')
  }

  const allFieldsValid = keysToValidate.every((key) => {
    const fields = Object.keys(formInputFields[key])
    return fields.every((field) => {
      return formInputFields[key][field]['valid']
    })
  })
  if (allFieldsValid) {
    activeAccordionIndex.value = 3
    activeStepIndex.value = 3
    step2Confirmed.value = true
  }
}

watch(activeAccordionIndex, function () {
  scrollContentIntoView(activeAccordionIndex.value || 1)
})

onMounted(() => {
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
