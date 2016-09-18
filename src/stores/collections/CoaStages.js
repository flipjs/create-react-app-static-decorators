import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CoaStages extends Collection {
  displayName = 'COA Stages'
  route = 'coa_stages'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CoaStages

