import Vue from 'vue'
import Vuex from 'vuex'
import { ApiProxy } from '../services'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lastUpdated: Date.now(),
		claims: {},
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
		bundleStatus: {
			'In Progress': 1,
		},
	},
	mutations: {
		setClaims(state, claims) {
			state.claims = claims
			state.lastUpdated = Date.now()

			// const claimsArr = []
			// for (const key of Object.keys(claims)) {
			// 	state.installers[key] = claims[key].length
			// 	claimsArr.push(...claims[key])
			// }

			// state.bundlesInstalled = claimsArr.length
		},
	},
	actions: {
		async getClaims({ commit }) {
			commit(`setClaims`, await ApiProxy.getClaims())
		},
	},
	getters: {
		allClaims: ({ claims }) => {
			const claimsArr = []
			for (const key of Object.keys(claims)) claimsArr.push(...claims[key])
			return claimsArr
		},
	},
})
