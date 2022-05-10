<template>
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs vertical-spacing">
        <h2 class="h2">
          Weitere Informationen
        </h2>
        
        <Accordion id="100">
          
          <AccordionItem 
            id="10"
            title="Medienmitteilungen"
            headingLevel="h3"
          >
            <h3 class="h5">Title h3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
            <ul class="list list--default">
              <li>List example</li>
              <li>
                List example with <a href="#" target="_blank">external link</a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem 
            id="11"
            title="Interviews"
            headingLevel="h3"
          >
            <Card type="flat">
              <template v-slot:body>
                <h4 class="h5">Flat Card example</h4>
                <p>Digitale Karten und Geoinformation im Unterricht</p>
              </template>
              <template v-slot:footerInfo>
                22. März 2012
              </template>
              <template v-slot:footerAction>
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
              <template v-slot:body>
                <h4 class="h5">Flat Card example</h4>
                <p>Digitale Karten und Geoinformation im Unterricht</p>
              </template>
              <template v-slot:footerInfo>
                22. März 2012
              </template>
              <template v-slot:footerAction>
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
              <template v-slot:body>
                Swisstopo Daten sind neu in geo.admin.ch Geo- und Downloaddiensten kostenlos...
              </template>
              <template v-slot:footerInfo>
                22. März 2012
              </template>
              <template v-slot:footerAction>
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
            id="11"
            title="Reden"
            headingLevel="h3"
          >
            AccordionItem Content here<br />
            2nd line
          </AccordionItem>

          <AccordionItem 
            id="11"
            title="Dokumente und Downloads"
            headingLevel="h3"
          >
            <ul class="download-items">
              <DownloadItem
                :filename="'dummy.pdf'"
                :title="'Information on the usage of websites'"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor."
                :url="'../../../static/documents/dummy.pdf'"
                :type="'PDF'"
                :date="'22.01.2022'"
              />
              <DownloadItem
                :filename="'image.png'"
                :title="'Information on the usage of websites'"
                description=""
                :url="'../../../static/images/html-structure.png'"
                :type="'PNG'"
                :date="'22.01.2022'"
              />
            </ul>
          </AccordionItem>

          <AccordionItem 
            id="11"
            title="Parlament"
            headingLevel="h3"
          >
            AccordionItem Content here
          </AccordionItem>

          <AccordionItem 
            id="11"
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

<script>
import Card from '../components/Card.vue';
import Btn from '../components/Btn';
import Accordion from '../components/Accordion.vue'
import AccordionItem from '../components/AccordionItem.vue'
import DownloadItem from '../components/DownloadItem.vue'
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'MoreInfosAccordionSection',
  components: {
    Card,
    Btn,
    SvgIcon,
    Accordion,
    AccordionItem,
    DownloadItem
  },
};
</script>
