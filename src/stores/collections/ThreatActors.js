import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class ThreatActors extends Collection {
  displayName = 'Threat Actors'
  route = 'threat_actors'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default ThreatActors

