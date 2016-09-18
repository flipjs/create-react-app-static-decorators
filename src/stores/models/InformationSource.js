import { observable, action, computed } from 'mobx'

class InformationSource {
  id
  @observable contributors
  @observable display_name
  @observable identity
  @observable references
  @observable tools
  @observable updated_at

  constructor (informationSource) {
    Object.assign(this, informationSource)
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
      contributors: this.contributors,
      display_name: this.display_name,
      identity: this.identity,
      references: this.references,
      tools: this.tools,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      contributors: this.contributors,
      identity: this.identity,
      references: this.references,
      tools: this.tools,
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
      contributors: this.contributors,
      identity: this.identity,
      references: this.references,
      tools: this.tools,
      updated_at: this.updated_at
    }
  }

  static fromJS (informationSource) {
    return new InformationSource(informationSource)
  }
}

export default InformationSource

