import { Incident } from '../stores/models'
import { ApiIncidents } from './models'

const URL = 'incidents'

const apiIncidents = new ApiIncidents(Incident, URL)

export default apiIncidents

