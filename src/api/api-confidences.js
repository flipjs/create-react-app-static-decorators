import { Confidence } from '../stores/models'
import { ApiConfidences } from './models'

const URL = 'confidences'

const apiConfidences = new ApiConfidences(Confidence, URL)

export default apiConfidences

