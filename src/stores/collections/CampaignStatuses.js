import Collection from './base/Collection'
import { ROLES } from '../../constants'

export class CampaignStatuses extends Collection {
  displayName = 'Campaign Statuses'
  route = 'campaign_statuses'
  writeAccessRoles = [ROLES.CURATOR, ROLES.SUPER_ADMIN, ROLES.DEVELOPER]
}

export default CampaignStatuses

