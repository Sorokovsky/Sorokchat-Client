import { FlatCompat } from '@eslint/eslintrc';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript'],
    }),
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
        },
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports', // or 'inline'
                    fixStyle: 'separate-type-imports', // or 'inline-type-imports'
                },
            ],
        },
    },
];