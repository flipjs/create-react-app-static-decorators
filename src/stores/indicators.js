import { Indicators } from './collections'
import { apiIndicators as api } from '../api'
import ui from './ui'

const indicators = new Indicators(api, ui)

export default indicators

