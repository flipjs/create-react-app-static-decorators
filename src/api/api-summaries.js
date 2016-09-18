import { Summaries } from '../stores/models'
import { ApiSummaries } from './models'

const URL = 'summaries'

const apiSummaries = new ApiSummaries(Summaries, URL)

export default apiSummaries

