import RealApiProxy from './ApiProxy'
import MockApiProxy from './test/MockApiProxy'

const ApiProxy = process.env.NODE_ENV === 'production' ? RealApiProxy : MockApiProxy

export {
	ApiProxy,
}