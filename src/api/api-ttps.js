import { Ttp } from '../stores/models'
import { ApiTtps } from './models'

const URL = 'ttps'

const apiTtps = new ApiTtps(Ttp, URL)

export default apiTtps

