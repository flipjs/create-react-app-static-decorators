import { observable, action, computed } from 'mobx'

class CampaignStatus {
  id
  @observable description
  @observable display_name
  @observable status
  @observable updated_at

  constructor (record) {
    Object.assign(this, record)
  }

  @computed
  get isValid () {
    if (!this.status) return false
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
      status: this.status,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      description: this.description,
      status: this.status,
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
      status: this.status,
      description: this.description,
      updated_at: this.updated_at
    }
  }

  static fromJS (record) {
    return new CampaignStatus(record)
  }
}

export default CampaignStatus
