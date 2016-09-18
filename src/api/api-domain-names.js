import { DomainName } from '../stores/models'
import { ApiDomainNames } from './models'

const URL = 'domain_names'

const apiDomainNames = new ApiDomainNames(DomainName, URL)

export default apiDomainNames

