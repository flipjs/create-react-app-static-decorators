import { observable, action, computed } from 'mobx'

class IntendedEffect {
  id
  @observable confidence
  @observable confidence_id
  @observable description
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable value
  @observable updated_at

  constructor (intendedEffect) {
    Object.assign(this, intendedEffect)
  }

  @computed
  get isValid () {
    if (!this.value) return false
    if (!this.description) return false
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
      confidence: this.confidence,
      confidence_id: this.confidence_id,
      description: this.description,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      value: this.value,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      confidence_id: parseInt(this.confidence_id, 10),
      description: this.description,
      information_source_id: parseInt(this.information_source_id, 10),
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
      intended_effect: this.value,
      description: this.description,
      confidence: this.confidence,
      information_source: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (intendedEffect) {
    return new IntendedEffect(intendedEffect)
  }
}

export default IntendedEffect

