import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Confidences extends Collection {
  displayName = 'Confidences'
  route = 'confidences'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Confidences

