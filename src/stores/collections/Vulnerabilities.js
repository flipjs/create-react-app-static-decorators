import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Vulnerabilities extends Collection {
  displayName = 'Vulnerabilities'
  route = 'vulnerabilities'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Vulnerabilities

