import { CoaEfficacy } from '../stores/models'
import { ApiCoaEfficacies } from './models'

const URL = 'coa_efficacys'

const apiCoaEfficacies = new ApiCoaEfficacies(CoaEfficacy, URL)

export default apiCoaEfficacies

