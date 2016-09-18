class ApiError {
  message
  dev_message

  constructor (error) {
    Object.assign(this, error)
  }
}

export default ApiError

