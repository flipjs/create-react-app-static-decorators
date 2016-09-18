import { CoaImpact } from '../stores/models'
import { ApiCoaImpacts } from './models'

const URL = 'coa_impacts'

const apiCoaImpacts = new ApiCoaImpacts(CoaImpact, URL)

export default apiCoaImpacts

