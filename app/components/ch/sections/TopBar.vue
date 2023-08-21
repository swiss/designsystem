<template>
  <div
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : '' "
  >
    <div class="top-bar__bar">
      <div class="container container--flex">
        <button
          class="top-bar__btn"
          @click="isOpen = !isOpen"
        >
          <span>Alle Schweizer Bundesbehörden</span>
          <SvgIcon
            icon="ChevronDown"
            size="lg"
            class="top-bar__btn__icon"
          />
        </button>
        <div class="top-bar__right">
          <TopBarNavigation context="desktop" />
          <LanguageSwitcher type="negative" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">
        <div class="flex justify-end">
          <button
            class="top-bar__drawer__close__btn"
            @click="isOpen = !isOpen"
          >
            <span>Schliessen</span>
            <SvgIcon
              icon="Cancel"
              size="lg"
            />
          </button>
        </div>
        <div>
          <h3 class="top-bar__main-title">Wo befinde ich mich?</h3>
          <nav
            aria-label="breadcrumb"
            aria-current="location"
            class="localization"
          >
            <ul>
              <li>
                <a href="javascript:void(0)">UVEK</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="localization__icon"
                />
              </li>
              <li>
                <a href="javascript:void(0)">Swisstopo</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="localization__icon"
                />
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="active"
                  aria-current="page"
                >
                  Das Geoportal des Bundes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="separator separator--negative separator--xl"></div>

        <div>
          <h3 class="top-bar__main-title">Eine andere Bundesbehörde besuchen</h3>

          <div class="top-bar__grid">
            <div class="top-bar__grid__box-1">
              <h4 class="top-bar__title">Regierung</h4>
              <ul class="menu">
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">BR</div>
                      <div>
                        Der Schweizerische Bundesrat
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">BK</div>
                      <div>
                        Die Schweizerische Bundeskanzlei – die Stabsstelle des Bundesrats
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="top-bar__grid__box-2">
              <!-- Potential additional information here -->
            </div>

            <div class="top-bar__grid__box-3">
              <h4 class="top-bar__title">Departemente</h4>
              <ul class="menu">
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDA</div>
                      <div>
                        Eidgenössisches Departement für auswärtige Angelegenheiten
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDI</div>
                      <div>
                        Eidgenössisches Departement des Innern
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EJPD</div>
                      <div>
                        Eidgenössisches Justiz- und Polizeidepartement
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">VBS</div>
                      <div>
                        Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EFD</div>
                      <div>
                        Eidgenössisches Finanzdepartement
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">WBF</div>
                      <div>
                        Eidgenössisches Departement für Wirtschaft, Bildung und Forschung
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">UVEK</div>
                      <div>
                        Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div class="top-bar__grid__box-4">
              <h4 class="top-bar__title">Weitere Bundes-Websites</h4>
              <div class="search search--negative search--large">
                <div class="search__group">
                  <input
                    type="search"
                    id="search-input"
                    label="Ämter filtern"
                    placeholder="Filtern"
                    autocomplete="off"
                    v-model="filterString"
                    ref="searchInput"
                  />
                  <Btn
                    v-if="filterString!==''"
                    @click.native="filterString=''; $refs.searchInput.focus()"
                    label="Clear search input"
                    icon="CancelCircle"
                    icon-pos="only"
                    variant="bare-negative"
                    size="lg"
                  />
                  <div
                    v-else
                    class="btn btn--negative btn--lg btn--icon-only"
                  >
                    <SvgIcon
                      icon="Filter"
                      class="icon--lg"
                    />
                  </div>
                </div>
                <div class="search__results search__results--negative">
                  <ul class="menu">
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>
                            Bundesamt für Kultur
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BLV</span>
                          </div>
                          <div>
                            Bundesamt für Lebensmittelsicherheit und Veterinärwesen
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>UVEK</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BS</span>
                          </div>
                          <div>
                            Bundesamt für Sozialversicherungen
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BAR</span>
                          </div>
                          <div>
                            Schweizerisches Bundesarchiv
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>
                            Bundesamt für Kultur
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BAR</span>
                          </div>
                          <div>
                            Schweizerisches Bundesarchiv
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>
                            Bundesamt für Kultur
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                      <a href="javascript:void(0)" class="menu__item__flex">
                        <div>
                          <div class="overtitle">
                            <span>EDA</span>
                            <SvgIcon icon="ArrowRight" class="icon--sm" />
                            <span>BK</span>
                          </div>
                          <div>
                            Bundesamt für Kultur
                          </div>
                        </div>
                        <SvgIcon
                          icon="External"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TopBarNavigation from '../navigations/TopBarNavigation'
import SvgIcon from '../components/SvgIcon'
import Btn from "../components/Btn"
import LanguageSwitcher from '../components/LanguageSwitcher'

export default {
  name: 'TopBar',
  components: {
    TopBarNavigation,
    SvgIcon,
    Btn,
    LanguageSwitcher
  },
  data: function(){
    return {
      isSearchInputFocused: false,
      filterString: '',
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
