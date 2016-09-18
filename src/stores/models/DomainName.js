import { observable, action, computed } from 'mobx'

class DomainName {
  id
  @observable display_name
  @observable type
  @observable value
  @observable updated_at

  constructor (domainName) {
    Object.assign(this, domainName)
  }

  @computed
  get isValid () {
    if (!this.value) return false
    if (!this.type) return false
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
      type: this.type,
      value: this.value,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      type: this.type,
      value: this.value
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
      domain_name: this.value,
      type: this.type,
      updated_at: this.updated_at
    }
  }

  static fromJS (domainName) {
    return new DomainName(domainName)
  }
}

export default DomainName

