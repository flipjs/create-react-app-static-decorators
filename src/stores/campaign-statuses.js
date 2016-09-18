import { CampaignStatuses } from './collections'
import { apiCampaignStatuses as api } from '../api'
import ui from './ui'

const campaignStatuses = new CampaignStatuses(api, ui)

export default campaignStatuses

