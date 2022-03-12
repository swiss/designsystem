<template>
  <div 
    :class="computedClasses"
  >
    <swiper
      :speed="500"
      :autoHeight="false"
      :loop="false"
      :slidesPerView="1"
      :spaceBetween="20"
      :breakpoints= "{
        480: {
          slidesPerView: 1,
          spaceBetween: 28
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 36
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 36
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 48
        },
        1800: {
          slidesPerView: 3,
          spaceBetween: 64
        },
      }"
      :keyboard="{
        enabled: true,
        onlyInViewport: false,
      }"
      :navigation="{
        nextEl: `#carousel-next-${id}`,
        prevEl: `#carousel-prev-${id}`
      }"
      :simulateTouch="true"
      :slideToClickedSlide="false"
      :pagination="{
          type: 'bullets',
          el: `#carousel-pagination-${id}`,
          clickable: true,
          bulletElement: 'button',
          bulletClass: 'carousel__bullet',
          bulletActiveClass: 'carousel__bullet--active'
      }"
    >
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=1" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=2" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=3" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=4" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=5" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
      <swiper-slide>
        <Card type="default">
          <template v-slot:image>
            <img src="https://picsum.photos/1024/768?random=6" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
    </swiper>
    <div class="carousel__fonctions">
      <div class="carousel__pagination" :id="`carousel-pagination-${id}`"></div>
      <button
        class="carousel__prev" 
        :id="`carousel-prev-${id}`"
      >
        <div class="sr-only">Previous image</div>
        <SvgIcon
          icon="ChevronLeft"
          role="presentation" 
          aria-hidden="true"
        />
      </button>
      <button 
        class="carousel__next" 
        :id="`carousel-next-${id}`"
      >
        <div class="sr-only">Next image</div>
        <SvgIcon
          icon="ChevronRight"
          role="presentation" 
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

import SvgIcon from '../components/SvgIcon.vue'
import Card from '../components/Card'
import Btn from '../components/Btn'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    SvgIcon,
    Card,
    Btn
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object
    },
  },

  computed: {
    computedClasses () {
      let base = 'carousel carousel--cards'
      return base
    },
  }
}
</script>