import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CoaCosts extends Collection {
  displayName = 'COA Costs'
  route = 'coa_costs'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CoaCosts

