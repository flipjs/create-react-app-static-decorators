import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Configurations extends Collection {
  displayName = 'Configurations'
  route = 'configurations'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Configurations

