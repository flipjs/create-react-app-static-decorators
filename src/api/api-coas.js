import { Coa } from '../stores/models'
import { ApiCoas } from './models'

const URL = 'coas'

const apiCoas = new ApiCoas(Coa, URL)

export default apiCoas

