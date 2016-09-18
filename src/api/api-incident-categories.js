import { IncidentCategory } from '../stores/models'
import { ApiIncidentCategories } from './models'

const URL = 'incident_categories'

const apiIncidentCategories = new ApiIncidentCategories(IncidentCategory, URL)

export default apiIncidentCategories

