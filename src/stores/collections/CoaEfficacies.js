import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CoaEfficacies extends Collection {
  displayName = 'COA Efficacies'
  route = 'coa_efficacies'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CoaEfficacies

