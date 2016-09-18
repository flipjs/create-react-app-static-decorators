import { Advisories } from './collections'
import { apiAdvisories as api } from '../api'
import ui from './ui'

const advisories = new Advisories(api, ui)

export default advisories

