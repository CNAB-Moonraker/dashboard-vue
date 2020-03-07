export default class Bundle {
	schemaVersion
	name
	version
	description
	invocationImages
	parameters
	definitions
	custom

	constructor(
		{
			schemaVersion,
			name,
			version,
			description,
			invocationImages,
			parameters,
			definitions,
			custom,
		}
	) {

		const missing = []

		if (!schemaVersion) missing.push('schemaVersion')
		if (!name) missing.push('name')
		if (!version) missing.push('version')
		if (!description && description !== "") missing.push('description')
		if (!invocationImages) missing.push('invocationImages')

		if (missing.length > 0) {
			let errMsg = "Invalid Bundle Object:\nError in the following keys:\n"
			missing.forEach(key => errMsg += `${key}\n`)
			throw new Error(errMsg)
		}

		this.schemaVersion = schemaVersion
		this.name = name
		this.version = version
		this.description = description
		this.invocationImages = invocationImages
		this.parameters = parameters
		this.definitions = definitions
		this.custom = custom
	}
}