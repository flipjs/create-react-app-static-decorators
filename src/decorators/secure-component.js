import React from 'react'
import { authSession } from '../stores'

const hasAccess = (roles, access) => roles.some(role => access.includes(role))

function secureComponent (Component, accessRoles) {
  class SecuredComponent extends React.Component {
    render () {
      if (hasAccess(authSession.roles, accessRoles)) {
        return <Component {...this.props} />
      } else {
        return null
      }
    }
  }
  return SecuredComponent
}

export default secureComponent

