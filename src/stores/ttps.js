import { Ttps } from './collections'
import { apiTtps as api } from '../api'
import ui from './ui'

const ttps = new Ttps(api, ui)

export default ttps

