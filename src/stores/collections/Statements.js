import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Statements extends Collection {
  displayName = 'Statements'
  route = 'statements'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Statements

