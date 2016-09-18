import httpClient from './base/utils/htttp-client'
import handlePromise from './base/utils/handle-promise'
import Api from './base/Api'

export class ApiSummaries extends Api {
  /**
   * Fetch summaries from database server.
   *
   * @returns {Promise.<String, Error>}
   * Returns a promise object.
   * See {@link https://mdn.io/promise}
   */
  fetch () {
    const promise = httpClient().get(this.url)
    return handlePromise(promise)
  }
}

export default ApiSummaries

