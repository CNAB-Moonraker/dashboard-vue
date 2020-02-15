import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		claims: [],
		bundlesInstalled: 47,
		recentBundles: [
			{
				name: `azure-mysql`,
				action: `upgrade`,
			},
			{
				name: `cnab-dashboard`,
				action: `install`,
			},
			{
				name: `brigade`,
				action: `upgrade`,
			},
			{
				name: `jenkins`,
				action: `upgrade`,
			},
			{
				name: `jenkins-aci-connector`,
				action: `install`,
			},
			{
				name: `quickstart`,
				action: `uninstall`,
			},
		],
		mixins: {
			'kubernetes': 4,
			'terraform': 19,
			'aws': 16,
			'exec': 19,
			'azure': 20,
			'helm': 29,
		},
		installers: {
			'porter': 11,
			'duffle': 23,
			'docker app': 13,
		},
		bundleStatus: 1,
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	},
})
