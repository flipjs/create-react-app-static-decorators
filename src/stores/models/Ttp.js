import { observable, action, computed } from 'mobx'

class Ttp {
  id
  @observable behaviours
  @observable behaviours_id
  @observable description
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable resources
  @observable resources_id
  @observable short_description
  @observable title
  @observable victim_targeting
  @observable victim_targeting_id
  @observable updated_at

  constructor (ttp) {
    Object.assign(this, ttp)
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
      behaviours: this.behaviours,
      behaviours_id: this.behaviours_id,
      description: this.description,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      resources: this.resources,
      resources_id: this.resources_id,
      short_description: this.short_description,
      title: this.title,
      victim_targeting: this.victim_targeting,
      victim_targeting_id: this.victim_targeting_id,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      behaviours_id: parseInt(this.behaviours_id, 10),
      description: this.description,
      information_source_id: parseInt(this.information_source_id, 10),
      resources_id: parseInt(this.resources_id, 10),
      short_description: this.short_description,
      title: this.title,
      victim_targeting_id: parseInt(this.victim_targeting_id, 10)
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
      behaviours: this.behaviours,
      victim_targeting: this.victim_targeting,
      resources: this.resources,
      information_source: this.information_source_identity,
      updated_at: this.updated_at
    }
  }

  static fromJS (ttp) {
    return new Ttp(ttp)
  }
}

export default Ttp

