import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Addresses extends Collection {
  displayName = 'Addresses'
  route = 'addresses'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Addresses

