import httpClient from './base/utils/htttp-client'
import handlePromise from './base/utils/handle-promise'
import Api from './base/Api'

export class ApiSessions extends Api {
  /**
   * Create session from database server.
   *
   * @param {Object} credentials - users credentials
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  create (credentials) {
    const promise = httpClient().post(this.url, credentials)
    return handlePromise(promise)
  }

  /**
   * Fetch session from database server.
   *
   * @param {String} token - session token
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  fetch (token) {
    const promise = httpClient().get(`${this.url}/${token}`)
    return handlePromise(promise)
  }
}

export default ApiSessions

