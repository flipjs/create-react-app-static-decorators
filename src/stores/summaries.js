import { Summaries } from './collections'
import { apiSummaries as api } from '../api'
import ui from './ui'

const summaries = new Summaries(api, ui)

export default summaries

