import { observable, action, computed } from 'mobx'

class ThreatActor {
  id
  @observable confidence_id
  @observable confidence_value
  @observable description
  @observable information_source_id
  @observable information_source_identity
  @observable motivation
  @observable motivation_id
  @observable planning_and_operational_support
  @observable planning_and_operational_support_id
  @observable short_description
  @observable sophistication
  @observable sophistication_id
  @observable title
  @observable type
  @observable type_id
  @observable updated_at

  constructor (threatActor) {
    Object.assign(this, threatActor)
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
      confidence_id: this.confidence_id,
      confidence_value: this.confidence_value,
      description: this.description,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      motivation: this.motivation,
      motivation_id: this.motivation_id,
      planning_and_operational_support: this.planning_and_operational_support,
      planning_and_operational_support_id: this.planning_and_operational_support_id,
      short_description: this.short_description,
      sophistication: this.sophistication,
      sophistication_id: this.sophistication_id,
      title: this.title,
      type: this.type,
      type_id: this.type_id,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      confidence_id: parseInt(this.confidence_id, 10),
      description: this.description,
      information_source_id: parseInt(this.information_source_id, 10),
      motivation_id: parseInt(this.motivation_id, 10),
      planning_and_operational_support_id: parseInt(this.planning_and_operational_support_id, 10),
      short_description: this.short_description,
      sophistication_id: parseInt(this.sophistication_id, 10),
      title: this.title,
      type_id: parseInt(this.type_id, 10)
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
      confidence: this.confidence_value,
      type: this.type,
      motivation: this.motivation,
      sophistication: this.sophistication,
      planning_and_operational_support: this.planning_and_operational_support,
      information_source: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (threatActor) {
    return new ThreatActor(threatActor)
  }
}

export default ThreatActor

