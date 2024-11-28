import Newsletter from '../../ch/components/Newsletter.vue'

export default {
  title: 'Components/Newsletter',
  component: Newsletter,

  argTypes: {
    type: {
      table: { type: { summary: ['string: default, inline'] } },
      options: ['default', 'inline'],
      control: { type: 'select' },
    },
    state: {
      table: {
        category: 'props',
        type: { summary: ['string: default, sent'] },
      },
      options: ['default', 'sent'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Newsletter },
    setup: () => ({ args }),
    template: `
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args" />
      </main>
    `,
  }),
  args: {
    type: 'default',
    state: 'default',
    title: 'Abonnieren Sie unseren Newsletter',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
    inputLabel: 'E-Mail',
    buttonLabel: 'Newsletter abonnieren',
    successText:
      'Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>',
  },
}

export const ExampleInlineForm = {
  render: (args) => ({
    components: { Newsletter },
    setup: () => ({ args }),
    template: `
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args"/>
      </main>
    `,
  }),
  args: {
    ...Example.args,
    type: 'inline',
  },
}

export const ExampleDetailPage = {
  render: (args) => ({
    components: { Newsletter },
    setup: () => ({ args }),
    template: `
      <main>
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            <Newsletter v-bind="args" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </div>
        </div>
      </main>
    `,
  }),
  args: {
    ...Example.args,
    type: 'inline',
  },
}
