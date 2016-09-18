import { observable, action, computed } from 'mobx'

class User {
  id
  @observable display_name
  @observable email
  @observable fullname
  @observable group_id
  @observable group_name
  @observable password
  @observable roles = []
  @observable username
  @observable updated_at

  constructor (user) {
    Object.assign(this, user)
  }

  @computed
  get isValid () {
    if (!this.username) return false
    if (!this.fullname) return false
    if (!this.email) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      display_name: this.display_name,
      email: this.email,
      fullname: this.fullname,
      group_id: this.group_id,
      group_name: this.group_name,
      roles: this.roles.map(role => role),
      username: this.username,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      password: this.password
    }
  }

  toPutApi () {
    const record = this.toPostApi()
    record.id = this.id
    return record
  }

  toShow () {
    return {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      group: this.group_name,
      updated_at: this.updated_at
    }
  }

  static fromJS (user) {
    return new User(user)
  }
}

export default User

