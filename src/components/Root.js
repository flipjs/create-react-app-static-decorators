import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'mobx-react'
import * as stores from '../stores'
import Notification from '../components/layouts/Notification'

let DevTools
if (__DEBUG__) {
  DevTools = require('mobx-react-devtools').default
}

const propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired
}

export function Root (props) {
  return (
    <Provider stores={stores}>
      <div>
        <Notification />
        <Router history={props.history}>
          {props.routes}
        </Router>
        {DevTools && <DevTools position={{top: 0, left: 200}} />}
      </div>
    </Provider>
  )
}
Root.displayName = 'Root'
Root.propTypes = propTypes

export default Root

