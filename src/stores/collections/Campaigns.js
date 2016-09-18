import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Campaigns extends Collection {
  displayName = 'Campaigns'
  route = 'campaigns'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Campaigns

