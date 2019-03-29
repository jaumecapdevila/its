module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-param-reassign': 0,
  },
  plugins: ['jest'],
};
