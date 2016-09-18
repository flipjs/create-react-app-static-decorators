import { observable, action, computed } from 'mobx'

class Configuration {
  id
  @observable cce_id
  @observable description
  @observable display_name
  @observable short_description

  constructor (configuration) {
    Object.assign(this, configuration)
  }

  @computed
  get isValid () {
    if (!this.cce_id) return false
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
      cce_id: this.cce_id,
      description: this.description,
      display_name: this.display_name,
      short_description: this.short_description
    }
  }

  toPostApi () {
    return {
      cce_id: this.cce_id,
      description: this.description,
      short_description: this.short_description
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
      cce_id: this.cce_id,
      short_description: this.short_description,
      description: this.description
    }
  }

  static fromJS (configuration) {
    return new Configuration(configuration)
  }
}

export default Configuration

