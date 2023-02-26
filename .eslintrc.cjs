/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:storybook/recommended", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: "latest"
  }
};