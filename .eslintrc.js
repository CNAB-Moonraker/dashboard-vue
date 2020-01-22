module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard',
		'@vue/typescript'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'no-tabs': 'off',
		'indent': [
			'warn',
			'tab',
		],
		'semi': [
			'warn',
			'never',
		],
		'linebreak-style': 'off',
		'vue/no-unused-components': 'warn',
		'vue/no-unused-vars': 'warn',
		'vue/html-closing-bracket-newline': 'warn',
		'vue/html-closing-bracket-spacing': 'warn',
		'vue/html-end-tags': 'error',
		'vue/html-indent': [
			'warn',
			'tab',
		],
		'vue/script-indent': [
			'warn',
			'tab',
		],
		'vue/html-quotes': [
			'warn',
			'single',
		],
		'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
		'vue/attributes-order': 'warn',
		'vue/no-confusing-v-for-v-if': 'warn',
		'vue/no-v-html': 'error',
		'vue/order-in-components': 'warn',
		'vue/this-in-template': 'error',
		'vue/eqeqeq': 'warn',
		'vue/match-component-file-name': 'error',
		'vue/script-indent': [
			'warn',
			'tab'
		],
		'no-mixed-spaces-and-tabs': [
			'warn',
			'smart-tabs',
		],
		'vue/html-self-closing': 'off',
		'vue/max-attributes-per-line': 'off',
		'es-beautifier/multiline-array-elements': 'off',
		'space-before-function-paren': 'off'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
