import { observable, computed, action, reaction } from 'mobx'

export class Summaries {
  api
  ui
  @observable isFetching = false
  @observable isInvalidated = false
  @observable data

  constructor (api, ui) {
    Object.assign(this, {api}, {ui})
    this.invalidateWatcher()
  }

  @computed get isEmpty () {
    return !this.data
  }

  @action
  fetch () {
    this.beforeFetch()
    return this.api.fetch()
      .then(action('fetch.resolved', data => {
        this.fromApi(data)
        this.afterFetch()
        return Promise.resolve(data)
      }))
      .catch(action('fetch.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  fetchAll () {
    this.fetch()
  }

  @action
  fetchAllAsNeeded () {
    if (!this.isFetching && this.isEmpty) {
      this.fetch()
    }
  }

  @action
  invalidate () {
    this.isInvalidated = true
  }

  @action
  invalidateWatcher () {
    return reaction(
      () => this.isInvalidated,
      isInvalidated => isInvalidated && this.fetch()
    )
  }

  afterFetch () {
    this.isFetching = false
    this.ui.decrementHttpCount()
  }

  beforeFetch () {
    this.isFetching = true
    this.isInvalidated = false
    this.ui.incrementHttpCount()
  }

  fromApi (data) {
    Object.assign(this, {
      data: data
    })
  }

  fromApiError (error) {
    this.error = error
  }

  toJS () {
    return {
      data: this.data
    }
  }
}

export default Summaries

