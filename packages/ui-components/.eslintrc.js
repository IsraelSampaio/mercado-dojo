module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "camelcase": "off",
    "import/no-anonymous-default-export": "off"
  }
}