<template>
  <Hero type="2-cols">
    <template v-slot:title>
      Web Mapping Services WMS: Verfügbare Dienste und Daten
    </template>
    Das Konzept des INTERLIS Model Repository (Datenmodellablage) sieht vor,
    Datenmodelle als http-Ressource nutzbar zu machen.
    Dabei werden die INTERLIS-Modelldateien auf einem Webserver abgelegt,
    und können beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden.
    Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl.
    weitere importierte Datenmodelle nicht lokal vorhanden sein müssen.
    <template v-slot:image>
      <source srcset="https://placekitten.com/g/1060/520"
              media="(min-width: 800px)">
      <img src="https://placekitten.com/g/800/400" alt="cat">
    </template>
  </Hero>
</template>

<script>
import Hero from "~/components/ch/sections/Hero";

export default {
  name: 'HeroDetailComplex',
  components: {
    Hero,
  },
};
</script>
