import js from "@eslint/js";
import globals from "globals";
// import eslintConfigPrettier from "eslint-config-prettier";
import {
    eslintConfigPrettier
} from "eslint-config-prettier/recommanded";
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    //flat config array of many configs
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            indent: ["warn", 4],
        },
        files: ["**/*.js", "**/*.jsx"],
    },
    //   eslintConfigPrettier,

];