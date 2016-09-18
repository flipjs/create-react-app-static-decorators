import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Indicators extends Collection {
  displayName = 'Indicators'
  route = 'indicators'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Indicators

