<template>
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs vertical-spacing">
        <h2 class="h2">Weitere Informationen</h2>

        <Accordion id="100">
          <AccordionItem id="10" title="Medienmitteilungen" headingLevel="h3">
            <h4 class="h5">Title h4</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor
            </p>
            <ul class="list list--default">
              <li>List example</li>
              <li>
                List example with <a href="#" target="_blank">external link</a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem id="11" title="Interviews" headingLevel="h3">
            <Card type="flat">
              <template #title>
                <h4>Flat Card example</h4>
              </template>
              <template #description>
                <p>Digitale Karten und Geoinformation im Unterricht</p>
              </template>
              <template #footerInfo> 22. März 2012 </template>
              <template #footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Mehr anschauen"
                />
              </template>
            </Card>
            <Card type="flat">
              <template #title>
                <h4>Flat Card example</h4>
              </template>
              <template #description>
                <p>Digitale Karten und Geoinformation im Unterricht</p>
              </template>
              <template #footerInfo> 22. März 2012 </template>
              <template #footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Mehr anschauen"
                />
              </template>
            </Card>
            <Card type="flat">
              <template #title>
                Swisstopo Daten sind neu in geo.admin.ch Geo- und
                Downloaddiensten kostenlos...
              </template>
              <template #footerInfo> 22. März 2012 </template>
              <template #footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Mehr anschauen"
                />
              </template>
            </Card>
          </AccordionItem>

          <AccordionItem
            id="12"
            title="Dokumente und Downloads"
            headingLevel="h3"
          >
            <ul class="download-items">
              <li>
                <DownloadItem
                  :filename="'dummy.pdf'"
                  :title="'Information on the usage of websites'"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor."
                  :url="'../../../public/documents/dummy.pdf'"
                  :type="'PDF'"
                  :date="'22.01.2022'"
                />
              </li>
              <li>
                <DownloadItem
                  :filename="'image.png'"
                  :title="'Information on the usage of websites'"
                  description=""
                  :url="'/images/html-structure.png'"
                  :type="'PNG'"
                  :date="'22.01.2022'"
                />
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem id="13" title="Reden" headingLevel="h3">
            <figure>
              <picture>
                <source
                  srcset="https://picsum.photos/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://picsum.photos/1600/1200" alt="cat" />
              </picture>
              <figcaption>
                Datenmodelle als http-Ressource nutzbar zu machen. Der Vorteil
                für einen Benutzer liegt darin, dass die Modelldateien und evtl.
                weitere importierte Datenmodelle nicht lokal vorhanden sein
                müssen —&nbsp;©&nbsp;Photograph Name
              </figcaption>
            </figure>
          </AccordionItem>

          <AccordionItem id="14" title="Parlament" headingLevel="h3">
            AccordionItem Content here
          </AccordionItem>

          <AccordionItem
            id="15"
            title="Gesetze und Verordnungen"
            headingLevel="h3"
          >
            AccordionItem Content here
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Accordion from '../components/Accordion.vue'
import AccordionItem from '../components/AccordionItem.vue'
import Btn from '../components/Btn.vue'
import Card from '../components/Card.vue'
import DownloadItem from '../components/DownloadItem.vue'
</script>
