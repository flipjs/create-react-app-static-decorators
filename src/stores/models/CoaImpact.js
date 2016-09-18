import { observable, action, computed } from 'mobx'

class CoaImpact {
  id
  @observable confidence
  @observable confidence_id
  @observable description
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable value
  @observable value_id
  @observable updated_at

  constructor (coaImpact) {
    Object.assign(this, coaImpact)
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
      confidence: this.confidence,
      confidence_id: this.confidence_id,
      description: this.description,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      value: this.value,
      value_id: this.value_id,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      confidence_id: this.confidence_id,
      description: this.description,
      information_source_id: this.information_source_id,
      value: this.value,
      value_id: this.value_id
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
      value: this.value,
      description: this.description,
      confidence: this.confidence,
      information_source: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (coaImpact) {
    return new CoaImpact(coaImpact)
  }
}

export default CoaImpact

