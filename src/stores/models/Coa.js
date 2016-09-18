import { observable, action, computed } from 'mobx'

class Coa {
  id
  @observable cost
  @observable cost_id
  @observable description
  @observable display_name
  @observable efficacy
  @observable efficacy_id
  @observable impact
  @observable impact_id
  @observable information_source_id
  @observable information_source_identity
  @observable objective
  @observable short_description
  @observable stage
  @observable stage_id
  @observable title
  @observable type
  @observable type_id
  @observable updated_at

  constructor (coa) {
    Object.assign(this, coa)
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
      cost: this.cost,
      cost_id: this.cost_id,
      description: this.description,
      display_name: this.display_name,
      efficacy: this.efficacy,
      efficacy_id: this.efficacy_id,
      impact: this.impact,
      impact_id: this.impact_id,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      objective: this.objective,
      short_description: this.short_description,
      stage: this.stage,
      stage_id: this.stage_id,
      title: this.title,
      type: this.type,
      type_id: this.type_id,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      cost_id: parseInt(this.cost_id, 10),
      description: this.description,
      efficacy_id: parseInt(this.efficacy_id, 10),
      impact_id: parseInt(this.impact_id, 10),
      information_source_id: parseInt(this.information_source_id, 10),
      objective: this.objective,
      short_description: this.short_description,
      stage_id: parseInt(this.stage_id, 10),
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
      objective: this.objective,
      type: this.type,
      stage: this.stage,
      information_source: this.information_source_identity,
      impact: this.impact,
      cost: this.cost,
      efficacy: this.efficacy,
      updated_at: this.updated_at
    }
  }

  static fromJS (coa) {
    return new Coa(coa)
  }
}

export default Coa

