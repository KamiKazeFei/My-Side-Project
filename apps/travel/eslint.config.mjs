import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ]
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      "@angular-eslint/template/no-positive-tabindex": "off",
      "@angular-eslint/template/no-autofocus": "off",
      "@angular-eslint/template/mouse-events-have-key-events": "off",
      "@angular-eslint/template/click-events-have-key-events": "off",
      "@angular-eslint/template/accessibility-interactive-supports-focus": "off",
      "@angular-eslint/template/interactive-supports-focus": "off",
      "jsx-a11y/click-events-have-key-events": "off"
    },
  },
];
