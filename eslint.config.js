import pluginStylistic from '@stylistic/eslint-plugin'

const GLOB_JS = '**/*.{js,mjs,cjs}'

export default [
  {
    files: [
      GLOB_JS,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      '@stylistic/indent': [
        'error',
        2,
        {
          ignoredNodes: [],
          SwitchCase: 1, // 0
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          StaticBlock: {
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: false,
        },
      ],
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1, // 2
          maxBOF: 0, // 2
          maxEOF: 0, // 0
        },
      ],
      '@stylistic/quotes': [
        'error',
        'single', // 'double'
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      '@stylistic/quote-props': [
        'error',
        'as-needed', // 'always'
      ],
      '@stylistic/semi': [
        'error',
        'never', // 'always'
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        'always',
      ],
    },
  },
]
