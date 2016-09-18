import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Advisories extends Collection {
  displayName = 'Advisories'
  route = 'advisories'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Advisories

