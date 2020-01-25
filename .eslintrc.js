module.exports = {
	root: true,
	env: {
		node: true
	},
	"extends": [
		"plugin:vue/essential",
		"eslint:recommended",
	],
	plugins: [
		"import-quotes"
	],
	rules: {
		// "no-console": process.env.NODE_ENV === "production" ? "error" : 0,
		// "no-debugger": process.env.NODE_ENV === "production" ? "error" : 0,
		"array-bracket-newline": [
			1,
			{
				"multiline": true
			}
		],
		"array-bracket-spacing": [
			1,
			"never"
		],
		"array-element-newline": 0,
		"block-spacing": 1,
		"brace-style": 0,
		"comma-dangle": [
			1,
			"always-multiline"
		],
		"constructor-super": 1,
		"curly": [
			1,
			"multi-or-nest"
		],
		"dot-location": [
			1,
			"property"
		],
		"eqeqeq": [
			1,
			"always"
		],
		"func-call-spacing": 1,
		"indent": [
			1,
			"tab"
		],
		"jsx-quotes": [
			1,
			"prefer-single"
		],
		"no-console": 0,
		"no-extra-bind": 1,
		"no-multi-spaces": 1,
		"no-multiple-empty-lines": [
			1,
			{
				"max": 1,
				"maxEOF": 1
			}
		],
		"no-trailing-spaces": 1,
		"no-unneeded-ternary": 1,
		"no-unused-vars": 0,
		"no-var": 1,
		"object-shorthand": 1,
		"prefer-arrow-callback": 1,
		"prefer-const": 1,
		"prefer-template": 1,
		"quotes": 0,
		"semi": 0,
		"spaced-comment": [
			1,
			"always"
		],
		"template-curly-spacing": [
			1,
			"never"
		],
		"yoda": [
			1,
			"never"
		],
		// Import Quotes
		"import-quotes/import-quotes": [
			1,
			"single"
		],
		// Vue Rules
		"vue/html-indent": [
			1,
			"tab"
		],
		"vue/html-quotes": [
			1,
			"single"
		],
		"vue/script-indent": [
			1,
			"tab",
			{
				"baseIndent": 1,
				"switchCase": 1,
			}
		],
		"vue/v-bind-style": [
			1,
			"shorthand"
		],
		"vue/v-on-style": [
			1,
			"shorthand"
		],
	},
	"overrides": [
		{
			"files": ["*.vue"],
			"rules": {
				"indent": 0
			}
		}
	],
	parserOptions: {
		parser: "@typescript-eslint/parser"
	}
}
