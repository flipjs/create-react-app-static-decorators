import config from '../config'
const store = localStorage || sessionStorage

const SESSION_KEY = config.sessionKey

/**
 * Returns a token from browser's strorage.
 * If it can't find one, it returns null.
 *
 * @returns {String|null}
 * Returns an authentication token or null.
 */
export function getToken () {
  const session = getSession()
  return session && session.token
}

/**
 * Returns a session from browser's strorage.
 * If it can't find one, it returns null.
 *
 * @returns {String|null}
 * Returns an authentication session or null.
 */
export function getSession () {
  const session = store.getItem(SESSION_KEY)
  return session && JSON.parse(session)
}

/**
 * Save session to browser's storage.
 *
 * @param {Object} session - authentication session
 * @returns {undefined}
 */
export function setSession (session) {
  if (!session) {
    throw new Error('Session info received is invalid.')
  }
  store.setItem(SESSION_KEY, JSON.stringify(session))
}

/**
 * Remove session from browser's storage.
 *
 * @returns {undefined}
 */
export function removeSession () {
  store.removeItem(SESSION_KEY)
}

