module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],

  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: false,
        style: true
      },
      fileInfoOptions: {
        withNodeModules: false
      }
    }
  },
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        printWidth: 130,
        bracketSpacing: true
      }
    ],
    'no-console': 0,
    'space-before-function-paren': ['error', 'always'],
    'vue/require-prop-types': 0,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    semi: ['error', 'never'],
    'guard-for-in': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-shadow': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'config'] }],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 0,
    'no-restricted-globals': 0,
    'linebreak-style': ['error', 'unix'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 4
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: ['viewBox']
      }
    ],
    'no-debugger': 0,
    'max-len': ['error', { code: 130 }],
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'vue/multi-word-component-names': 'off',
    'no-tabs': 'off'
  }
}
