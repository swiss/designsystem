import Card from '../../ch/components/Card.vue'
import Btn from '../../ch/components/Btn.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'
import CardGrid from '../../ch/demo/CardGrid.vue'

export default {
  title: 'Components/Card/Cards and grids',
  components: (Card, Btn, SvgIcon, CardGrid),
}

export const DynamicList = {
  render: () => ({
    template: `
      <section class="section bg--accent-01">
        <div class="container">
          <h2 class="section__title">Dynamic list</h2>

          <div class="grid grid--responsive-cols-3 gap--responsive">
            <div class="card">
              <div class="card__body">News 1</div>
            </div>

            <div class="card">
              <div class="card__body">News 2</div>
            </div>

            <div class="card">
              <div class="card__body">News 3</div>
            </div>
          </div>

          <div class="section__action">
            <a href="#" class="btn btn--bare btn--icon-right ">
              <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Alle News sehen</span>
            </a>
          </div>
        </div>

      </section>
    `,
  }),
}

export const GridClasses = {
  render: () => ({
    template: `
    <section class="section bg--accent-01">
      <div class="container">
        <h2 class="section__title">Section title</h2>

        <div class="grid grid--items-5 gap--responsive">
          <div class="card">
            <div class="card__body">Card 1</div>
          </div>

          <div class="card">
            <div class="card__body">Card 2</div>
          </div>

          <div class="card">
            <div class="card__body">Card 3</div>
          </div>

          <div class="card">
            <div class="card__body">Card 4</div>
          </div>

          <div class="card">
            <div class="card__body">Card 5</div>
          </div>
        </div>

        <div class="section__action">
          <a href="#" class="btn btn--bare btn--icon-right ">
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>

            <span class="btn__text">Alle News sehen</span>
          </a>
        </div>
      </div>
    </section>`,
  }),
}

export const OneCard = {
  render: (args) => ({
    setup: () => ({ ...args }),
    components: { Card, Btn, SvgIcon, CardGrid },
    template: `
      <section class="section bg--accent-01">
        <div class="container">
          <h2 class="section__title">{{ sectionTitle }}</h2>
          <CardGrid v-if="nItems" :nItems="nItems">
            <Card
              type="default"
              :layout="(nItems === 1 || nItems === 3 || nItems === 4 ) ? 'image-left' : 'default' "
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 1</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
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
            <Card
              v-if="nItems>1"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 2</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
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
            <Card
              v-if="nItems>2"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 3</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
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
            <Card
              v-if="nItems>3"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 4</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
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
            <Card
              v-if="nItems>4"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 5</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
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
          </CardGrid>
        </div>
      </section>
    `,
  }),
  args: {
    sectionTitle: 'One Card',
    nItems: 1,
  },
}

export const TwoCards = {
  ...OneCard,
  args: {
    sectionTitle: 'Two Cards',
    nItems: 2,
  },
}

export const ThreeCards = {
  ...OneCard,
  args: {
    sectionTitle: 'Three Cards',
    nItems: 3,
  },
}

export const FourCards = {
  ...OneCard,
  args: {
    sectionTitle: 'Four Cards',
    nItems: 4,
  },
}

export const FiveCards = {
  ...OneCard,
  args: {
    sectionTitle: 'Five Cards',
    nItems: 5,
  },
}
