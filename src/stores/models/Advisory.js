import { observable, action, computed } from 'mobx'

class Advisory {
  id
  @observable author
  @observable author_id
  @observable description
  @observable short_description
  @observable title
  @observable updated_at

  constructor (advisory) {
    Object.assign(this, advisory)
  }

  @computed
  get isValid () {
    if (!this.title) return false
    if (!this.short_description) return false
    if (!this.description) return false
    if (!this.author_id) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      author: this.author,
      author_id: this.author_id,
      description: this.description,
      short_description: this.short_description,
      title: this.title,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      author_id: parseInt(this.author_id, 10),
      description: this.description,
      short_description: this.short_description,
      title: this.title
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
      author: this.author,
      updated_at: this.updated_at
    }
  }

  static fromJS (advisory) {
    return new Advisory(advisory)
  }
}

export default Advisory

