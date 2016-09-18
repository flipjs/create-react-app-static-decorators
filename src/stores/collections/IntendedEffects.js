import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class IntendedEffects extends Collection {
  displayName = 'Intended Effects'
  route = 'intended_effects'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default IntendedEffects

