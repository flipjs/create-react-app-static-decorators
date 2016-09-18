import { IntendedEffects } from './collections'
import { apiIntendedEffects as api } from '../api'
import ui from './ui'

const intendedEffects = new IntendedEffects(api, ui)

export default intendedEffects

