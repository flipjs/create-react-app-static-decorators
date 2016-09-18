import ApiError from './ApiError'
import { ERRORS } from '../../../../constants'

async function handlePromise (promise) {
  const {SERVER_ERROR} = ERRORS
  try {
    const response = await promise
    return Promise.resolve(response.data)
  } catch (error) {
    if (error.data && error.data.error) {
      console.error(error.data.error.dev_message || SERVER_ERROR.dev_message)
      return Promise.reject(new ApiError(error.data.error))
    }
    // return generic server error message
    console.error(SERVER_ERROR.dev_message)
    return Promise.reject(new ApiError(SERVER_ERROR))
  }
}

export default handlePromise

