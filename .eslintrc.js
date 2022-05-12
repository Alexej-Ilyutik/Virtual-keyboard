/* eslint-disable linebreak-style */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
  },
  'extends': 'airbnb-base',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'settings': {
    'import/extensions': { 'js': 'always', 'json': 'never' },
  },
  'rules': {
    'quote-props': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'operator-linebreak': [
      'error',
      'after',
      { 'overrides': { '?': 'ignore', ':': 'ignore' } },
    ],
  },
};
