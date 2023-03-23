<template>
  <div class="form__group__select">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses"
    >
      {{ label }}<span v-if="required" class="form__group__required" />
    </label>
    <div :class="selectWrapperClasses">
      <vSelect
        multiple
        :components="{Deselect, OpenIndicator}"
        :options="[
        'foo',
        'bar',
        'baz'
      ]"></vSelect>
      <div class="select__icon">
        <svg
          role="presentation"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
          />
        </svg>
      </div>
    </div>
    <div v-if="message" class="badge badge--sm" :class="`badge--${messageType}`">
      {{ message }}
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'MultiSelect',
  components: {
    vSelect,
  },
  data() {
    return {
      Deselect: {
        render: createElement => createElement('span', '×'),
      },
      OpenIndicator: {
        render: createElement => createElement('span'), // hide the default icon
      },
    }
  },
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline'
    },
    bare: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    label: {
      type: String,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    id: {
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
      validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selectWrapperClasses() {
      let base = 'select shadow-lg '
      if (this.bare) base += `select--bare `
      return base
    },
    selectClasses() {
      let base = ''
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.messageType) base += `input--${this.messageType} `
      return base
    },
    labelClasses() {
      let base = ''
      if (this.variant === 'negative') base += `text--negative `
      if (this.size) base += `text--${this.size} `
      if (this.hideLabel) base += `sr-only `
      if (this.required) base += `text--asterisk `
      return base
    },
  },
}
</script>

<style scoped>


>>> .v-select {
  position: relative;
  font-family: inherit;

  --vs-colors--lightest: rgba(60,60,60,0.26);
    --vs-colors--light: rgba(60,60,60,0.5);
    --vs-colors--dark: #333;
    --vs-colors--darkest: rgba(0,0,0,0.15);
    --vs-search-input-color: inherit;
    --vs-search-input-bg: #fff;
    --vs-search-input-placeholder-color: inherit;
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;
    --vs-state-disabled-bg: #f8f8f8;
    --vs-state-disabled-color: var(--vs-colors--light);
    --vs-state-disabled-controls-color: var(--vs-colors--light);
    --vs-state-disabled-cursor: not-allowed;
    --vs-border-color: theme('colors.text.500'); /*var(--vs-colors--lightest);*/
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 0px;
    --vs-actions-padding: 4px 6px 0 3px;
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;
    --vs-selected-bg: #f0f0f0;
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);
    --vs-dropdown-bg: #fff;
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000;
    --vs-dropdown-min-width: 160px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 20px;
    --vs-dropdown-option--active-bg: #5897fb;
    --vs-dropdown-option--active-color: #fff;
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: #fff;
    --vs-transition-timing-function: cubic-bezier(1,-0.115,0.975,0.855);
    --vs-transition-duration: 150ms;

    --vs-disabled-bg: var(--vs-state-disabled-bg);
    --vs-disabled-color: var(--vs-state-disabled-color);
    --vs-disabled-cursor: var(--vs-state-disabled-cursor);
}

>>> .v-select,
>>> .v-select * {
    box-sizing: border-box
}

@-webkit-keyframes vSelectSpinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes vSelectSpinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

>>> .vs__fade-enter-active,
>>> .vs__fade-leave-active {
    pointer-events: none;
    transition: opacity var(--vs-transition-duration) var(--vs-transition-timing-function)
}

>>> .vs__fade-enter,
>>> .vs__fade-leave-to {
    opacity: 0
}

>>> .vs--disabled {
    .vs__clear,
    .vs__dropdown-toggle,
    .vs__open-indicator,
    .vs__search,
    .vs__selected {
        cursor: var(--vs-disabled-cursor);
        background-color: var(--vs-disabled-bg);
    }
}

>>> .v-select[dir=rtl] {
    .vs__actions {
        padding: 0 3px 0 6px
    }

    .vs__clear {
        margin-left: 6px;
        margin-right: 0
    }

    .vs__deselect {
        margin-left: 0;
        margin-right: 2px
    }

    .vs__dropdown-menu {
        text-align: right
    }
}

>>> .vs__dropdown-toggle {
    appearance: none;
    display: flex;
    padding: 0 0 4px;
    background: var(--vs-search-input-bg);
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-radius: var(--vs-border-radius);
    white-space: normal
}

>>> .vs__selected-options {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0 2px;
    position: relative
}

>>> .vs__actions {
    display: flex;
    align-items: center;
    padding: var(--vs-actions-padding)
}

>>> .vs--searchable .vs__dropdown-toggle {
    cursor: text
}

>>> .vs--unsearchable .vs__dropdown-toggle {
    cursor: pointer
}

