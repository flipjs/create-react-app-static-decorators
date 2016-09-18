import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class Observables extends Collection {
  displayName = 'Observables'
  route = 'observables'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default Observables

