import { CoaTypes } from './collections'
import { apiCoaTypes as api } from '../api'
import ui from './ui'

const coaTypes = new CoaTypes(api, ui)

export default coaTypes

