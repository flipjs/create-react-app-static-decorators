import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CoaImpacts extends Collection {
  displayName = 'COA Impacts'
  route = 'coa_impacts'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CoaImpacts

