import { observable, computed, action } from 'mobx'
import { ROLES } from '../../constants'

const ADMIN_ROLE_ID = ROLES.ADMIN
const CURATOR_ROLE_ID = ROLES.CURATOR

export class AuthSession {
  api
  ui
  storage
  @observable error = null
  @observable expires = null
  @observable group_id = null
  @observable group_name = null
  @observable isFetching = false
  @observable roles = []
  @observable token = null
  @observable user_id = null
  @observable username = null

  constructor (api, ui, storage) {
    Object.assign(this, {api}, {ui}, {storage})
  }

  @computed
  get isAdmin () {
    return this.roles.includes(ADMIN_ROLE_ID)
  }

  get isCurator () {
    return this.roles.includes(CURATOR_ROLE_ID)
  }

  @computed
  get isAuthenticated () {
    return !!this.token
  }

  @action
  create (credentials) {
    this.beforeFetch()
    return this.api.create(credentials)
      .then(action('create.resolved', session => {
        this.setSession(session)
        this.afterFetch()
        return Promise.resolve(session)
      }))
      .catch(action('create.rejected', error => {
        this.setSessionError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  removeSession () {
    this.clearSession()
    this.storage.removeSession()
  }

  @action
  setSession (session) {
    Object.assign(this, session)
    this.error = null
    this.storage.setSession(session)
  }

  @action
  setSessionError (error) {
    this.removeSession()
    this.error = error
  }

  @action
  setSessionFromStorage (session) {
    Object.assign(this, session)
    this.error = null
  }

  // get session from storage and validate
  @action
  validateFromStorage () {
    const session = this.fromStorage()
    if (session && (new Date(session.expires) > Date.now())) {
      // set session from storage initially
      this.setSessionFromStorage(session)
      // then verify session's integrity immediately
      this.api.fetch(session.token)
        .then(session => {
          this.setSession(session)
        })
        .catch(error => {
          this.setSessionError(error)
        })
    } else {
    // if no session found or invalid
      this.removeSession()
    }
  }

  afterFetch () {
    this.isFetching = false
    this.ui.decrementHttpCount()
  }

  beforeFetch () {
    this.isFetching = true
    this.ui.incrementHttpCount()
  }

  clearSession () {
    this.error = null
    this.expires = null
    this.roles = []
    this.token = null
    this.user_id = null
    this.username = null
  }

  fromStorage () {
    return this.storage.getSession()
  }

  toJS () {
    return {
      error: this.error,
      expires: this.expires,
      group_id: this.group_id,
      group_name: this.group_name,
      isFetching: this.isFetching,
      roles: this.roles.map(role => role),
      token: this.token,
      user_id: this.user_id,
      username: this.username
    }
  }
}

export default AuthSession

