import React, { PropTypes } from 'react'
import { authSession } from '../stores'

function requiresAdmin (Component) {
  const contextTypes = {
    router: PropTypes.object
  }

  class AdminComponent extends React.Component {
    checkAndRedirect = () => {
      if (!authSession.isAdmin) {
        if (!authSession.isAuthenticated) {
          this.context.router.push('/login')
        } else {
          this.context.router.push('/home')
        }
      }
    }

    componentDidMount () {
      this.checkAndRedirect()
    }

    componentDidUpdate () {
      this.checkAndRedirect()
    }

    render () {
      if (authSession.isAdmin) {
        return <Component {...this.props} />
      } else {
        return null
      }
    }
  }
  AdminComponent.contextTypes = contextTypes

  return AdminComponent
}

export default requiresAdmin

