import { observable, action, computed } from 'mobx'

class Confidence {
  id
  @observable confidence_value
  @observable confidence_value_id
  @observable description
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable updated_at

  constructor (confidence) {
    Object.assign(this, confidence)
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
      confidence_value: this.confidence_value,
      confidence_value_id: this.confidence_value_id,
      description: this.description,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      confidence_value: this.confidence_value,
      confidence_value_id: parseInt(this.confidence_value_id, 10),
      description: this.description,
      information_source_id: parseInt(this.information_source_id, 10),
      information_source_identity: this.information_source_identity,
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
      confidence_value: this.confidence_value,
      confidence_value_id: this.confidence_value_id,
      description: this.description,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (confidence) {
    return new Confidence(confidence)
  }
}

export default Confidence

