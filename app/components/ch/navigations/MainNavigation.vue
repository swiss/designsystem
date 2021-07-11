<template>
  <nav
    :class="mainnavigationClass"
    aria-label="Main navigation"
  >
    <ul>
      <li>
        <a href="#">
          News
        </a>
      </li>
      <li>
        <a
          role="button"
          class="navy__has-children"
        >
          <span>Études</span>
          <SvgIcon icon="ArrowRight" />
        </a>
        <ul>
          <a
            role="button"
            class="navy__back"
          >
            <span>Back</span>
            <SvgIcon icon="ArrowLeft" />
          </a>
          <li><span>Geobasisdaten</span>
            <ul>
              <li><a href="#">Zeitplan</a></li>
              <li><a href="#">Geodatenmodelle</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li>
          <li>
            <span>Verzeichnis</span>
            <ul>
              <li><span>Basisdaten</span>
                <ul>
                  <li><a href="#">Koordinatenreferenzsysteme</a></li>
                  <li><a href="#">Geografische Bezeichnungen</a></li>
                  <li><a href="#">Verwaltungseinheiten</a></li>
                  <li><a href="#">Adressen</a></li>
                </ul>
              </li>
              <li><a href="#">Oberflächendarstellung und -modelle</a></li>
              <li><a href="#">Raum und Bevölkerung</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a
          role="button"
          class="navy__has-children"
        >
          <span>test</span>
          <SvgIcon icon="ArrowRight" />
        </a>
        <ul>
          <a
            role="button"
            class="navy__back"
          >
            <span>Back</span>
            <SvgIcon icon="ArrowLeft" />
          </a>
          <li>
            <a
              role="button"
              class="navy__has-children"
            >
              <span>test</span>
              <SvgIcon icon="ArrowRight" />
            </a>
            <ul>
              <a
                role="button"
                class="navy__back"
              >
                <span>Back</span>
                <SvgIcon icon="ArrowLeft" />
              </a>
              <li><span>test</span>
                <ul>
                  <li>
                    <a
                      role="button"
                      class="navy__has-children"
                    >
                      <span>Études</span>
                      <SvgIcon icon="ArrowRight" />
                    </a>
                    <ul>
                      <a
                        role="button"
                        class="navy__back"
                      >
                        <span>Back</span>
                        <SvgIcon icon="ArrowLeft" />
                      </a>
                      <li><span>Geobasisdaten</span>
                        <ul>
                          <li><a href="#">Zeitplan</a></li>
                          <li><a href="#">Geodatenmodelle</a></li>
                          <li><a href="#">FAQ</a></li>
                        </ul>
                      </li>
                      <li><span>Verzeichnis</span>
                        <ul>
                          <li><span>Basisdaten</span>
                            <ul>
                              <li><a href="#">Koordinatenreferenzsysteme</a></li>
                              <li><a href="#">Geografische Bezeichnungen</a></li>
                              <li><a href="#">Verwaltungseinheiten</a></li>
                              <li><a href="#">Adressen</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Oberflächendarstellung und -modelle</a></li>
                          <li><a href="#">Raum und Bevölkerung</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Geodatenmodelle</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </li>
              <li><span>Verzeichnis</span>
                <ul>
                  <li><span>Basisdaten</span>
                    <ul>
                      <li><a href="#">Koordinatenreferenzsysteme</a></li>
                      <li><a href="#">Geografische Bezeichnungen</a></li>
                      <li><a href="#">Verwaltungseinheiten</a></li>
                      <li><a href="#">Adressen</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Oberflächendarstellung und -modelle</a></li>
                  <li><a href="#">Raum und Bevölkerung</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><span>Verzeichnis</span>
            <ul>
              <li><span>Basisdaten</span>
                <ul>
                  <li><a href="#">Koordinatenreferenzsysteme</a></li>
                  <li><a href="#">Geografische Bezeichnungen</a></li>
                  <li><a href="#">Verwaltungseinheiten</a></li>
                  <li><a href="#">Adressen</a></li>
                </ul>
              </li>
              <li><a href="#">Oberflächendarstellung und -modelle</a></li>
              <li><a href="#">Raum und Bevölkerung</a></li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">
          Karten
        </a>
      </li>
      <li>
        <a href="#">
          Thematische Geoportale
        </a>
      </li>
      <li>
        <a href="#">
          Dienstleistungen
        </a>
      </li>
      <li>
        <a href="#">
          Forschung und Lehre
        </a>
      </li>
      <li>
        <a href="#">
          Über geo.admin.ch
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
export default {
  name: 'MainNavigation',
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
    mainnavigationClass () {
      let base = `main-navigation `
      if (this.context) base += `main-navigation--${this.context} `
      return base
    }
  }
}
</script>