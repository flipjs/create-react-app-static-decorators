import { Score } from '../stores/models'
import { ApiScores } from './models'

const URL = 'scores'

const apiScores = new ApiScores(Score, URL)

export default apiScores

