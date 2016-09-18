import { CoaEfficacies } from './collections'
import { apiCoaEfficacies as api } from '../api'
import ui from './ui'

const coaEfficacies = new CoaEfficacies(api, ui)

export default coaEfficacies

