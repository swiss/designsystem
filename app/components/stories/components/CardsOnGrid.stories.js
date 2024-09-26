import Card from '../../ch/components/Card.vue'
import Btn from '../../ch/components/Btn.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'
import CardGrid from '../../ch/demo/CardGrid.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Btn, SvgIcon, CardGrid },
  template: `
    <section class="section bg--secondary-50">
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
})

export default {
  title: 'Components/Card/Cards and grids',
  components: (Card, Btn, SvgIcon, CardGrid),
}

export const OneCard = {
  render: Template.bind({}),
  name: 'One Card',

  args: {
    sectionTitle: 'One Card',
    nItems: 1,
  },
}

export const TwoCards = {
  render: Template.bind({}),
  name: 'Two Cards',

  args: {
    sectionTitle: 'Two Cards',
    nItems: 2,
  },
}

export const ThreeCards = {
  render: Template.bind({}),
  name: 'Three Cards',

  args: {
    sectionTitle: 'Three Cards',
    nItems: 3,
  },
}

export const FourCards = {
  render: Template.bind({}),
  name: 'Four Cards',

  args: {
    sectionTitle: 'Four Cards',
    nItems: 4,
  },
}

export const FiveCards = {
  render: Template.bind({}),
  name: 'Five Cards',

  args: {
    sectionTitle: 'Five Cards',
    nItems: 5,
  },
}
