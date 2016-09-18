import { Confidences } from './collections'
import { apiConfidences as api } from '../api'
import ui from './ui'

const confidences = new Confidences(api, ui)

export default confidences

