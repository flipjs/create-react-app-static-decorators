import { observable, action, computed } from 'mobx'

class Observable {
  id
  @observable description
  @observable display_name
  @observable short_description
  @observable title
  @observable updated_at

  constructor (observable) {
    Object.assign(this, observable)
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
      description: this.description,
      display_name: this.display_name,
      short_description: this.short_description,
      title: this.title,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      title: this.title,
      short_description: this.short_description,
      description: this.description
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
      updated_at: this.updated_at
    }
  }

  static fromJS (observable) {
    return new Observable(observable)
  }
}

export default Observable

