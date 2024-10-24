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
      "no-unused-vars": "off",
      "no-constant-condition": "error",
      "no-prototype-builtins": "off",
      "prefer-const": "off",
      "no-undef": "off",
      "no-irregular-whitespace": "off",
      "no-useless-escape": "off",

      "vue/html-self-closing": "off",
      "vue/attributes-order": "off",
      "vue/no-deprecated-slot-attribute": "off",
      "vue/v-slot-style": "off",
      "vue/attribute-hyphenation": "off",
      "vue/no-deprecated-v-on-native-modifier": "off",
      "vue/no-side-effects-in-computed-properties": "off",
      "vue/v-on-event-hyphenation": "off",
      "vue/no-v-html": "off",
      "vue/no-parsing-error": "off",
      "vue/no-duplicate-attributes": "off",
      "vue/require-default-prop": "off",
      "vue/valid-template-root": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/require-valid-default-prop": "off",
      "vue/no-ref-as-operand": "off",
      "vue/require-v-for-key": "off",
      "vue/valid-v-else": "off",

      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": "warn",
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
