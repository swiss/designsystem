import Select from '../../ch/components/Select.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  template: `
    <Select
      :variant="variant"
      :bare="bare"
      :size="size"
      :label="label"
      :hideLabel="hideLabel"
      :id="id"
      :name="name"
      :message="message"
      :messageType="messageType"
      :required="required"
    >
      <option disabled selected>Choose your country</option>
      <option>Switzerland</option>
      <option>Swaziland</option>
      <option>Sweden</option>
    </Select>
  `,
})

export default {
  title: 'Components/Form/Select',
  component: Select,

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

    bare: {},

    size: {
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg'],
      },
    },

    label: {},

    hideLabel: {
      control: {
        type: 'boolean',
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
    bare: false,
    size: 'base',
    label: 'Label',
    hideLabel: false,
    name: 'select-name',
    id: 'select-id',
  },
}
