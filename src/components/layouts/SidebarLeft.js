import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import { ICONS } from '../../constants'
import NavLink from './NavLink'
import NavLinkMenu from './NavLinkMenu'

const NAME = 'SidebarLeft'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

export class SidebarLeft extends Component {
  handleClick = () => {
    this.props.stores.ui.toggleSidebarLeftCollapsed()
  }

  navActive (path) {
    return classNames({
      'nav-active': this.props.router.isActive(path)
    })
  }

  render () {
    const {authSession} = this.props.stores
    return (
      <aside id='sidebar-left' className='sidebar-left'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>
            <h4 style={{marginTop: 5}}><i className='fa fa-globe'></i> ZGTIN</h4>
          </div>
          <div className='sidebar-toggle hidden-xs' onClick={this.handleClick}>
            <i className='fa fa-bars' aria-label='Toggle sidebar'></i>
          </div>
        </div>
        <div className='nano'>
          <div className='nano-content'>
            <nav id='menu' className='nav-main' role='navigation'>
              <ul className='nav nav-main'>
                <NavLink
                  linkName='Home'
                  linkPath='home'
                  linkIcon={ICONS.home}
                  navActive={this.navActive('home')}
                />
                <NavLink
                  linkName='Advisories'
                  linkPath='advisories'
                  linkIcon={ICONS.advisories}
                  navActive={this.navActive('advisories')}
                />
                <NavLink
                  linkName='Campaigns'
                  linkPath='campaigns'
                  linkIcon={ICONS.campaigns}
                  navActive={this.navActive('campaigns')}
                />
                <NavLink
                  linkName='COAs'
                  linkPath='coas'
                  linkIcon={ICONS.coas}
                  navActive={this.navActive('coas')}
                />
                <NavLink
                  linkName='Exploit Targets'
                  linkPath='exploit_targets'
                  linkIcon={ICONS.exploitTargets}
                  navActive={this.navActive('exploit_targets')}
                />
                <NavLink
                  linkName='Incidents'
                  linkPath='incidents'
                  linkIcon={ICONS.incidents}
                  navActive={this.navActive('incidents')}
                />
                {/* <NavLink
                  linkName='Indicators'
                  linkPath='indicators'
                  linkIcon={ICONS.indicators}
                  navActive={this.navActive('indicators')}
                /> */}
                <NavLink
                  linkName='Threat Actors'
                  linkPath='threat_actors'
                  linkIcon={ICONS.threatActors}
                  navActive={this.navActive('threat_actors')}
                />
                <NavLink
                  linkName='TTPs'
                  linkPath='ttps'
                  linkIcon={ICONS.ttps}
                  navActive={this.navActive('ttps')}
                />
                <NavLink
                  linkName='Vulnerabilities'
                  linkPath='vulnerabilities'
                  linkIcon={ICONS.vulnerabilities}
                  navActive={this.navActive('vulnerabilities')}
                />
                <NavLink
                  linkName='Addresses'
                  linkPath='addresses'
                  linkIcon={ICONS.addresses}
                  navActive={this.navActive('addresses')}
                />
                <NavLink
                  linkName='Domain Names'
                  linkPath='domain_names'
                  linkIcon={ICONS.domainNames}
                  navActive={this.navActive('domain_names')}
                />
                {authSession.isAuthenticated && authSession.isAdmin &&
                  <NavLinkMenu
                    menuItems='users'
                    linkName='Admin'
                    linkIcon={ICONS.admin}
                  >
                    <NavLink
                      linkName='Users'
                      linkPath='users'
                      linkIcon={ICONS.users}
                      navActive={this.navActive('users')}
                    />
                  </NavLinkMenu>
                }
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    )
  }
}
SidebarLeft.displayName = NAME
SidebarLeft.propTypes = propTypes

export default withRouter(observer(['stores'], SidebarLeft))

