import { Incidents } from './collections'
import { apiIncidents as api } from '../api'
import ui from './ui'

const incidents = new Incidents(api, ui)

export default incidents

