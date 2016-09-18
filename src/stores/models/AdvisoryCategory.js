import { observable, action, computed } from 'mobx'

class AdvisoryCategory {
  id
  @observable description
  @observable display_name
  @observable value
  @observable updated_at

  constructor (advisoryCategory) {
    Object.assign(this, advisoryCategory)
  }

  @computed
  get isValid () {
    if (!this.value) return false
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
      value: this.value,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      description: this.description,
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
      category: this.value,
      description: this.description
    }
  }

  static fromJS (advisoryCategory) {
    return new AdvisoryCategory(advisoryCategory)
  }
}

export default AdvisoryCategory

