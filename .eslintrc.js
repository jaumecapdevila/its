module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
  },
  rules: {
    "no-param-reassign": 0
  }
};
