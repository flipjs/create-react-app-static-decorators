import { CoaImpacts } from './collections'
import { apiCoaImpacts as api } from '../api'
import ui from './ui'

const coaImpacts = new CoaImpacts(api, ui)

export default coaImpacts

