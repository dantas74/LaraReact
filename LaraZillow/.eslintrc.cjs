module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        amd: true,
        browser: true,
        es6: true,
    },
    rules: {
        indent: ['error', 2],
        quotes: ['warn', 'single'],
        semi: ['warn', 'never'],
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off'
    }
}
