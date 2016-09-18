import { CoaCosts } from './collections'
import { apiCoaCosts as api } from '../api'
import ui from './ui'

const coaCosts = new CoaCosts(api, ui)

export default coaCosts

