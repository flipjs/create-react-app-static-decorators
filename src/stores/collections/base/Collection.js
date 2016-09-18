import { observable, computed, action, reaction } from 'mobx'

export class Collection {
  api = {}
  ui = {}
  @observable error = {}
  @observable isFetching = false
  @observable isInvalidated = false
  @observable pagination = {}
  @observable records = []
  @observable selected = {}

  constructor (api, ui) {
    Object.assign(this, {api}, {ui})
    // Initialise selected property as Model instance from start,
    // to avoid getting undefined (Model) methods when React
    // renders the component that uses selected property.
    this.setSelected(api.Model.fromJS({}))
  }

  @computed get isEmpty () {
    return !this.records.length
  }

  @computed get isSelected () {
    return !!this.selected.id
  }

  @action
  clearSelected () {
    this.selected = {}
  }

  @action
  destroy (record) {
    this.beforeFetch()
    return this.api.destroy(record.toJS())
      .then(action('destroy.resolved', data => {
        this.records.remove(record)
        this.afterFetch()
        return Promise.resolve(record)
      }))
      .catch(action('destroy.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  fetchAll () {
    this.beforeFetch()
    return this.api.fetchAll()
      .then(action('fetchAll.resolved', data => {
        this.fromApi(data)
        this.afterFetch()
        return Promise.resolve(data)
      }))
      .catch(action('fetchAll.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  fetchById (id) {
    this.beforeFetch()
    return this.api.fetchById(id)
      .then(action('fetchById.resolved', data => {
        const record = this.api.Model.fromJS(data)
        this.afterFetch()
        return Promise.resolve(record)
      }))
      .catch(action('fetchById.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  fetchAllAsNeeded () {
    if (!this.isFetching && this.isEmpty) {
      this.fetchAll()
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
      isInvalidated => isInvalidated && this.fetchAll()
    )
  }

  @action
  save (record) {
    this.beforeFetch()
    return this.api.save(record.toPostApi())
      .then(action('save.resolved', data => {
        record.setState(data)
        this.records.unshift(record)
        this.afterFetch()
        return Promise.resolve(record)
      }))
      .catch(action('save.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
  }

  @action
  setSelected (record) {
    this.selected = record
    this.selected.displayName = record.display_name ||
      record.title ||
      record.value ||
      record.id || ''
  }

  @action
  update (currentRecord, newRecord) {
    this.beforeFetch()
    return this.api.update(newRecord.toPutApi())
      .then(action('update.resolved', data => {
        currentRecord.setState(data)
        this.afterFetch()
        return Promise.resolve(newRecord)
      }))
      .catch(action('update.rejected', error => {
        this.fromApiError(error)
        this.afterFetch()
        return Promise.reject(error)
      }))
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
      error: data.error,
      pagination: data.pagination,
      records: data.records.map(record => data.Model.fromJS(record))
    })
  }

  fromApiError (error) {
    this.error = error
  }

  toJS () {
    return this.records.map(record => record.toJS())
  }
}

export default Collection

