import { Scores } from './collections'
import { apiScores as api } from '../api'
import ui from './ui'

const scores = new Scores(api, ui)

export default scores

