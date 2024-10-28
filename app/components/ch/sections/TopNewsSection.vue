<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <h2 class="section__title">Aktuell</h2>
      <div class="grid grid--items-5 gap--responsive">
        <Card type="default">
          <template #metaInfos>
            <MetaInfo :metainfos="['Veranstaltung']" />
          </template>
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=28"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=28"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=28"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=28"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=28"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=28"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>Geo.Hackmin</h3>
          </template>
          <template #description>
            <p>
              Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen
              wollten? Wollten Sie schon immer ein Problem mit Hilfe von Karten
              und Luftbildern lösen?
            </p>
          </template>
          <template #eventInfos>
            <ul class="flex flex-wrap">
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="Calendar" size="xl" class="-ml-1.5 mr-1" />
                <div>10-12 Mai 2022</div>
              </li>
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="Clock" size="xl" class="-ml-1.5 mr-1" />
                <div>9 bis 11 Uhr</div>
              </li>
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="MapMarker" size="xl" class="-ml-1.5 mr-1" />
                <div>Zürich</div>
              </li>
            </ul>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #metaInfos>
            <MetaInfo :metainfos="['Dienstleistungen']" />
          </template>
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=18"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=18"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=18"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=18"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=18"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=18"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>
              Daten und Dienste online kostenlos als Open Government Data (OGD)
            </h3>
          </template>
          <template #description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et ac-cusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #metaInfos>
            <MetaInfo :metainfos="['Dossier']" />
          </template>
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=10"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=10"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=10"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=10"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=10"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=10"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>
              Daten und Dienste online kostenlos als Open Government Data (OGD)
            </h3>
          </template>
          <template #description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et ac-cusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #metaInfos>
            <MetaInfo :metainfos="['Bericht']" />
          </template>
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=25"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=25"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=25"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=25"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=25"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=25"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>Jahresabschlussbericht zu Covid-Massnahmen 2022</h3>
          </template>
          <template #description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et ac-cusam et justo
              duo dolores et ea rebum.
            </p>
          </template>
          <template #contentIcons>
            <div class="card__content-icons">
              <SvgIcon icon="Youtube" size="xl" />
            </div>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #metaInfos>
            <MetaInfo :metainfos="['Studie']" />
          </template>
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=11"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=11"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=11"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=11"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=11"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=11"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>Auswirkungen von Corona auf die Schweizer Gesellschaft</h3>
          </template>
          <template #description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et ac-cusam et justo
              duo dolores et ea rebum.
            </p>
          </template>
          <template #specifications>
            <MetaInfo :metainfos="['PDF', '2.2Mb', '102 Seiten']" />
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </div>
      <div class="section__action">
        <Btn
          to="#"
          label="Alle Aktualitäten ansehen"
          variant="bare"
          icon-pos="right"
          icon="ArrowRight"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from '../components/MetaInfo.vue'
</script>
