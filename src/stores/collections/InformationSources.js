import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class InformationSources extends Collection {
  displayName = 'Information Sources'
  route = 'information_sources'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default InformationSources

