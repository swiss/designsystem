<template>
  <Hero type="default">
    <template v-slot:title>
      Web Mapping Services WMS: Verfügbare Dienste und Daten
    </template>
    <p>
      Das Konzept des INTERLIS Model Repository (Datenmodellablage) sieht vor,
      Datenmodelle als http-Ressource nutzbar zu machen.
      Dabei werden die INTERLIS-Modelldateien auf einem Webserver abgelegt,
      und können beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden.
      Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl.
      weitere importierte Datenmodelle nicht lokal vorhanden sein müssen.
    </p>
  </Hero>
</template>

<script>
import Hero from "~/components/ch/sections/Hero";

export default {
  name: 'HeroDetailSimple',
  components: {
    Hero,
  },
};
</script>
