import mailTemplatePreview from '../../../pages/mailTemplatePreview.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { mailTemplatePreview },
  template: '<mailTemplatePreview />',
})

export default {
  title: 'Pages/Mail/Mail Templates',
  component: mailTemplatePreview,

  argTypes: {
    isOpen: {
      name: 'Is open',

      control: {
        type: 'boolean',
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    isOpen: false,
  },
}
