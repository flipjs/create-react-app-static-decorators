import ApiError from './ApiError'
import Pagination from './Pagination'
import { ERRORS } from '../../../../constants'

export function handlePromiseWithModel (Model) {
  return async function processPromiseWithModel (promise) {
    const {SERVER_ERROR, PROCESS_ERROR} = ERRORS

    let response
    // handle api error
    try {
      response = await promise
    } catch (error) {
      if (error.data && error.data.error) {
        console.error(error.data.error.dev_message || SERVER_ERROR.dev_message)
        return Promise.reject(new ApiError(error.data.error))
      }
      // return generic server error message
      console.error(SERVER_ERROR.dev_message)
      return Promise.reject(new ApiError(SERVER_ERROR))
    }

    // handle processing data error
    try {
      const data = {
        Model: Model,
        records: response.data.records || [],
        pagination: new Pagination(response.data.pagination || {}),
        error: new ApiError({})
      }
      return Promise.resolve(data)
    } catch (error) {
      console.error(error.stack)
      return Promise.reject(new ApiError({
        ...PROCESS_ERROR,
        dev_message: `handlePromiseWithModel(): ${error.message}`
      }))
    }
  }
}

export default handlePromiseWithModel

