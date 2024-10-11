import Fieldset from '../../ch/components/Fieldset.vue'
import Checkbox from '../../ch/components/Checkbox.vue'
import Radio from '../../ch/components/Radio.vue'

export default {
  title: 'Components/Form/Fieldset',
  component: (Fieldset, Checkbox, Radio),

  argTypes: {
    variant: {
      table: {
        type: {
          summary: [
            'string: outline, negative',
          ]
        },
      },
      options: ['outline', 'negative'],
      control: {
        type: 'select',

      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      table: {
        type: {
          summary: [
            'string: sm, base, lg',
          ]
        },
      },
      options: ['sm', 'base', 'lg'],
      control: {
        type: 'select',

      },
    },
    legend: {},
    message: {},
    messageType: {
      table: {
        type: {
          summary: [
            'string: error, warning, success, info',
          ]
        },
      },
      options: ['error', 'warning', 'success', 'info'],
      control: {
        type: 'select',

      },
    },
    id: { table: { disable: true } },
    label: { table: { disable: true } },
    value: { table: { disable: true } },
    name: { table: { disable: true } },
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
}

export const WithRadio = {
  render: (args) => ({
    components: { Fieldset, Radio },
    setup: () => ({ args }),
    template: `
      <Fieldset v-bind="args" >
        <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
        <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    `,
  }),
  args: {
    required: false,
    legend: 'Radio button group legend',
  },
}

export const WithCheckboxes = {
  render: (args) => ({
    components: { Fieldset, Checkbox },
    setup: () => ({ args }),
    template: `
      <Fieldset v-bind="args" >
        <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
        <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    `,
  }),
  args: {
    required: false,
    legend: 'Checkbox group legend',
  },
}

export const RequiredFieldset = {
  render: () => ({
    template: `
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" required="required" class="input input--outline" value="value-0" />

          <label for="radio-0">Label for value one</label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" required="required" class="input input--outline" value="value-1" />

          <label for="radio-1">Label for value two</label>
        </div>
      </fieldset>
    `,
  }),
}

export const MessagesFieldset = {
  render: () => ({
    template: `
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-3" name="radio-group-2" required="required" class="input input--outline input--error" value="value-0" />

          <label for="radio-3">Label for value one</label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-4" name="radio-group-2" required="required" class="input input--outline input--error" value="value-1" />

          <label for="radio-4">Label for value two</label>
        </div>

        <div class="badge badge--sm badge--error">Error message, after last radio item</div>
      </fieldset>
    `,
  }),
}
