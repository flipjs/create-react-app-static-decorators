import { Campaign } from '../stores/models'
import { ApiCampaigns } from './models'

const URL = 'campaigns'

const apiCampaigns = new ApiCampaigns(Campaign, URL)

export default apiCampaigns

