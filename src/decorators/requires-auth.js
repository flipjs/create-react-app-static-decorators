import React, { PropTypes } from 'react'
import { authSession } from '../stores'

function requiresAuth (Component) {
  const contextTypes = {
    router: PropTypes.object
  }

  class AuthenticatedComponent extends React.Component {
    checkAndRedirect = () => {
      if (!authSession.isAuthenticated) {
        this.context.router.push('/login')
      }
    }

    componentDidMount () {
      this.checkAndRedirect()
    }

    componentDidUpdate () {
      this.checkAndRedirect()
    }

    render () {
      if (authSession.isAuthenticated) {
        return <Component {...this.props} />
      } else {
        return null
      }
    }
  }
  AuthenticatedComponent.contextTypes = contextTypes

  return AuthenticatedComponent
}

export default requiresAuth

