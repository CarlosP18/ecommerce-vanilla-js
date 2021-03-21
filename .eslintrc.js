/* eslint-disable no-trailing-spaces */

module.exports = { 
    env: { 
        browser: true, 
        node: true, 
        es2020: true, 
    }, 
    extends: ['airbnb-base', 'prettier'], 
    parserOptions: { 
        sourceType: 'module', 
        ecmaVersion: 11, 
    },
    rules: {
        "strict":0,
        "no-unused-vars": 0,
        "no-console": 1,
        "no-mixed-spaces-and-tabs": 0,
        "no-debugger": 0, 
        "semi": ["error", "always"],
        "allowImportExportEverywhere": false,
        "indent": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "comma-dangle": [1, { //when to use the last comma
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore",
        }],
    },
}
