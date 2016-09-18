import { observable, action, computed } from 'mobx'

class Score {
  id
  @observable value
  @observable display_name

  constructor (score) {
    Object.assign(this, score)
  }

  @computed
  get isValid () {
    if (!this.value) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      display_name: this.display_name,
      value: this.value
    }
  }

  toPostApi () {
    return {
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
      value: this.value
    }
  }

  static fromJS (score) {
    return new Score(score)
  }
}

export default Score

