module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true,
		"cypress/globals" : true
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module'
	},
	plugins: [
		"cypress"
	],
	rules: {
		"no-console": "off",
		"indent": ["error", 4],
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"standard/no-callback-literal": 0
	}
}