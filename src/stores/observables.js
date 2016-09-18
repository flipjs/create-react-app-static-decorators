import { Observables } from './collections'
import { apiObservables } from '../api'
import ui from './ui'

const observables = new Observables(apiObservables, ui)

export default observables

