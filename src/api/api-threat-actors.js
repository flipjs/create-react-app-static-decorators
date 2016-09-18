import { ThreatActor } from '../stores/models'
import { ApiThreatActors } from './models'

const URL = 'threat_actors'

const apiThreatActors = new ApiThreatActors(ThreatActor, URL)

export default apiThreatActors

