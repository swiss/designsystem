import Radio from '../../ch/components/Radio.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Radio },
  template: `
  <div>
    <Radio
      :variant="variant"
      :size="size"
      :label="label"
      :id="id"
      :name="name"
      :value="value"
      :message="message"
      :messageType="messageType"
      :required="required"
    />
    </div>
  `,
})

export default {
  title: 'Components/Form/Input Radio',
  component: Radio,

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
    name: 'radio-name',
    id: 'radio-id',
  },
}
