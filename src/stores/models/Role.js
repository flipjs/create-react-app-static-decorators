import { observable, action, computed } from 'mobx'

class Role {
  id
  @observable description
  @observable display_name
  @observable role
  @observable updated_at

  constructor (role) {
    Object.assign(this, role)
  }

  @computed
  get isValid () {
    if (!this.title) return false
    if (!this.short_description) return false
    if (!this.description) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      description: this.description,
      display_name: this.display_name,
      role: this.role,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      description: this.description,
      role: this.role,
      updated_at: this.updated_at
    }
  }

  toPutApi () {
    const record = this.toPostApi()
    record.id = this.id
    return record
  }

  toShow () {
    return {
      ID: this.id,
      description: this.description,
      role: this.role,
      updated_at: this.updated_at
    }
  }

  static fromJS (role) {
    return new Role(role)
  }
}

export default Role

