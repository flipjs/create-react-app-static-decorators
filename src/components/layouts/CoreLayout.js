import '../../styles/core.scss'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Header from './Header'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

const NAME = 'CoreLayout'

const propTypes = {
  stores: PropTypes.object.isRequired,
  children: PropTypes.element
}

export class CoreLayout extends Component {
  componentWillMount () {
    const {authSession} = this.props.stores
    if (!authSession.isAuthenticated) {
      authSession.validateFromStorage()
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div className='inner-wrapper'>
          <SidebarLeft />
          {this.props.children}
        </div>
        <SidebarRight />
      </div>
    )
  }
}
CoreLayout.displayName = NAME
CoreLayout.propTypes = propTypes

export default observer(['stores'], CoreLayout)

