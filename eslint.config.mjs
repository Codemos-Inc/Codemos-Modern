import js from "@eslint/js";
import tslintPlugin from "@typescript-eslint/eslint-plugin";
import tslintParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import tslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tslint.configs.recommended,
  prettier,
  {
    files: ["source/**/*.ts"],
    ignores: ["**/*.config.js", "out/**", "**/esbuild.js"],
    languageOptions: {
      parser: tslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tslintPlugin,
    },
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
    },
  },
];
