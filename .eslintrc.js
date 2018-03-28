module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'no-debugger': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/href-no-hash': 0,
    "jsx-a11y/anchor-is-valid": 0,
    'react/jsx-filename-extension': 0,
  },
  globals: {
    window: true,
    document: true,
    Headers: true,
  },
};
