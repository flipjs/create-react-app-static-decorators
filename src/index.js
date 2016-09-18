import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { useStrict } from 'mobx'
import config from './config'
import makeRoutes from './routes'
import Root from './components/Root'
import { authSession } from './stores'
import { ROLES } from './constants'

if (config.mobxDebug) {
  require('./debug')
}

// mobx strict mode
useStrict(true)

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: ''
})

// Get session from storage and validate.
// FIXME: Uncomment when authentication is finally working.
// authSession.validateFromStorage()

// FIXME: Delete setSession when authentication is finally working.
authSession.setSession({
  error: null,
  group_id: 1,
  group_name: 'Zepko',
  isFetching: false,
  roles: [ROLES.USER, ROLES.ADMIN, ROLES.CURATOR],
  token: 'test_token',
  user_id: 1,
  username: 'benjamin.webster',
  fullname: 'Benjamin Webster'
})

const routes = makeRoutes()

ReactDOM.render(
  <Root history={browserHistory} routes={routes} />,
  document.getElementById('root')
)

