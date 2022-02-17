<template>
  <section class="section bg--secondary-50">
    <div class="container container--grid">
      <div class="container__center--md">
        <div class="grid grid--responsive-cols-2 gap--responsive">
          <div class="space-y-6">
            <h2 class="section__title">Hauptadresse Geoportal</h2>
            <address>
              <strong>geo.admin.ch</strong><br />
              c/o<br />
              Bundesamt für Landestopografie swisstopo<br />
              KOGIS (Koordination, Geoinformation und Services )<br />
              Seftigenstrasse 264<br />
              CH - 3084 Wabern<br />
            </address>
            <ul class="list list--icon list--loose">
              <li>
                <Btn 
                  to="#"
                  label="Tel. +41 31 123 4567" 
                  icon="Phone" 
                  icon-pos="left" 
                  variant="link" 
                />
              </li>
              <li>
                <Btn 
                  to="#"
                  label="Fax +41 31 123 4567" 
                  icon="Fax" 
                  icon-pos="left" 
                  variant="link" 
                />
              </li>
              <li>
                <Btn 
                  to="#"
                  label="E-Mail info@geo.admin.ch" 
                  icon="Envelope" 
                  icon-pos="left" 
                  variant="link" 
                />
              </li>
              <li>
                <Btn 
                  to="#"
                  label="Kontaktformular" 
                  icon="FileLines" 
                  icon-pos="left" 
                  variant="link" 
                />
              </li>
              
            </ul>
            <Accordion id="2"
              :content='[
                {
                  title: "Öffnungszeiten",
                  content:  "<table class=\"table table--compact\">" +
                            "<tr> <td>Montag</td>     <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>" + 
                            "<tr> <td>Dienstag</td>   <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>" +
                            "<tr> <td>Mittwoch</td>   <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>" +
                            "<tr> <td>Donnerstag</td> <td>08:00-12:00</td> <td>13:00-17:00</td> </tr>" +
                            "<tr> <td>Freitag</td>    <td>08:00-12:00</td> <td>Geschlossen</td> </tr>" +
                            "</table>"
                }
              ]'
            />
          </div>
          <div class="space-y-6">
            <iframe src='https://map.geo.admin.ch/embed.html?topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bafu.wrz-wildruhezonen_portal,ch.swisstopo.swisstlm3d-wanderwege,ch.bav.haltestellen-oev&layers_visibility=false,false,false,true,true&layers_timestamp=18641231,,,,&layers_opacity=1,1,1,0.65,0.7&lang=fr&E=2612569.69&N=1176170.16&zoom=2' width='100%' height='318' frameborder='0' style='border:0'></iframe>
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

<script>
import Btn from "../components/Btn"
import Accordion from "~/components/ch/components/Accordion"

export default {
  name: 'ContactSection',
  components: {
    Btn,
    Accordion
  },
};
</script>
