import Vue from 'vue'
import Vuex from 'vuex'
import { ApiProxy } from '../services'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lastUpdated: Date.now(),
		claims: {},
	},
	mutations: {
		setClaims(state, claims) {
			state.claims = claims
			state.lastUpdated = Date.now()
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
