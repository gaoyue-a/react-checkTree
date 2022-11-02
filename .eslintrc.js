// #version: 1.12.0
module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "project": "./tsconfig.ci.json",
        "sourceType": "module"
    },
    "ignorePatterns": ["/*.js", "packages/*/dist/**/*"],
    "extends": [
        require.resolve("@luban/linter")
    ],
    settings: {
        "import/resolver": {
            typescript: {
                "project": "./tsconfig.ci.json",
            }
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        }
    },
    "rules": {
        // 测试规则，如果产生大量报错，可以注释掉下面两条配置
        "camelCase": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": [
                    "classProperty",
                    "objectLiteralProperty",
                    "typeProperty",
                    "classMethod",
                    "objectLiteralMethod",
                    "typeMethod",
                    "accessor",
                    "enumMember"
                ],
                "modifiers": [
                    "requiresQuotes"
                ],
                "format": null
            },
            {
                "selector": "variable",
                "modifiers": [
                    "destructured"
                ],
                "format": null
            },
            {
                "selector": [
                    "variableLike",
                    "property",
                    "accessor"
                ],
                "format": [
                    "camelCase"
                ]
            },
            {
                "selector": [
                    "enumMember"
                ],
                "format": [
                    "UPPER_CASE"
                ]
            },
            {
                "selector": "typeLike",
                "format": [
                    "PascalCase"
                ]
            },
            {
                "selector": "variable",
                "modifiers": [
                    "const",
                    "global"
                ],
                "format": [
                    "UPPER_CASE",
                    "PascalCase",
                    "camelCase"
                ]
            },
            {
                "selector": [
                    "parameter",
                    "variable"
                ],
                "modifiers": [
                    "unused"
                ],
                "leadingUnderscore": "require",
                "format": [
                    "camelCase"
                ]
            },
            {
                "selector": [
                    "variable",
                    "parameter",
                    "property"
                ],
                "types": [
                    "function"
                ],
                "format": [
                    "PascalCase",
                    "camelCase"
                ]
            },
            {
                "selector": "method",
                "format": [
                    "PascalCase",
                    "camelCase"
                ]
            },
            {
                "selector": "function",
                "modifiers": [
                    "global"
                ],
                "format": [
                    "PascalCase",
                    "camelCase"
                ]
            },
            {
                "selector": [
                    "variable",
                    "parameter",
                    "property"
                ],
                "filter": {
                    "regex": "^(Class|Comp)",
                    "match": true
                },
                "format": [
                    "PascalCase"
                ]
            }
        ]
    }
}
