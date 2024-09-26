import Checkbox from '../../ch/components/Checkbox.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Checkbox },
  template: `
  <div>
    <Checkbox
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
  title: 'Components/Form/Input Checkbox',
  component: Checkbox,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'negative'],
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
    name: 'checkbox-name',
    id: 'checkbox-id',
  },
}
