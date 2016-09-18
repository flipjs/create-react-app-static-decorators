import { Role } from '../stores/models'
import { ApiRoles } from './models'

const URL = 'roles'

const apiRoles = new ApiRoles(Role, URL)

export default apiRoles

