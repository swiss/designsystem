<template>
  <nav
    :class="mainnavigationClass"
    aria-label="Main navigation"
  >
    <ul>
      <li>
        <a href="javascript:alert('link')">
          <span>News</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" role="button" class="navy__has-children">
          <span>Geodaten</span>
          <SvgIcon icon="ArrowRight" size="lg" />
        </a>
        <ul>
          <li>
            <a href="javascript:void(0)" role="button" class="navy__back">
              <SvgIcon icon="ArrowLeft" size="lg" />
              <span>Back</span>
            </a>
            <span class="navy__title">Geodaten</span>
            <a href="javascript:alert('link')">Überblick</a>
          </li>
          <li>
            <a href="javascript:void(0)" role="button" class="navy__has-children">
              <span>test level1</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
            <ul>
              <li>
                <a href="javascript:void(0)" role="button" class="navy__back">
                  <SvgIcon icon="ArrowLeft" size="lg" />
                  <span>Back</span>
                </a>
                <span class="navy__title">test level1</span>
                <a href="javascript:alert('link')">Überblick</a>
              </li>
              <li>
                <a href="javascript:void(0)" role="button" class="navy__has-children">
                  <span>test level2</span>
                  <SvgIcon icon="ArrowRight" size="lg" />
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)" role="button" class="navy__back">
                      <SvgIcon icon="ArrowLeft" size="lg" />
                      <span>Back</span>
                    </a>
                    <span class="navy__title">test level2</span>
                    <a href="javascript:alert('link')">Überblick</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" role="button" class="navy__has-children">
                      <span>test level3</span>
                      <SvgIcon icon="ArrowRight" size="lg" />
                    </a>
                    <ul>
                      <li>
                        <a href="javascript:void(0)" role="button" class="navy__back">
                          <SvgIcon icon="ArrowLeft" size="lg" />
                          <span>Back</span>
                        </a>
                        <span class="navy__title">test level3</span>
                        <a href="javascript:alert('link')">Überblick</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" role="button" class="navy__has-children">
                          <span>test level4</span>
                          <SvgIcon icon="ArrowRight" size="lg" />
                        </a>
                        <ul>
                          <li>
                            <a href="javascript:void(0)" role="button" class="navy__back">
                              <SvgIcon icon="ArrowLeft" size="lg" />
                              <span>Back</span>
                            </a>
                            <span class="navy__title">test level4</span>
                            <a href="javascript:alert('link')">Überblick</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" role="button" class="navy__has-children">
                              <span>test level5</span>
                              <SvgIcon icon="ArrowRight" size="lg" />
                            </a>
                            <ul>
                              <li>
                                <a href="javascript:void(0)" role="button" class="navy__back">
                                  <SvgIcon icon="ArrowLeft" size="lg" />
                                  <span>Back</span>
                                </a>
                                <span class="navy__title">test level5</span>
                                <a href="javascript:alert('link')">Überblick</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)" role="button" class="navy__has-children">
                                  <span>test level6</span>
                                  <SvgIcon icon="ArrowRight" size="lg" />
                                </a>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0)" role="button" class="navy__back">
                                      <SvgIcon icon="ArrowLeft" size="lg" />
                                      <span>Back</span>
                                    </a>
                                    <span class="navy__title">test level6</span>
                                    <a href="javascript:alert('link')">Überblick</a>
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
        </ul>
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
        <a href="javascript:void(0)" role="button" class="navy__has-children">
          <span>Dienstleistungen</span>
          <SvgIcon icon="ArrowRight" size="lg" />
        </a>
        <ul>
          <li>
            <a href="javascript:void(0)" role="button" class="navy__back">
              <SvgIcon icon="ArrowLeft" size="lg" />
              <span>Back</span>
            </a>
            <span class="navy__title">Dienstleistungen</span>
            <a href="javascript:alert('link')">Überblick</a>
          </li>
          <li><a href="javascript:alert('link')">Zeitplan</a></li>
          <li><a href="javascript:alert('link')">Geodatenmodelle</a></li>
          <li><a href="javascript:alert('link')">FAQ</a></li>
          <li><a href="javascript:alert('link')">Koordinatenreferenzsysteme</a></li>
          <li><a href="javascript:alert('link')">Geografische Bezeichnungen</a></li>
          <li><a href="javascript:alert('link')">Verwaltungseinheiten</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:alert('link')">
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