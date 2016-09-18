// TODO: rename this module to exploitTargetConfigurations

import { Configuration } from '../stores/models'
import { ApiConfigurations } from './models'

const URL = 'exploit_target_configurations'

const apiConfigurations = new ApiConfigurations(Configuration, URL)

export default apiConfigurations

