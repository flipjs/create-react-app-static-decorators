import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

const NAME = 'NavLink'

const styles = {
  navActive: {
    color: '#0088cc'
  }
}

const propTypes = {
  stores: PropTypes.object.isRequired,
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  linkIcon: PropTypes.string.isRequired,
  navActive: PropTypes.string.isRequired
}

export class NavLink extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    this.props.stores.ui.removeSidebarLeftOpenedClass()
  }

  render () {
    const {linkName, linkPath, linkIcon, navActive} = this.props
    return (
      <li className={navActive}>
        <Link
          to={`/${linkPath.toLowerCase()}`}
          activeStyle={styles.navActive}
          onClick={this.handleClick}
        >
          <i className={linkIcon} aria-hidden='true'></i>
          <span>{linkName}</span>
        </Link>
      </li>
    )
  }
}
NavLink.displayName = NAME
NavLink.propTypes = propTypes

export default observer(['stores'], NavLink)

