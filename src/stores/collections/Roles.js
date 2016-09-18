import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Roles extends Collection {
  displayName = 'Roles'
  route = 'roles'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Roles

