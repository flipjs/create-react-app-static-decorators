import { DomainNames } from './collections'
import { apiDomainNames as api } from '../api'
import ui from './ui'

const domainNames = new DomainNames(api, ui)

export default domainNames

