import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Users extends Collection {
  displayName = 'Users'
  route = 'users'
  writeAccessRoles = [ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Users

