import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CoaTypes extends Collection {
  displayName = 'COA Types'
  route = 'coa_types'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CoaTypes

