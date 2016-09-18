import { AdvisoryCategories } from './collections'
import { apiAdvisoryCategories as api } from '../api'
import ui from './ui'

const advisoryCategories = new AdvisoryCategories(api, ui)

export default advisoryCategories

