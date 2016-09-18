import { Statement } from '../stores/models'
import { ApiStatements } from './models'

const URL = 'statements'

const apiStatements = new ApiStatements(Statement, URL)

export default apiStatements

