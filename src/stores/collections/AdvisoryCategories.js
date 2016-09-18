import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class AdvisoryCategories extends Collection {
  displayName = 'Advisory Categories'
  route = 'advisory_categories'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default AdvisoryCategories

