import { InformationSource } from '../stores/models'
import { ApiInformationSources } from './models'

const URL = 'information_sources'

const apiInformationSources = new ApiInformationSources(InformationSource, URL)

export default apiInformationSources

