// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginVue from 'eslint-plugin-vue'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  includeIgnoreFile(gitignorePath),
    {
        // your overrides
    },
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      // Eslint
      "no-constant-condition": "warn",
      "prefer-const": "warn",
      "no-irregular-whitespace": "warn",
      "no-useless-escape": "warn",

      // Vue
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "vue/attributes-order": "warn",
      "vue/no-deprecated-slot-attribute": "off",
      "vue/v-slot-style": "off",
      "vue/attribute-hyphenation": "off",
      "vue/no-deprecated-v-on-native-modifier": "warn",
      "vue/no-side-effects-in-computed-properties": "warn",
      "vue/v-on-event-hyphenation": "warn",
      "vue/no-parsing-error": "warn",
      "vue/no-duplicate-attributes": "warn",
      "vue/valid-template-root": "warn",
      "vue/no-v-text-v-html-on-component": "warn",
      "vue/require-valid-default-prop": "warn",
      "vue/no-ref-as-operand": "warn",
      "vue/require-v-for-key": "warn",
      "vue/valid-v-else": "warn",
      "vue/html-closing-bracket-newline": "warn",
      "vue/html-indent": "warn",
      "vue/singleline-html-element-content-newline": "warn",
      "vue/multi-word-component-names": "off",
      "vue/html-quotes": "warn",
      "vue/multiline-html-element-content-newline": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      //Typescript
      "@typescript-eslint/consistent-type-imports": "warn",

      // Fixed but open issues which cannot be fixed
      "no-unused-vars": "off",
      "no-undef": "off",

      // Unsure
      "no-prototype-builtins": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "off",

      //Unchecked
      "@typescript-eslint/ban-ts-comment": "off",
      "vue/component-name-in-template-casing": ["off", "PascalCase", { registeredComponentsOnly: false }],
    }
  },
  /* {
    files: ['*.vue', '***.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  }, */
)
