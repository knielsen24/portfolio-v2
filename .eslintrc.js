module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ],
};
