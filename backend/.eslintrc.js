module.exports = {
    "extends": "./node_modules/eslint-config-google/index.js",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "rules": {
        "new-cap": 0,
        "max-len": [2, 128, 4, {"ignoreUrls": true}]
    }
};