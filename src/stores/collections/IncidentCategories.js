import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class IncidentCategories extends Collection {
  displayName = 'Incident Categories'
  route = 'incident_categories'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default IncidentCategories

