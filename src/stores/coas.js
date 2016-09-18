import { Coas } from './collections'
import { apiCoas as api } from '../api'
import ui from './ui'

const coas = new Coas(api, ui)

export default coas

