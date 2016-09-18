import { CoaType } from '../stores/models'
import { ApiCoaTypes } from './models'

const URL = 'coa_types'

const apiCoaTypes = new ApiCoaTypes(CoaType, URL)

export default apiCoaTypes

