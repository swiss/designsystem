<template>
  <div class="form__group__select">
    <label
      v-if="label"
      :for="getUniqueId('multi-select')"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <div :class="selectWrapperClasses">
      <v-select
        :id="getUniqueId('multi-select')"
        :multiple="multiple"
        :placeholder="placeholder"
        :class="selectClasses"
        :disabled="disabled"
        :components="{Deselect, OpenIndicator}"
        :options="options"
        :name="name"
        v-model="currentSelected"
        :selectable="(option) => !excluded.includes(option) && (selectLimit ? !currentSelected || currentSelected.length < selectLimit : true)"
      />
      <div class="select__icon">
        <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="message"
      class="badge badge--sm"
      :class="`badge--${messageType}`"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
  const { v4: uuidv4 } = require('uuid');
  import vSelect from 'vue-select'
  export default {
    name: 'MultiSelect',
    components: {
    vSelect,
  },
    props: {
      bare: {
        type: Boolean,
        default: false,
      },
      variant: {
        type: String,
        validator: (prop) => ['outline', 'negative'].includes(prop),
        default: 'outline',
      },
      size: {
        type: String,
        validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
        default: 'base',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      hideLabel: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
      },
      name: {
        type: String,
      },
      message: {
        type: String,
      },
      messageType: {
        type: String,
        validator: (prop) =>
          ['error', 'warning', 'success', 'info'].includes(prop),
      },
      onChange: {
        type: Function,
        default: () => ({}),
      },
      options: {
        type: Array,
        default: () => [],
      },
      selected: {
        type: Array,
        default: () => [],
      },
      multiple: {
        type: Boolean,
        default: true,
      },
      placeholder: {
        type: String,
      },
      excluded: {
        type: Array,
        default: () => [],
      },
      selectLimit: {
        type: Number,
      },
    },
    data() {
      return {
        selectId: '',
        currentSelected: [],
        Deselect: {
          render: (createElement) => createElement('span', '×'),
        },
        OpenIndicator: {
          render: (createElement) => createElement('span'),
        },
      };
    },
    watch: {
      // Emit on change
      currentSelected() {
        this.$emit('emitSelect', this.currentSelected);
        this.onChange(this.currentSelected);
      },
    },
    created() {
      // Set initial selected element
      this.currentSelected = this.selected;
    },
    mounted() {
      this.selectId = uuidv4();
    },
    methods: {
      getUniqueId(text = '') {
        return `${text}-${this.selectId}`;
      },
    },
    computed: {
      selectWrapperClasses() {
        let base = 'select shadow-lg ';
        if (this.bare) base += 'select--bare';
        return base;
      },
      selectClasses() {
        let base = '';
        if (this.variant) base += `input--${this.variant} `;
        if (this.size) base += `input--${this.size} `;
        if (this.disabled) base += 'input--disabled ';
        if (this.messageType) base += `input--${this.messageType} `;
        return base;
      },
      labelClasses() {
        let base = '';
        if (this.variant === 'negative') base += 'text--negative ';
        if (this.size) base += `text--${this.size} `;
        if (this.hideLabel) base += 'sr-only ';
        if (this.required) base += 'text--asterisk ';
        return base;
      },
    },
  };
</script>
