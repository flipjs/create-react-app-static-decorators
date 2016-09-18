import { Campaigns } from './collections'
import { apiCampaigns } from '../api'
import ui from './ui'

const campaigns = new Campaigns(apiCampaigns, ui)

export default campaigns

