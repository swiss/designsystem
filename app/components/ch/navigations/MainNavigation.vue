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
          <span>Geodaten</span>
          <SvgIcon icon="ArrowRight" size="lg" />
        </a>
        <ul>
          <li>
            <a role="button" class="navy__back">
              <SvgIcon icon="ArrowLeft" size="lg" />
              <span>Back</span>
            </a>
            <span class="navy__title">Geodaten</span>
            <a href="#">Überblick</a>
          </li>
          <li>
            <a
              role="button"
              class="navy__has-children"
            >
              <span>test level1</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
            <ul>
              <li>
                <a role="button" class="navy__back">
                  <SvgIcon icon="ArrowLeft" size="lg" />
                  <span>Back</span>
                </a>
                <span class="navy__title">test level1</span>
                <a href="#">Überblick</a>
              </li>
              <li>
                <a
                  role="button"
                  class="navy__has-children"
                >
                  <span>test level2</span>
                  <SvgIcon icon="ArrowRight" size="lg" />
                </a>
                <ul>
                  <li>
                    <a role="button" class="navy__back">
                      <SvgIcon icon="ArrowLeft" size="lg" />
                      <span>Back</span>
                    </a>
                    <span class="navy__title">test level2</span>
                    <a href="#">Überblick</a>
                  </li>
                  <li>
                    <a
                      role="button"
                      class="navy__has-children"
                    >
                      <span>test level3</span>
                      <SvgIcon icon="ArrowRight" size="lg" />
                    </a>
                    <ul>
                      <li>
                        <a role="button" class="navy__back">
                          <SvgIcon icon="ArrowLeft" size="lg" />
                          <span>Back</span>
                        </a>
                        <span class="navy__title">test level3</span>
                        <a href="#">Überblick</a>
                      </li>
                      <li>
                        <a
                          role="button"
                          class="navy__has-children"
                        >
                          <span>test level4</span>
                          <SvgIcon icon="ArrowRight" size="lg" />
                        </a>
                        <ul>
                          <li>
                            <a role="button" class="navy__back">
                              <SvgIcon icon="ArrowLeft" size="lg" />
                              <span>Back</span>
                            </a>
                            <span class="navy__title">test level4</span>
                            <a href="#">Überblick</a>
                          </li>
                          <li>
                            <a
                              role="button"
                              class="navy__has-children"
                            >
                              <span>test level5</span>
                              <SvgIcon icon="ArrowRight" size="lg" />
                            </a>
                            <ul>
                              <li>
                                <a role="button" class="navy__back">
                                  <SvgIcon icon="ArrowLeft" size="lg" />
                                  <span>Back</span>
                                </a>
                                <span class="navy__title">test level5</span>
                                <a href="#">Überblick</a>
                              </li>
                              <li>
                                <a
                                  role="button"
                                  class="navy__has-children"
                                >
                                  <span>test level6</span>
                                  <SvgIcon icon="ArrowRight" size="lg" />
                                </a>
                                <ul>
                                  <li>
                                    <a role="button" class="navy__back">
                                      <SvgIcon icon="ArrowLeft" size="lg" />
                                      <span>Back</span>
                                    </a>
                                    <span class="navy__title">test level6</span>
                                    <a href="#">Überblick</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
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
        <a
          role="button"
          class="navy__has-children"
        >
          <span>Dienstleistungen</span>
          <SvgIcon icon="ArrowRight" size="lg" />
        </a>
        <ul>
          <li>
            <a role="button" class="navy__back">
              <SvgIcon icon="ArrowLeft" size="lg" />
              <span>Back</span>
            </a>
            <span class="navy__title">Dienstleistungen</span>
            <a href="#">Überblick</a>
          </li>
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
        <a href="#">
          Forschung und Lehre
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