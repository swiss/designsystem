<template>
  <div class="section section--default">
    <div class="container">
      <h2 class="section__title">Medienmitteilungen</h2>
      <div :class="computedClasses">
        <Swiper
          :speed="500"
          :autoHeight="false"
          :loop="false"
          :slidesPerView="1"
          :spaceBetween="20"
          :breakpoints="{
            480: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 36,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 48,
            },
            1800: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 64,
            },
          }"
          :modules="[Navigation, Pagination, A11y]"
          :keyboard="{
            enabled: true,
            onlyInViewport: false,
          }"
          :navigation="{
            nextEl: `#carousel-next-${id}`,
            prevEl: `#carousel-prev-${id}`,
          }"
          :simulateTouch="true"
          :slideToClickedSlide="false"
          :pagination="{
            type: 'bullets',
            el: `#carousel-pagination-${id}`,
            clickable: true,
            bulletClass: 'carousel__bullet',
            bulletActiveClass: 'carousel__bullet--active',
          }"
        >
          <SwiperSlide>
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo :metainfos="['Aktualisiert am 10. Februar 23']" />
              </template>
              <template #title>
                <h3>
                  Rückerstattungsaktion der US-amerikanischen
                  Konsumentenschutzbehörde
                </h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et
                </p>
              </template>
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
          </SwiperSlide>
          <SwiperSlide>
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo :metainfos="['18. Mai 23']" />
              </template>
              <template #title>
                <h3>Hier kommt der Titel der Medienmitteilungen</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et
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
                  label="Mehr anschauen"
                />
              </template>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo :metainfos="['18. März 23']" />
              </template>
              <template #image>
                <picture>
                  <source
                    srcset="https://picsum.photos/760/428/?image=17"
                    width="760"
                    height="428"
                    media="(min-width: 1544px)"
                  />
                  <source
                    srcset="https://picsum.photos/720/405/?image=17"
                    width="720"
                    height="405"
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcset="https://picsum.photos/600/338/?image=17"
                    width="600"
                    height="338"
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcset="https://picsum.photos/460/259/?image=17"
                    width="460"
                    height="259"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="https://picsum.photos/720/405/?image=17"
                    width="720"
                    height="405"
                    media="(min-width: 480px)"
                  />
                  <img
                    src="https://picsum.photos/480/270/?image=17"
                    with="480"
                    height="248"
                    alt="image name"
                  />
                </picture>
              </template>
              <template #title>
                <h3>
                  Hier kommt der Titel der Medien&shy;mitteilungen und so weiter
                </h3>
              </template>
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
          </SwiperSlide>
          <SwiperSlide>
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo :metainfos="['10. Februar 23']" />
              </template>
              <template #title>
                <h3>
                  Rückerstattungsaktion der US-amerikanischen
                  Konsumentenschutzbehörde
                </h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et
                </p>
              </template>
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
          </SwiperSlide>
          <SwiperSlide>
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo :metainfos="['18. Mai 23']" />
              </template>
              <template #title>
                <h3>Hier kommt der Titel der Medienmitteilungen</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et
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
                  label="Mehr anschauen"
                />
              </template>
            </Card>
          </SwiperSlide>
        </Swiper>
        <div class="carousel__fonctions">
          <div :id="`carousel-pagination-${id}`" class="carousel__pagination" />
          <button :id="`carousel-prev-${id}`" class="carousel__prev">
            <div class="sr-only">Previous image</div>
            <SvgIcon
              icon="ChevronLeft"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button :id="`carousel-next-${id}`" class="carousel__next">
            <div class="sr-only">Next image</div>
            <SvgIcon
              icon="ChevronRight"
              role="presentation"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import MetaInfo from '../components/MetaInfo.vue'
import { computed } from 'vue'

defineProps({
  id: {
    type: Number,
    default: () => 8463,
  },
  breakpoints: {
    type: Object,
    default: () => undefined,
  },
})

const computedClasses = computed(() => {
  const base = 'carousel carousel--cards'
  return base
})
</script>
