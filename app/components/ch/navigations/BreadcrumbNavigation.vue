<template>
  <nav v-if="isSimplePage">
    <ul>
      <li>
        <a href="javascript:void(0)">
          <span>Startseite</span>
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          class="breadcrumb__has-children active"
          aria-current="true"
        >
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Corona</span>
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          class="breadcrumb__has-children active"
          aria-current="true"
        >
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Regeln und Verbote</span>
        </a>
      </li>
    </ul>
  </nav>
  <nav v-else :class="breadcrumbNavigationClass" aria-label="Breadcrumb">
    <ul>
      <li>
        <a href="javascript:alert('homepage')">
          <span>Startseite</span>
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          class="breadcrumb__has-children active"
          aria-current="true"
        >
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Diensleistungen</span>
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__dropdown-icon"
            aria-hidden="true"
          />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>News</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geodaten</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Karten</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geoportale</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:alert('link')"
              class="active"
              aria-current="true"
            >
              <span>Dienstleistungen</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Forschung und Lehre</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Über geo.admin.ch</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Geodienste</span>
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__dropdown-icon"
            aria-hidden="true"
          />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')"
              >Datenmodellablage: Model Repository für Geobasisdaten des
              Bundesrechts</a
            >
          </li>
          <li>
            <a
              href="javascript:alert('link')"
              class="active"
              aria-current="true"
              >Geodienste: Informationen zugänglich machen und vernetzen</a
            >
          </li>
          <li>
            <a href="javascript:alert('link')"
              >Datenbezug: einfach und direkt</a
            >
          </li>
          <li>
            <a href="javascript:alert('link')"
              >Beratung und Koordination: Umsetzen der Strategie</a
            >
          </li>
          <li><a href="javascript:alert('link')">RSS und Social Media</a></li>
        </ul>
      </li>
      <li>
        <a href="#" aria-current="true">
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Darstellungsdienste</span>
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__dropdown-icon"
            aria-hidden="true"
          />
        </a>
        <ul>
          <li><a href="javascript:alert('link')">Download-Dienste</a></li>
          <li>
            <a
              href="javascript:alert('link')"
              class="active"
              aria-current="true"
              >Darstellungsdienste</a
            >
          </li>
          <li>
            <a href="javascript:alert('link')"
              >Linked Data Dienst: GeoDaten semantisch verlinken</a
            >
          </li>
          <li>
            <a href="javascript:alert('link')"
              >Nutzungsbedingungen und Betriebsbestimmungen der Infrastruktur</a
            >
          </li>
          <li><a href="javascript:alert('link')">Suchdienst CSW</a></li>
          <li>
            <a href="javascript:alert('link')"
              >Konformitätsprüfung Geobasisdienste</a
            >
          </li>
          <li><a href="javascript:alert('link')">INSPIRE Dienste</a></li>
        </ul>
      </li>
      <li>
        <a href="#" aria-current="true">
          <SvgIcon
            icon="ChevronRight"
            class="breadcrumb__include-icon"
            aria-hidden="true"
          />
          <span>Web Map Services</span>
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__dropdown-icon"
            aria-hidden="true"
          />
        </a>
        <ul>
          <li>
            <a
              href="javascript:alert('link')"
              class="active"
              aria-current="page"
              >Web Map Services</a
            >
          </li>
          <li><a href="javascript:alert('link')">Web tiling Services</a></li>
          <li><a href="javascript:alert('link')">Vector Tiles Service</a></li>
          <li>
            <a href="javascript:alert('link')">Web Integration: iFrame</a>
          </li>
          <li><a href="javascript:alert('link')">FAQ API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  isSimplePage: {
    type: Boolean,
    default: () => false,
  },
  context: {
    type: String,
    default: () => '',
  },
})

const breadcrumbNavigationClass = computed(() => {
  let base = `breadcrumb-navigation `
  if (props.context) base += `breadcrumb-navigation--${props.context} `
  return base
})
</script>
