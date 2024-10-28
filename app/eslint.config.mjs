// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from "eslint-config-prettier";

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
      "vue/max-attributes-per-line": "off",
      "vue/attribute-hyphenation": "off",
      "vue/multi-word-component-names": "off",
      "vue/component-name-in-template-casing": ["warn", "PascalCase", { registeredComponentsOnly: false }],
      "vue/no-v-html": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Wants to delete attributes in PropType definitions which would lead to a whole bunch of ts problems -> keep on 'off'
      "no-unused-vars": "off",
    }
  },
  eslintConfigPrettier,
)
