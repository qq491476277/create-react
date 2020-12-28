module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    
    "extends": [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        // 专门支持了 eslint-plugin-react
        'prettier/react',
        // 专门支持了 @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
    },
    'import/extensions': [
        '2',
        'ignorePackages',
        {
            ts: 'never',
            tsx: 'never',
            json: 'never',
            js: 'never'
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                // 指定 eslint-plugin-import 解析的后缀名
                extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            typescript: {
                // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
                // 目前用不着，先注释掉
                // directory: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],

            }
        },
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'import/no-duplicates': OFF,
            },
        },
        {
            files: ['scripts/**/*.ts'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],


};
