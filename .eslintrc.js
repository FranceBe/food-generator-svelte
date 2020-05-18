module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'svelte3',
    'jest'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: [
    "eslint:recommended",
  ],
  rules: {
    semi: [2, "never"],
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "all" }],
    "max-len": [
      "error",
      {
        "code": 110
      }
    ],
    "no-multi-spaces": "error",
  },
  settings: {
    "import/core-modules": ["svelte"]
  }
};
