import { CoaCost } from '../stores/models'
import { ApiCoaCosts } from './models'

const URL = 'coa_costs'

const apiCoaCosts = new ApiCoaCosts(CoaCost, URL)

export default apiCoaCosts

