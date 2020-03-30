import Claim from '@/models/Claim'
import testdata from './test-data.json'

export default class ApiProxy {
	/**
	 * @returns an object where the key is the installer (i.e. Porter, Docker App, etc.) and each value is an array of claims associated with that installer
	 */
	static async getClaims() {
		try {
			const data = testdata
			const claims = {}
			for (const key of Object.keys(data)) {
				const arr = data[key]
				claims[key] = arr.map(claim => new Claim(claim, key))
			}
			return claims
		} catch (error) {
			console.error(error)
		}
	}
}
