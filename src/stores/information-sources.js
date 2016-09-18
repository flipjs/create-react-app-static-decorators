import { InformationSources } from './collections'
import { apiInformationSources as api } from '../api'
import ui from './ui'

const informationSources = new InformationSources(api, ui)

export default informationSources

