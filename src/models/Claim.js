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

		const missing = []

		if (!name) missing.push('name')
		if (!revision) missing.push('revision')
		if (!created) missing.push('created')
		if (!modified) missing.push('modified')
		if (!bundle) missing.push('bundle')
		if (!result) missing.push('result')

		if (missing.length){
			let errMsg = `Invalid Claim from "${source}":\nError in the following keys:\n`
			missing.forEach(key => errMsg += `${key}\n`)
			throw new Error(errMsg)
		}

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
			throw new Error(`Invalid Key from "${source}": "${name}"\n${error.message}`)
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