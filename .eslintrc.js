module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        TwoPayClient: true,
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        describe: 'readonly'
    },
    extends: ['plugin:react/recommended', 'standard', 'plugin:prettier/recommended', 'plugin:jest-dom/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        react: { version: 'detect' }
    },
    plugins: ['react', 'prettier', 'jest-dom'],
    rules: {
        'react/jsx-uses-react': 'error',
        curly: 'error',
        'prettier/prettier': 'error'
    }
}
