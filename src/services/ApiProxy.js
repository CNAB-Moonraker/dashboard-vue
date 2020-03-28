import Claim from '@/models/Claim'

export default class ApiProxy {
	/**
	 * @returns an object where the key is the installer (i.e. Porter, Docker App, etc.) and each value is an array of claims associated with that installer
	 */
	static async getClaims() {
		try {
			const data = await fetch(`/claims?_t=${Date.now()}`).then(r => r.json())
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
