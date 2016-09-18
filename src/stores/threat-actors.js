import { ThreatActors } from './collections'
import { apiThreatActors as api } from '../api'
import ui from './ui'

const threatActors = new ThreatActors(api, ui)

export default threatActors

