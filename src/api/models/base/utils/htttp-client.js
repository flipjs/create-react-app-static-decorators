import axios from 'axios'
import config from '../../../../config'
// import { storage } from 'utils'

/* eslint-disable no-undef */

function httpClient () {
  return axios.create({
    baseURL: __API_URL__ || config.apiUrl,
    headers: {
      // session_key: storage.getToken(),
      'Content-Type': 'application/json'
    }
  })
}

export default httpClient

