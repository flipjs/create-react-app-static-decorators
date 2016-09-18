import httpClient from './utils/htttp-client'
import handlePromise from './utils/handle-promise'
import handlePromiseWithModel from './utils/handle-promise-with-model'

export class Api {
  Model
  url
  params = {
    q: '',
    page: 1,
    limit: 15,
    sort_by: 'updated_at',
    sort_dir: 'desc'
  }

  constructor (Model, url) {
    Object.assign(this, {Model}, {url})
  }

  /**
   * Save record to database server.
   *
   * @param {Object} record - record object
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  save (record) {
    const promise = httpClient().post(this.url, record)
    return handlePromise(promise)
  }

  /**
   * Fetch record from database server.
   *
   * @param {Object} record - record object
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  fetch (record) {
    const promise = httpClient().get(`${this.url}/${record.id}`)
    return handlePromise(promise)
  }

  /**
   * Fetch record by id from database server.
   *
   * @param {Object} id - record id
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  fetchById (id) {
    const promise = httpClient().get(`${this.url}/${id}`)
    return handlePromise(promise)
  }

  /**
   * Fetch all records from database server.
   *
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  fetchAll () {
    const promise = httpClient().get(this.url, {params: this.params})
    return handlePromiseWithModel(this.Model)(promise)
  }

  /**
   * Update record from database server.
   *
   * @param {Object} record - record object
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  update (record) {
    const promise = httpClient().put(`${this.url}/${record.id}`, record)
    return handlePromise(promise)
  }

  /**
   * Delete record from database server.
   *
   * @param {Object} record - record object
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  destroy (record) {
    const promise = httpClient().delete(`${this.url}/${record.id}`)
    return handlePromise(promise)
  }

  /**
   * Set url endpoint.
   *
   * @param {String} url - url endpoint
   */
  setUrl (url) {
    this.url = url
  }

  /**
   * Set params or the query string.
   *
   * @param {Object} params - url query string object
   */
  setParams (params) {
    Object.assign(this.params, params)
  }
}

export default Api

