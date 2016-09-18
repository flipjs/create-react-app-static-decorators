import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Coas extends Collection {
  displayName = 'COAs'
  route = 'coas'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Coas

