import { Statements } from './collections'
import { apiStatements as api } from '../api'
import ui from './ui'

const statements = new Statements(api, ui)

export default statements

