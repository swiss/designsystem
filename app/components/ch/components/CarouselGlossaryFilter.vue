<template>
  <div class="carousel-badge-filter" :id="id">
    <div class="carousel">
      <swiper
        :speed="500"
        :autoHeight="false"
        :loop="false"
        :spaceBetween="10"
        slidesPerView="auto"
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
      >
        <swiper-slide>
          <badge
            label="Alle"
            size="base"
            :color="activeFilter === 'all' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('all')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="0-9"
            size="base"
            :color="activeFilter === 'numbric' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('numbric')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="A"
            size="base"
            :color="activeFilter === 'a' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('a')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="B"
            size="base"
            :color="activeFilter === 'b' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('b')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="C"
            size="base"
            :color="activeFilter === 'c' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('c')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="D"
            size="base"
            :color="activeFilter === 'd' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('d')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="E"
            size="base"
            :color="activeFilter === 'e' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('e')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="F"
            size="base"
            :color="activeFilter === 'f' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('f')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="G"
            size="base"
            :color="activeFilter === 'g' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('g')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="H"
            size="base"
            :color="activeFilter === 'h' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('h')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="I"
            size="base"
            :color="activeFilter === 'i' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('i')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="J"
            size="base"
            :color="activeFilter === 'j' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('j')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="K"
            size="base"
            :color="activeFilter === 'k' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('k')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="L"
            size="base"
            :color="activeFilter === 'l' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('l')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="M"
            size="base"
            :color="activeFilter === 'm' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('m')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="N"
            size="base"
            :color="activeFilter === 'n' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('n')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="O"
            size="base"
            :color="activeFilter === 'o' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('o')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="P"
            size="base"
            :color="activeFilter === 'p' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('p')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Q"
            size="base"
            :color="activeFilter === 'q' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('q')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="R"
            size="base"
            :color="activeFilter === 'r' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('r')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="S"
            size="base"
            :color="activeFilter === 's' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('s')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="T"
            size="base"
            :color="activeFilter === 't' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('t')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="U"
            size="base"
            :color="activeFilter === 'u' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('u')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="V"
            size="base"
            :color="activeFilter === 'v' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('v')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="W"
            size="base"
            :color="activeFilter === 'w' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('w')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="X"
            size="base"
            :color="activeFilter === 'x' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('x')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Y"
            size="base"
            :color="activeFilter === 'y' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('y')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Z"
            size="base"
            :color="activeFilter === 'z' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('z')"
          />
        </swiper-slide>
      </swiper>
      <div class="carousel__fonctions">
        <button class="carousel__prev" :id="`carousel-prev-${id}`">
          <div class="sr-only">Vorheriger Filter</div>
          <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
        </button>
        <button class="carousel__next" :id="`carousel-next-${id}`">
          <div class="sr-only">Nächster Filter</div>
          <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperCore, SwiperSlide } from 'swiper-vue2'
import badge from '../components/Badge.vue'
import SvgIcon from '../components/SvgIcon.vue'
const { v4: uuidv4 } = require('uuid')

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'CarouselGlossaryFilter',
  components: { SvgIcon, Swiper, SwiperSlide, badge },
  data() {
    return {
      carouselId: uuidv4(),
    }
  },
  props: {
    id: {
      type: String,
      default: 1,
    },
    badgeClicked: {
      type: Function,
      default: () => {},
    },
    activeFilter: {
      type: String,
      default: 'all',
    },
  },
  methods: {},
}
</script>
