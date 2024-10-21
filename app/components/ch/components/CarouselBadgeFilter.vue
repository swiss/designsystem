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
        :modules="[Navigation, Pagination, A11y]"
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
            :disabled="disabledFilters.includes('all')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="0-9"
            size="base"
            :color="activeFilter === 'numbric' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('numbric')"
            :disabled="disabledFilters.includes('numbric')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="A"
            size="base"
            :color="activeFilter === 'a' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('a')"
            :disabled="disabledFilters.includes('a')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="B"
            size="base"
            :color="activeFilter === 'b' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('b')"
            :disabled="disabledFilters.includes('b')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="C"
            size="base"
            :color="activeFilter === 'c' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('c')"
            :disabled="disabledFilters.includes('c')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="D"
            size="base"
            :color="activeFilter === 'd' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('d')"
            :disabled="disabledFilters.includes('d')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="E"
            size="base"
            :color="activeFilter === 'e' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('e')"
            :disabled="disabledFilters.includes('e')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="F"
            size="base"
            :color="activeFilter === 'f' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('f')"
            :disabled="disabledFilters.includes('f')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="G"
            size="base"
            :color="activeFilter === 'g' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('g')"
            :disabled="disabledFilters.includes('g')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="H"
            size="base"
            :color="activeFilter === 'h' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('h')"
            :disabled="disabledFilters.includes('h')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="I"
            size="base"
            :color="activeFilter === 'i' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('i')"
            :disabled="disabledFilters.includes('i')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="J"
            size="base"
            :color="activeFilter === 'j' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('j')"
            :disabled="disabledFilters.includes('j')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="K"
            size="base"
            :color="activeFilter === 'k' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('k')"
            :disabled="disabledFilters.includes('k')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="L"
            size="base"
            :color="activeFilter === 'l' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('l')"
            :disabled="disabledFilters.includes('l')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="M"
            size="base"
            :color="activeFilter === 'm' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('m')"
            :disabled="disabledFilters.includes('m')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="N"
            size="base"
            :color="activeFilter === 'n' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('n')"
            :disabled="disabledFilters.includes('n')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="O"
            size="base"
            :color="activeFilter === 'o' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('o')"
            :disabled="disabledFilters.includes('o')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="P"
            size="base"
            :color="activeFilter === 'p' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('p')"
            :disabled="disabledFilters.includes('p')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Q"
            size="base"
            :color="activeFilter === 'q' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('q')"
            :disabled="disabledFilters.includes('q')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="R"
            size="base"
            :color="activeFilter === 'r' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('r')"
            :disabled="disabledFilters.includes('r')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="S"
            size="base"
            :color="activeFilter === 's' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('s')"
            :disabled="disabledFilters.includes('s')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="T"
            size="base"
            :color="activeFilter === 't' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('t')"
            :disabled="disabledFilters.includes('t')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="U"
            size="base"
            :color="activeFilter === 'u' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('u')"
            :disabled="disabledFilters.includes('u')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="V"
            size="base"
            :color="activeFilter === 'v' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('v')"
            :disabled="disabledFilters.includes('v')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="W"
            size="base"
            :color="activeFilter === 'w' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('w')"
            :disabled="disabledFilters.includes('w')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="X"
            size="base"
            :color="activeFilter === 'x' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('x')"
            :disabled="disabledFilters.includes('x')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Y"
            size="base"
            :color="activeFilter === 'y' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('y')"
            :disabled="disabledFilters.includes('y')"
          />
        </swiper-slide>
        <swiper-slide>
          <badge
            label="Z"
            size="base"
            :color="activeFilter === 'z' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('z')"
            :disabled="disabledFilters.includes('z')"
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

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import badge from '../components/Badge.vue'
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
  id: {
    type: String,
    default: () => 1,
  },
  badgeClicked: {
    type: Function,
    default: () => {},
  },
  activeFilter: {
    type: String,
    default: () => 'all',
  },
  disabledFilters: {
    type: Array,
    default: () => [],
  },
})
</script>
