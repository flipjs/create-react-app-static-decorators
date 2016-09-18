import { Indicator } from '../stores/models'
import { ApiIndicators } from './models'

const URL = 'indicators'

const apiIndicators = new ApiIndicators(Indicator, URL)

export default apiIndicators

