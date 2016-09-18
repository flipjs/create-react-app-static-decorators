import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Ttps extends Collection {
  displayName = 'TTPs'
  route = 'ttps'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Ttps