>>> .vs--open .vs__dropdown-toggle {
    border-bottom-color: transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

>>> .vs__open-indicator {
    fill: var(--vs-controls-color);
    transform: scale(var(--vs-controls-size));
    transition: transform var(--vs-transition-duration) var(--vs-transition-timing-function);
    transition-timing-function: var(--vs-transition-timing-function)
}

>>> .vs--open .vs__open-indicator {
    transform: rotate(180deg) scale(var(--vs-controls-size))
}

>>> .vs--loading .vs__open-indicator {
    opacity: 0
}

>>> .vs__clear {
    fill: var(--vs-controls-color);
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-right: 8px
}

>>> .vs__dropdown-menu {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: calc(100% - var(--vs-border-width));
    left: 0;
    z-index: var(--vs-dropdown-z-index);
    padding: 5px 0;
    margin: 0;
    width: 100%;
    max-height: var(--vs-dropdown-max-height);
    min-width: var(--vs-dropdown-min-width);
    overflow-y: auto;
    box-shadow: var(--vs-dropdown-box-shadow);
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-top-style: none;
    border-radius: 0 0 var(--vs-border-radius) var(--vs-border-radius);
    text-align: left;
    list-style: none;
    background: var(--vs-dropdown-bg);
    color: var(--vs-dropdown-color)
}

>>> .vs__no-options {
    text-align: center
}

>>> .vs__dropdown-option {
    line-height: 1.42857143;
    display: block;
    padding: var(--vs-dropdown-option-padding);
    clear: both;
    color: var(--vs-dropdown-option-color);
    white-space: nowrap;
    cursor: pointer
}

>>> .vs__dropdown-option--highlight {
    background: var(--vs-dropdown-option--active-bg);
    color: var(--vs-dropdown-option--active-color)
}

>>> .vs__dropdown-option--deselect {
    background: var(--vs-dropdown-option--deselect-bg);
    color: var(--vs-dropdown-option--deselect-color)
}

>>> .vs__dropdown-option--disabled {
    background: var(--vs-state-disabled-bg);
    color: var(--vs-state-disabled-color);
    cursor: var(--vs-state-disabled-cursor)
}

>>> .vs__selected {
    display: flex;
    align-items: center;
    background-color: var(--vs-selected-bg);
    border: var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);
    border-radius: var(--vs-border-radius);
    color: var(--vs-selected-color);
    line-height: var(--vs-line-height);
    margin: 4px 2px 0;
    padding: 0 .25em;
    z-index: 0
}

>>> .vs__deselect {
    display: inline-flex;
    appearance: none;
    margin-left: 4px;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: none;
    fill: var(--vs-controls-color);
    text-shadow: var(--vs-controls--deselect-text-shadow)
}

>>> .vs--single {
    .vs__selected {
        background-color: transparent;
        border-color: transparent
    }

    &.vs--loading .vs__selected,&.vs--open .vs__selected {
        position: absolute;
        opacity: .4
    }

    &.vs--searching .vs__selected {
        display: none
    }
}

>>> .vs__search::-webkit-search-cancel-button {
    display: none
}

>>> .vs__search::-ms-clear,
>>> .vs__search::-webkit-search-decoration,
>>> .vs__search::-webkit-search-results-button,
>>> .vs__search::-webkit-search-results-decoration {
    display: none
}

>>> .vs__search,
>>> .vs__search:focus {
    min-height: 36px;

    color: var(--vs-search-input-color);
    appearance: none;
    line-height: var(--vs-line-height);
    font-size: var(--vs-font-size);
    border: 1px solid transparent;
    border-left: none;
    outline: none;
    margin: 4px 0 0;
    padding: 0 7px;
    background: none;
    box-shadow: none;
    width: 0;
    max-width: 100%;
    flex-grow: 1;
    z-index: 1
}

>>> .vs__search::placeholder {
    color: var(--vs-search-input-placeholder-color)
}

>>> .vs--unsearchable {
    .vs__search {
        opacity: 1
    }

    &:not(.vs--disabled) .vs__search {
        cursor: pointer
    }
}

>>> .vs--single.vs--searching:not(.vs--open):not(.vs--loading) {
    .vs__search {
        opacity: .2
    }
}

>>> .vs__spinner {
    align-self: center;
    opacity: 0;
    font-size: 5px;
    text-indent: -9999em;
    overflow: hidden;
    border: .9em solid hsla(0,0%,39.2%,
    .1);
    border-left-color: rgba(60,60,60,
    .45);
    transform: translateZ(0) scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));
    animation: vSelectSpinner 1.1s linear infinite;
    transition: opacity .1s
}

>>> .vs__spinner,
>>> .vs__spinner:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
    transform: scale(var(--vs-controls--spinner-size,var(--vs-controls-size)))
}

>>> .vs--loading .vs__spinner {
    opacity: 1
}
</style>
