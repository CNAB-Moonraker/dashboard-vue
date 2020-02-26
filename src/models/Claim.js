import Bundle from '@/models/Bundle'

export default class Claim {
	constructor(
		{
			name,
			revision,
			created,
			modified,
			bundle,
			result,
			parameters,
		},
		source
	) {

		if (
			!name ||
			!revision ||
			!created ||
			!modified ||
			!bundle ||
			!result ||
			!parameters
		) throw new Error(`Invalid Claim from "${source}": "${name}"`)

		try {
			this.source = source
			this.name = name
			this.revision = revision
			this.created = new Date(created)
			this.modified = new Date(modified)
			this.bundle = new Bundle(bundle)
			this.result = new CommandResult(result)
			this.parameters = parameters
		} catch (error) {
			throw new Error(`Invalid Claim from "${source}": "${name}"\n${error.message}`)
		}
	}
}

class CommandResult {
	constructor(
		{
			message,
			action,
			status,
		}
	) {

		if (
			(!message && message !== "") ||
			!action ||
			!status
		) throw new Error(`Invalid Command Result Object`)

		this.message = message
		this.action = action
		this.status = status
	}
}