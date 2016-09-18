import { Users } from './collections'
import { apiUsers as api } from '../api'
import ui from './ui'

const users = new Users(api, ui)

export default users

