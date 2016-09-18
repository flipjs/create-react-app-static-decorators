import { observable, action, computed } from 'mobx'

class Statement {
  id
  @observable confidence
  @observable description
  @observable display_name
  @observable source
  @observable updated_at
  @observable value

  constructor (statement) {
    Object.assign(this, statement)
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
      source: this.source,
      updated_at: this.updated_at,
      value: this.value
    }
  }

  toPostApi () {
    return {
      confidence: this.confidence,
      description: this.description,
      source: this.source,
      updated_at: this.updated_at,
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
      confidence: this.confidence,
      description: this.description,
      source: this.source,
      updated_at: this.updated_at,
      value: this.value
    }
  }

  static fromJS (statement) {
    return new Statement(statement)
  }
}

export default Statement

