import Newsletter from '../../ch/components/Newsletter.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Newsletter },
  template:
    '<main style="max-width: 600px; margin: auto"><Newsletter :type="type" :state="state" :title="title" :text="text" :input-label="inputLabel" :button-label="buttonLabel" :success-text="successText"/></main>',
})

const TemplateDetail = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Newsletter },
  template:
    '<main><div class="container container--grid gap--responsive"><div class="container__center--xs vertical-spacing"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p><Newsletter :type="type" :state="state" :title="title" :text="text" :input-label="inputLabel" :button-label="buttonLabel" :success-text="successText"/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div></div></main>',
})

const defaultArgs = {
  type: 'default',
  state: 'default',
  title: 'Abonnieren Sie unseren Newsletter',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
  inputLabel: 'E-Mail',
  buttonLabel: 'Newsletter abonnieren',
  successText:
    'Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>',
}

export default {
  title: 'Components/Newsletter',
  component: Newsletter,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'inline'],
      },
    },

    state: {
      control: {
        type: 'select',
        options: ['default', 'sent'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
  args: defaultArgs,
}

export const ExampleInlineForm = {
  render: Template.bind({}),
  name: 'Example Inline Form',

  args: {
    ...defaultArgs,
    type: 'inline',
  },
}

export const ExampleDetailPage = {
  render: TemplateDetail.bind({}),
  name: 'Example Detail Page',

  args: {
    ...defaultArgs,
    type: 'inline',
  },
}
