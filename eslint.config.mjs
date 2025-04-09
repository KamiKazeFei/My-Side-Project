import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ]
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
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
