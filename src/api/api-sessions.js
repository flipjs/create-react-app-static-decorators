import { Session } from '../stores/models'
import { ApiSessions } from './models'

const URL = 'sessions'

const apiSessions = new ApiSessions(Session, URL)

export default apiSessions

