import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './safelist.txt',
    './app/pages/**/*.vue',
    './app/components/ch/**/*.vue',
    './app/components/stories/layout/*.stories.mdx',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1544px',
      '3xl': '1920px',
    },
    container: {
      '2xl': '1544px',
      '3xl': '1676px',
    },
    scale: {
      102: '1.02',
      ...defaultTheme.scale,
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',

      // Legacy
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',

      // New color primitives
      'standard-black': 'var(--standard-black)',
      'standard-transparent': 'var(--standard-transparent)',
      'standard-white': 'var(--standard-white)',
      primary: {
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
      },
      secondary: {
        50: 'var(--secondary-50)',
        100: 'var(--secondary-100)',
        200: 'var(--secondary-200)',
        300: 'var(--secondary-300)',
        400: 'var(--secondary-400)',
        500: 'var(--secondary-500)',
        600: 'var(--secondary-600)',
        700: 'var(--secondary-700)',
        800: 'var(--secondary-800)',
        900: 'var(--secondary-900)',
      },
      text: {
        50: 'var(--text-50)',
        100: 'var(--text-100)',
        200: 'var(--text-200)',
        300: 'var(--text-300)',
        400: 'var(--text-400)',
        500: 'var(--text-500)',
        600: 'var(--text-600)',
        700: 'var(--text-700)',
        800: 'var(--text-800)',
        900: 'var(--text-900)',
      },
      blue: {
        50: 'var(--blue-50)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
        700: 'var(--blue-700)',
        800: 'var(--blue-800)',
        900: 'var(--blue-900)',
      },
      gray: {
        50: 'var(--gray-50)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      green: {
        50: 'var(--green-50)',
        100: 'var(--green-100)',
        200: 'var(--green-200)',
        300: 'var(--green-300)',
        400: 'var(--green-400)',
        500: 'var(--green-500)',
        600: 'var(--green-600)',
        700: 'var(--green-700)',
        800: 'var(--green-800)',
        900: 'var(--green-900)',
      },
      indigo: {
        50: 'var(--indigo-50)',
        100: 'var(--indigo-100)',
        200: 'var(--indigo-200)',
        300: 'var(--indigo-300)',
        400: 'var(--indigo-400)',
        500: 'var(--indigo-500)',
        600: 'var(--indigo-600)',
        700: 'var(--indigo-700)',
        800: 'var(--indigo-800)',
        900: 'var(--indigo-900)',
      },
      orange: {
        50: 'var(--orange-50)',
        100: 'var(--orange-100)',
        200: 'var(--orange-200)',
        300: 'var(--orange-300)',
        400: 'var(--orange-400)',
        500: 'var(--orange-500)',
        600: 'var(--orange-600)',
        700: 'var(--orange-700)',
        800: 'var(--orange-800)',
        900: 'var(--orange-900)',
      },
      pink: {
        50: 'var(--pink-50)',
        100: 'var(--pink-100)',
        200: 'var(--pink-200)',
        300: 'var(--pink-300)',
        400: 'var(--pink-400)',
        500: 'var(--pink-500)',
        600: 'var(--pink-600)',
        700: 'var(--pink-700)',
        800: 'var(--pink-800)',
        900: 'var(--pink-900)',
      },
      purple: {
        50: 'var(--purple-50)',
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
        300: 'var(--purple-300)',
        400: 'var(--purple-400)',
        500: 'var(--purple-500)',
        600: 'var(--purple-600)',
        700: 'var(--purple-700)',
        800: 'var(--purple-800)',
        900: 'var(--purple-900)',
      },
      red: {
        50: 'var(--red-50)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
        700: 'var(--red-700)',
        800: 'var(--red-800)',
        900: 'var(--red-900)',
      },
      teal: {
        50: 'var(--teal-50)',
        100: 'var(--teal-100)',
        200: 'var(--teal-200)',
        300: 'var(--teal-300)',
        400: 'var(--teal-400)',
        500: 'var(--teal-500)',
        600: 'var(--teal-600)',
        700: 'var(--teal-700)',
        800: 'var(--teal-800)',
        900: 'var(--teal-900)',
      },
      yellow: {
        50: 'var(--yellow-50)',
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)',
        500: 'var(--yellow-500)',
        600: 'var(--yellow-600)',
        700: 'var(--yellow-700)',
        800: 'var(--yellow-800)',
        900: 'var(--yellow-900)',
      },

      // New color tokens
      action: {
        'darkmode-hover-red': 'var(--primary-700)',
        'darkmode-main-red': 'var(--primary-600)',
        disabled: 'var(--action-disabled)',
        'hover-main': 'var(--action-hover-main)',
        'hover-secondary': 'var(--action-hover-secondary)',
        main: 'var(--action-main)',
        secondary: 'var(--action-secondary)',
      },
      background: {
        'accent-01': 'var(--background-accent-01)',
        'accent-02': 'var(--background-accent-02)',
        'accent-03': 'var(--background-accent-03)',
        'accent-04': 'var(--background-accent-04)',
        main: 'var(--background-main)',
        breadcrumb: 'var(--background-breadcrumb)',
      },
      elements: {
        color: '#ffffff',
        'card-01': 'var(--elements-card-card-01)',
        'divider-50': 'var(--elements-divider-50)',
        'divider-100': 'var(--elements-divider-100)',
        'divider-200': 'var(--elements-divider-200)',
        'card-header-border': 'var(--elements-card-header-border)',
        'card-header-background': 'var(--elements-card-header-background)',
        'top-bar-background': 'var(--elements-top-bar-background)',
        'top-bar-background-open': 'var(--elements-top-bar-background-open)',
        'top-bar-background-easy-language':
          'var(--elements-top-bar-background-easy-language)',
        'top-bar-background-sign-language':
          'var(--elements-top-bar-background-sign-language)',
        'top-bar-drawer-background':
          'var(--elements-top-bar-drawer-background)',
        'top-bar-drawer-localization-link':
          'var(--elements-top-bar-drawer-localization-link)',
        'top-bar-drawer-localization-link-border':
          'var(--elements-top-bar-drawer-localization-link-border)',
        'top-bar-button-background':
          'var(--elements-top-bar-button-background)',
        'top-bar-button-hover-text':
          'var(--elements-top-bar-button-hover-text)',
        'top-bar-button-focus-text':
          'var(--elements-top-bar-button-focus-text)',
        'top-bar-badge-icon': 'var(--elements-top-bar-badge-icon)',
        'top-header-easy-language-icon-background':
          'var(--elements-top-header-easy-language-icon-background)',
        'top-header-sign-language-icon-background':
          'var(--elements-top-header-sign-language-icon-background)',
        'top-header-easy-language-icon':
          'var(--elements-top-header-easy-language-icon)',
        'top-header-sign-language-icon':
          'var(--elements-top-header-sign-language-icon)',
        'footer-background-01': 'var(--elements-footer-background-01)',
        'footer-text': 'var(--elements-footer-text)',
        'footer-link': 'var(--elements-footer-link)',
        'footer-link-hover': 'var(--elements-footer-link-hover)',
        'footer-link-hover-background':
          'var(--elements-footer-link-hover-background)',
        'footer-information-link-hover-text':
          'var(--elements-footer-information-link-hover-text)',
        'footer-link-focus': 'var(--elements-footer-link-focus)',
        'navigation-01': 'var(--elements-navigation-01)',
        'navigation-02': 'var(--elements-navigation-02)',
        'footer-navigation-background-01':
          'var(--elements-footer-navigation-background-01)',
        'navigation-top-bar-hover-text':
          'var(--elements-navigation-top-bar-mobile-hover-text)',
        'navigation-top-bar-focus-text':
          'var(--elements-navigation-top-bar-mobile-focus-text)',
      },
      states: {
        'error-bg': 'var(--states-error-error-bg)',
        'error-text': 'var(--states-error-error-text)',
        'information-bg': 'var(--states-information-information-bg)',
        'information-text': 'var(--states-information-information-text)',
        'hint-bg': 'var(--states-hint-hint-bg)',
        'hint-text': 'var(--states-hint-hint-text)',
        'success-bg': 'var(--states-success-success-bg)',
        'success-text': 'var(--states-success-success-text)',
        'warning-bg': 'var(--states-warning-warning-bg)',
        'warning-text': 'var(--states-warning-warning-text)',
        'alert-bg': 'var(--states-alert-alert-bg)',
        'alert-text': 'var(--states-alert-alert-text)',
      },
      'text-new': {
        contrast: 'var(--text-contrast-text)',
        disabled: 'var(--text-disabled-text)',
        label: 'var(--text-label-text)',
        main: 'var(--text-main-text)',
        quote: 'var(--text-quote-text)',
        selected: 'var(--text-selected-text)',
        'highlight-text': 'var(--text-highlight-text)',
      },
      'ui-elements': {
        button: {
          'background-cta-default':
            'var(--ui-elements-button-background-cta-default)',
          'background-cta-disabled':
            'var(--ui-elements-button-background-cta-disabled)',
          'background-cta-hover':
            'var(--ui-elements-button-background-cta-hover)',
          'footer-information-newsletter-button-border':
            'var(--ui-elements-footer-informtion-button-border)',
          'footer-information-newsletter-button-background':
            'var(--ui-elements-footer-informtion-button-background)',
        },
        checkbox: {
          'active-background': 'var(--ui-elements-checkbox-active-background)',
        },
        inputfield: {
          select: {
            'choose-default-background':
              'var(--ui-elements-inputfield-select-background-choose-default-choose-background)',
            'choose-disabled-background':
              'var(--ui-elements-inputfield-select-background-choose-disabled-choose-background)',
            'choose-disabled-color':
              'var(--ui-elements-inputfield-select-text-choose-disabled-choose-color)',
            'choose-disabled-text-color':
              '--ui-elements-inputfield-select-text-choose-disabled-text-color',
            'selected-background':
              'var(--ui-elements-inputfield-select-background-selected-background-color)',
            'disabled-background':
              'var(--ui-elements-inputfield-select-background-disabled-background)',
            'default-background':
              'var(--ui-elements-inputfield-select-background-default-background)',
            'disabled-stroke':
              'var(--ui-elements-inputfield-select-stroke-disabled-stroke)',
            'error-stroke':
              'var(--ui-elements-inputfield-select-stroke-error-stroke)',
            'main-stroke':
              'var(--ui-elements-inputfield-select-stroke-main-stroke)',
            'disabled-text':
              'var(--ui-elements-inputfield-select-text-disabled-text)',
            'main-text': 'var(--ui-elements-inputfield-select-text-main-text)',
            'footer-select': 'var(--ui-elements-footer-select-background)',
          },
        },
        radiobutton: {
          'active-background':
            'var(--ui-elements-radiobutton-active-background)',
          'disabled-background':
            'var(--ui-elements-radiobutton-disabled-background)',
          'disabled-stroke': 'var(--ui-elements-radiobutton-disabled-stroke)',
          'inactive-background':
            'var(--ui-elements-radiobutton-inactive-background)',
          'main-stroke': 'var(--ui-elements-radiobutton-main-stroke)',
        },
        tag: {
          'background-active': 'var(--ui-elements-tag-background-active)',
          'background-default': 'var(--ui-elements-tag-background-default)',
          'background-disabled-fill':
            'var(--ui-elements-tag-background-disabled-fill)',
          'background-disabled-stroke':
            'var(--ui-elements-tag-background-disabled-stroke)',
          'background-hover': 'var(--ui-elements-tag-background-hover)',
        },
      },
    },
    fontWeight: {
      normal: 400,
      bold: 400,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.625rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
      '9xl': '5rem',
    },
    fontFamily: {
      regular: ['Font-Regular', 'Hind', 'Fallback-font', 'Sans-Serif'],
      italic: ['Font-Italic', 'Hind', 'Fallback-font'],
      bold: ['Font-Bold', 'Hind', 'Fallback-font'],
      'bold-italic': ['Font-Bold-Italic', 'Hind', 'Fallback-font'],
    },
    boxShadow: {
      sm: '0px 1px 2px 0px rgba(0,0,0,0.05)',
      DEFAULT:
        '0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 5px 0px rgba(0,0,0,0.08)',
      md: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 10px -1px rgba(0,0,0,0.08)',
      lg: '0px 2px 6px -1px rgba(0,0,0,0.06), 0px 5px 20px -3px rgba(0,0,0,0.08)',
      xl: '0px 6px 10px -5px rgba(0,0,0,0.06), 0px 15px 25px -3px rgba(0,0,0,0.09)',
      '2xl':
        '0px 10px 20px 0px rgba(0,0,0,0.06), 1px 10px 70px -8px rgba(0,0,0,0.13)',
      none: '0 0 0 0 rgba(0,0,0,0)',
      focus: '0 0 0 3px var(--purple-500, #8655f6)',
    },
    borderRadius: {
      none: '0',
      xs: '0.0625rem',
      sm: '0.125rem',
      DEFAULT: '0.1875rem',
      lg: '0.3125rem',
      xl: '0.375rem',
      '2xl': '0.5rem',
      '3xl': '0.625rem',
      '4xl': '0.75rem',
      '5xl': '0.9375rem',
      '6xl': '1.5rem',
      full: '9999px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
  variants: {
    extend: {},
  },
}
