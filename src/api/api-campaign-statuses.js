import { CampaignStatus } from '../stores/models'
import { ApiCampaignStatuses } from './models'

const URL = 'campaign_statuses'

const apiCampaignStatuses = new ApiCampaignStatuses(CampaignStatus, URL)

export default apiCampaignStatuses

