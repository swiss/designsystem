<template>
  <div class="space-y-6">

    <address>
      <strong>{{ title }}</strong><br />
      {{ address1 }}<br />
      {{ address2 }}<br />
      {{ address3 }}<br />
      {{ street }}<br />
      {{ country }} – {{ zip }} {{ city }}<br />
    </address>
    <ul
      v-if="phone || fax || email || contactForm"
      class="list list--icon list--loose"
    >
      <li v-if="phone">
        <Btn
          to="tel: +41 31 123 4567"
          label="Tel. +41 31 123 4567"
          icon="Phone"
          icon-pos="left"
          variant="link"
          aria-label="+41 31 123 4567 Telefonnummer anrufen"
        />
      </li>
      <li v-if="fax">
        <Btn
          to="tel: +41 31 123 4568"
          label="Fax +41 31 123 4568"
          icon="Fax"
          icon-pos="left"
          variant="link"
          aria-label="+41 31 123 4567 Fax senden"
        />
      </li>
      <li v-if="email">
        <Btn
          to="mailto:info@geo.admin.ch"
          label="E-Mail info@geo.admin.ch"
          icon="Envelope"
          icon-pos="left"
          variant="link"
          aria-label="info@geo.admin.ch Open email programm"
        />
      </li>
      <li v-if="contactForm">
        <Btn
          to="#"
          label="Kontaktformular"
          icon="FileLines"
          icon-pos="left"
          variant="link"
        />
      </li>

    </ul>
    <Accordion v-if="openingHours" id="opening-time">

      <AccordionItem
        id="10"
        title="Öffnungszeiten"
        headingLevel="h3"
      >
      <table class="table table--compact">
        <tr> <td>Montag</td>     <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>
        <tr> <td>Dienstag</td>   <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>
        <tr> <td>Mittwoch</td>   <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>
        <tr> <td>Donnerstag</td> <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>
        <tr> <td>Freitag</td>    <td>08:00-12:00</td> <td>Geschlossen</td> </tr>
      </table>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script>

import Accordion from '../components/Accordion.vue'
import AccordionItem from '../components/AccordionItem.vue'
import Btn from '../components/Btn.vue'

export default {
  name: 'Contact',
  components: {
    Accordion,
    AccordionItem,
    Btn,
  },
  props: {
    title: String,
    address1: String,
    address2: String,
    address3: String,
    street: String,
    zip: String,
    city: String,
    country: String,
    phone: String,
    fax: String,
    email: String,
    website: String,
    openingHours: Boolean,
    contactForm: Boolean,
  },
};
</script>
