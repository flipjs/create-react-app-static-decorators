import { Roles } from './collections'
import { apiRoles as api } from '../api'
import ui from './ui'

const roles = new Roles(api, ui)

export default roles

