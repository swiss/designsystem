<template>
  <section class="section bg--secondary-50">
    <div class="container container--grid">
      <div class="container__center--md">
        <h2 class="section__title">Hauptadresse Geoportal</h2>
        <div class="grid grid--responsive-cols-2 gap--responsive">
          <Contact
            title="Geoportal"
            address1="c/o"
            address2="Bundesamt für Landestopografie swisstopo"
            address3="KOGIS (Koordination, Geoinformation und Services )"
            street="Seftigenstrasse 264"
            zip="3084"
            city="Wabern"
            country="CH"
            phone="+41 31 123 45 67"
            fax="+41 31 123 45 67"
            email="info@geo.admin.ch"
            :openingHours="true"
            :contactForm="true"
          />

          <div class="space-y-6">
            <iframe
              name="Interactive Map"
              role="presentation"
              src="https://map.geo.admin.ch/embed.html?topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bafu.wrz-wildruhezonen_portal,ch.swisstopo.swisstlm3d-wanderwege,ch.bav.haltestellen-oev&layers_visibility=false,false,false,true,true&layers_timestamp=18641231,,,,&layers_opacity=1,1,1,0.65,0.7&lang=fr&E=2612569.69&N=1176170.16&zoom=2"
              width="100%"
              height="330"
              frameborder="0"
              style="border: 0"
            />
            <ul class="list list--icon list--loose">
              <li>
                <Btn
                  to="#"
                  label="Standort auf Karte anzeigen"
                  icon="MapMarker"
                  icon-pos="left"
                  variant="link"
                />
              </li>
              <li>
                <Btn
                  to="#"
                  label="Situationsplan in PDF"
                  icon="Map"
                  icon-pos="left"
                  variant="link"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Btn from '../components/Btn.vue'
import Contact from '../components/Contact.vue'
</script>
