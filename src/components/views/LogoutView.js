import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

const NAME = 'LogoutView'

const contextTypes = {
  router: PropTypes.object
}

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class LogoutView extends Component {
  componentWillMount () {
    if (this.props.stores.authSession.isAuthenticated) {
      this.props.stores.authSession.removeSession()
    }
  }

  componentDidMount () {
    this.context.router.push('/login')
  }
  render () {
    return (
      <div className='container text-center'>
        <h1>You have logged out.</h1>
      </div>
    )
  }
}
LogoutView.displayName = NAME
LogoutView.propTypes = propTypes
LogoutView.contextTypes = contextTypes

export default observer(['stores'], LogoutView)

