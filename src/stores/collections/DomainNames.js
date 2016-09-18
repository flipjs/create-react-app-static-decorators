import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class DomainNames extends Collection {
  displayName = 'Domain Names'
  route = 'domain_names'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default DomainNames

