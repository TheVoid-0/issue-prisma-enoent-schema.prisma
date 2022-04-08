module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDor: __dirname
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],
    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     "selector": "default",
    //     "format": ["camelCase"]
    //   },

    //   {
    //     "selector": "variable",
    //     "format": ["camelCase", "UPPER_CASE"]
    //   },
    //   {
    //     "selector": "parameter",
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "allow"
    //   },

    //   {
    //     "selector": "memberLike",
    //     "modifiers": ["private"],
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "require"
    //   },

    //   {
    //     "selector": "typeLike",
    //     "format": ["PascalCase"]
    //   },
    //   {
    //     "selector": "variable",
    //     "modifiers": ["destructured"],
    //     "format": null,
    //   },
    //   {
    //     "selector": "classProperty",
    //     "modifiers": "public",
    //     "format": null,
    //   },
    // ]
  },
};
