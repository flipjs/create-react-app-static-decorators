import { observable, action, computed } from 'mobx'

class Campaign {
  id
  @observable confidence_id
  @observable confidence_value
  @observable description
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable names
  @observable short_description
  @observable status
  @observable status_id
  @observable title
  @observable updated_at

  constructor (campaign) {
    Object.assign(this, campaign)
  }

  @computed
  get isValid () {
    if (!this.title) return false
    if (!this.short_description) return false
    if (!this.description) return false
    if (!this.names) return false
    if (!this.status_id) return false
    if (!this.confidence_id) return false
    if (!this.information_source_id) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      confidence_id: this.confidence_id,
      confidence_value: this.confidence_value,
      description: this.description,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      names: this.names,
      short_description: this.short_description,
      status: this.status,
      status_id: this.status_id,
      title: this.title,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      title: this.title,
      short_description: this.short_description,
      description: this.description,
      names: this.names,
      status_id: parseInt(this.status_id, 10),
      confidence_id: parseInt(this.confidence_id, 10),
      information_source_id: parseInt(this.information_source_id, 10)
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
      title: this.title,
      short_description: this.short_description,
      description: this.description,
      names: this.names,
      status: this.status,
      confidence: this.confidence_value,
      information_source: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (campaign) {
    return new Campaign(campaign)
  }
}

export default Campaign

