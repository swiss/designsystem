<template>
  <nav
    :class="metanavigationClass"
    aria-label="Meta navigation"
  >
    <ul>
      <li>
        <a href="#" class="meta-navigation__item">
          <span>
            Leichte Sprache
          </span>
          <SvgIcon
            icon="EasyLanguage"
            size="lg"
          />
        </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item">
          <span>
            Gebärden Sprache
          </span>
          <SvgIcon
            icon="SignLanguage"
            size="lg"
          />
        </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item">
        Jobs
      </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item">
          Kontakt
        </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item">
          Medien
        </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__more">
          <span>
           Mehr
          </span>
          <SvgIcon
            icon="MoreFilled"
            size="md"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'MetaNavigation',
  components: {
    SvgIcon
  },
  props: {
    context: {
      type: String,
      required: true,
      validator: (prop) => [
        'desktop',
        'mobile'
      ].includes(prop)
    }
  },
  computed: {
    metanavigationClass () {
      let base = `meta-navigation `
      if (this.context) base += `meta-navigation--${this.context} `
      return base
    }
  }
}
</script>