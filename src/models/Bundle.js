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

		if (
			!schemaVersion ||
			!name ||
			!version ||
			(!description && description !== "") ||
			!invocationImages ||
			!parameters ||
			!definitions ||
			!custom
		) throw new Error("Invalid Bundle Object")

		this.schemaVersion = schemaVersion
		this.name = name
		this.version = version
		this.description = description
		this.invocationImages = invocationImages
		this.parameters = parameters
		this.definitions = parameters
		this.custom = custom
	}
}