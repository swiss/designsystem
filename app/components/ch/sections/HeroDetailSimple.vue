<template>
  <div class="pt-8 pb-32">
    <div class="container--md mx-auto">
      <Hero type="wide">
        <template v-slot:title>
          Datenmodellablage: Model Repository für Geobasisdaten des Bundesrechts
        </template>
        <p class="mt-24">
          Das Konzept des INTERLIS Model Repository (Datenmodellablage) sieht vor,
          Datenmodelle als http-Ressource nutzbar zu machen.
          Dabei werden die INTERLIS-Modelldateien auf einem Webserver abgelegt,
          und können beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden.
          Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl.
          weitere importierte Datenmodelle nicht lokal vorhanden sein müssen.
        </p>

        <h2 class="mt-24">Datenmodellablage ansehen</h2>
        <p>
          Der Modellkatalog kann unter models.geo.admin.ch angesehen werden.
          Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren.
          Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang.
          Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
          Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt.
          Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
        </p>

        <h2 class="mt-24">Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren</h2>
        <p>
          Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei
          und die Modelldokumentation (als PDF Dokument oder als Permalink)
          zur Publikation eingereicht werden.
        </p>
      </Hero>
    </div>
  </div>
</template>

<script>
import Hero from "~/components/ch/components/Hero";

export default {
  name: 'HeroDetailSimple',
  components: {
    Hero,
  },
};
</script>
