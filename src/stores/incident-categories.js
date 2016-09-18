import { IncidentCategories } from './collections'
import { apiIncidentCategories as api } from '../api'
import ui from './ui'

const incidentCategories = new IncidentCategories(api, ui)

export default incidentCategories

