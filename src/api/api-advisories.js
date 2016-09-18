import { Advisory } from '../stores/models'
import { ApiAdvisories } from './models'

const URL = 'advisories'

const apiAdvisories = new ApiAdvisories(Advisory, URL)

export default apiAdvisories

