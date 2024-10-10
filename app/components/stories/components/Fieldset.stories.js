import Fieldset from '../../ch/components/Fieldset.vue'
import Checkbox from '../../ch/components/Checkbox.vue'
import Radio from '../../ch/components/Radio.vue'

const TemplateCheckboxes = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Fieldset, Checkbox },
  template: `
    <Fieldset :variant="variant" :size="size" :legend="legend" :message="message" :messageType="messageType" :required="required">
      <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :variant="variant" :size="size" :messageType="messageType" :required="required"/>
      <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :variant="variant" :size="size" :messageType="messageType" :required="required" />
    </Fieldset>
  `,
})

const TemplateRadios = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Fieldset, Radio },
  template: `
    <Fieldset :variant="variant" :size="size" :legend="legend" :message="message" :messageType="messageType" :required="required">
      <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :variant="variant" :size="size" :messageType="messageType" :required="required"/>
      <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :variant="variant" :size="size" :messageType="messageType" :required="required" />
    </Fieldset>
  `,
})

export default {
  title: 'Components/Form/Fieldset',
  component: (Fieldset, Checkbox, Radio),

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

    legend: {},
    message: {},

    messageType: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'success', 'info'],
      },
    },
  },
}

export const WithRadio = {
  render: TemplateRadios.bind({}),
  name: 'With Radio',

  args: {
    required: false,
    legend: 'Radio button group legend',
  },
}

export const WithCheckboxes = {
  render: TemplateCheckboxes.bind({}),
  name: 'With Checkboxes',

  args: {
    required: false,
    legend: 'Checkbox group legend',
  },
}
