import { Observable } from '../stores/models'
import { ApiObservables } from './models'

const URL = 'observables'

const apiObservables = new ApiObservables(Observable, URL)

export default apiObservables

