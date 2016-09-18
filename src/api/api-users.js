import { User } from '../stores/models'
import { ApiUsers } from './models'

const URL = 'users'

const apiUsers = new ApiUsers(User, URL)

export default apiUsers

