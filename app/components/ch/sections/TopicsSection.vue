<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <h2 class="section__title">Schwerpunktthemen</h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
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
            <h3>Dossier 1</h3>
          </template>
          <template #description>
            <p>
              At vero eos et ac-cusam et justo duo, sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 1"
            />
          </template>
        </Card>
        <Card type="default">
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
            <h3>Dossier 2</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sadipscing elitr, sed diam. At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 2"
            />
          </template>
        </Card>
        <Card type="default">
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=19"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=19"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=19"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=19"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=19"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=19"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>Dossier 3</h3>
          </template>
          <template #description>
            <p>
              Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam At
              vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita
              kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 3"
            />
          </template>
        </Card>
      </div>
      <div v-if="isHomePage" class="section__action">
        <Btn
          to="#"
          label="Alle Schwerpunktthemen ansehen"
          variant="bare"
          icon-pos="right"
          icon="ArrowRight"
        />
      </div>
    </div>
    <div class="container">
      <h2 class="section__title">Andere Themen</h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
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
            <h3>Dossier 1</h3>
          </template>
          <template #description>
            <p>
              At vero eos et ac-cusam et justo duo, sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 1"
            />
          </template>
        </Card>
        <Card type="default">
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
            <h3>Dossier 2</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sadipscing elitr, sed diam. At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 2"
            />
          </template>
        </Card>
        <Card type="default">
          <template #image>
            <picture>
              <source
                srcset="https://picsum.photos/760/428/?image=19"
                width="760"
                height="428"
                media="(min-width: 1544px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=19"
                width="720"
                height="405"
                media="(min-width: 1280px)"
              />
              <source
                srcset="https://picsum.photos/600/338/?image=19"
                width="600"
                height="338"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/460/259/?image=19"
                width="460"
                height="259"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/720/405/?image=19"
                width="720"
                height="405"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=19"
                with="480"
                height="248"
                alt="image name"
              />
            </picture>
          </template>
          <template #title>
            <h3>Dossier 3</h3>
          </template>
          <template #description>
            <p>
              Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam At
              vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita
              kasd gubergren.
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Dossier 3"
            />
          </template>
        </Card>
      </div>
      <div v-if="isHomePage" class="section__action">
        <Btn
          to="#"
          label="Alle Schwerpunktthemen ansehen"
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

defineProps({
  isHomePage: {
    type: Boolean,
    default: () => false,
  },
})
</script>
