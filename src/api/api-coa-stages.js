import { CoaStage } from '../stores/models'
import { ApiCoaStages } from './models'

const URL = 'coa_stages'

const apiCoaStages = new ApiCoaStages(CoaStage, URL)

export default apiCoaStages

