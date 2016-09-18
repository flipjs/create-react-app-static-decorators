import { Configurations } from './collections'
import { apiConfigurations as api } from '../api'
import ui from './ui'

const configurations = new Configurations(api, ui)

export default configurations

