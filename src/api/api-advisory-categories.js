import { AdvisoryCategory } from '../stores/models'
import { ApiAdvisoryCategories } from './models'

const URL = 'advisory_categories'

const apiAdvisoryCategories = new ApiAdvisoryCategories(AdvisoryCategory, URL)

export default apiAdvisoryCategories

