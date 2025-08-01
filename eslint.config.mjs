import { FlatCompat } from '@eslint/eslintrc'
import prettierConfig from 'eslint-config-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'error',
      'no-console': 'warn',
      eqeqeq: 'warn',
      'no-else-return': 'warn',
      'no-var': 'warn',
      'no-await-in-loop': 'error',
      'no-duplicate-imports': 'error',
      'prefer-const': 'warn',
      camelcase: ['warn', { properties: 'never' }],
    },
  },
]

export default eslintConfig
