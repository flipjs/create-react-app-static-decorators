import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Incidents extends Collection {
  displayName = 'Incidents'
  route = 'incidents'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Incidents

