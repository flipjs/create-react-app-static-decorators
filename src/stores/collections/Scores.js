import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Scores extends Collection {
  displayName = 'Scores'
  route = 'scores'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Scores

