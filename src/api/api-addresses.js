import { Address } from '../stores/models'
import { ApiAddresses } from './models'

const URL = 'addresses'

const apiAddresses = new ApiAddresses(Address, URL)

export default apiAddresses

