import { AuthSession } from './collections'
import { storage } from '../utils'
import { apiSessions as api } from '../api'
import ui from './ui'

const authSession = new AuthSession(api, ui, storage)

export default authSession

