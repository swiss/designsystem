import Textarea from '../../ch/components/Textarea.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Textarea },
  template: `
    <Textarea
      :variant="variant"
      :size="size"
      :label="label"
      :id="id"
      :name="name"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
      :message="message"
      :messageType="messageType"
      :required="required"
      :resizable="resizable"
      :maxlength="maxlength"
      :minlength="minlength"
    />
  `,
})

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'negative'],
      },
    },

    required: {
      control: {
        type: 'boolean',
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg'],
      },
    },

    message: {},

    messageType: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'success', 'info'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    variant: 'outline',
    size: 'base',
    label: 'Label',
    name: 'textarea-name',
    id: 'textarea-id',
    placeholder: 'Placeholder',
  },
}
