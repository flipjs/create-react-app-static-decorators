import { Addresses } from './collections'
import { apiAddresses as api } from '../api'
import ui from './ui'

const addresses = new Addresses(api, ui)

export default addresses

