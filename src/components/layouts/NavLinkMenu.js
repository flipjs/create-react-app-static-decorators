import React, { Component, PropTypes } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

const NAME = 'NavLinkMenu'

const propTypes = {
  stores: PropTypes.object.isRequired,
  menuItems: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  linkIcon: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export class NavLinkMenu extends Component {
  @observable navActive = false
  @observable navExpanded = false

  componentWillMount () {
    this.setNavActive()
    // On initial render, if route is one of the submenu items, expand submenu.
    if (this.navActive) this.setNavExpanded(true)
  }

  componentWillUpdate () {
    this.setNavActive()
  }

  handleClick = () => {
    this.toggleNavExpanded()
  }

  @action
  setNavActive () {
    const {menuItems} = this.props
    this.navActive = menuItems.includes(this.props.stores.ui.navPath)
  }

  @action
  setNavExpanded (value) {
    this.navExpanded = value
  }

  @action
  toggleNavExpanded () {
    this.navExpanded = !this.navExpanded
  }

  render () {
    const {linkName, linkIcon} = this.props

    let classes = this.navExpanded ? 'nav-parent nav-expanded' : 'nav-parent'
    classes += this.navActive ? ' nav-active' : ''

    return (
      <li className={classes} onClick={this.handleClick}>
        <a>
          <i className={linkIcon} aria-hidden='true'></i>
          <span>{linkName}</span>
        </a>
        <ul className='nav nav-children'>
          {this.props.children}
        </ul>
      </li>
    )
  }
}
NavLinkMenu.displayName = NAME
NavLinkMenu.propTypes = propTypes

export default observer(['stores'], NavLinkMenu)

