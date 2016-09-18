import { observable, action, computed } from 'mobx'

class Indicator {
  id
  @observable confidence
  @observable description
  @observable display_name
  @observable kill_chain_phases
  @observable likely_impact
  @observable producer
  @observable short_description
  @observable sighting
  @observable test_mechanism
  @observable title
  @observable type
  @observable valid_time_position
  @observable updated_at

  constructor (indicator) {
    Object.assign(this, indicator)
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
      confidence: this.confidence,
      description: this.description,
      display_name: this.display_name,
      kill_chain_phases: this.kill_chain_phases,
      likely_impact: this.likely_impact,
      producer: this.producer,
      short_description: this.short_description,
      sighting: this.sighting,
      test_mechanism: this.test_mechanism,
      title: this.title,
      type: this.type,
      valid_time_position: this.valid_time_position,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      confidence: this.confidence,
      description: this.description,
      kill_chain_phases: this.kill_chain_phases,
      likely_impact: this.likely_impact,
      producer: this.producer,
      short_description: this.short_description,
      sighting: this.sighting,
      test_mechanism: this.test_mechanism,
      title: this.title,
      type: this.type,
      updated_at: this.updated_at,
      valid_time_position: this.valid_time_position
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
      confidence: this.confidence,
      description: this.description,
      kill_chain_phases: this.kill_chain_phases,
      likely_impact: this.likely_impact,
      producer: this.producer,
      short_description: this.short_description,
      sighting: this.sighting,
      test_mechanism: this.test_mechanism,
      title: this.title,
      type: this.type,
      valid_time_position: this.valid_time_position,
      updated_at: this.updated_at
    }
  }

  static fromJS (indicator) {
    return new Indicator(indicator)
  }
}

export default Indicator

