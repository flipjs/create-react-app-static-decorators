import { CoaStages } from './collections'
import { apiCoaStages as api } from '../api'
import ui from './ui'

const coaStages = new CoaStages(api, ui)

export default coaStages

