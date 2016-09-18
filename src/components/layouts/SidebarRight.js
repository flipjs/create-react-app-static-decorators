import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import IncidentsSummaryWidget from '../dashboard/IncidentsSummaryWidget'
import AdvisoriesSummaryWidget from '../dashboard/AdvisoriesSummaryWidget'
import ThreatActorsSummaryWidget from '../dashboard/ThreatActorsSummaryWidget'
import CampaignsSummaryWidget from '../dashboard/CampaignsSummaryWidget'

const NAME = 'SidebarRight'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

export class SidebarRight extends Component {
  changeRoute = path => () => {
    this.props.router.push(path)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.stores.ui.toggleSidebarRightOpened()
  }

  render () {
    return (
      <aside id='sidebar-right' className='sidebar-right'>
        <div className='nano'>
          <div className='nano-content'>
            <a className='mobile-close visible-xs' onClick={this.handleClick}>
              Collapse <i className='fa fa-chevron-right'></i>
            </a>
            <div className='sidebar-right-wrapper'>
              <div className='sidebar-widget'>
                <h6 className='mb-md'>Summary</h6>
                <div className='mb-md'>
                  <IncidentsSummaryWidget />
                </div>
                <div className='mb-md'>
                  <AdvisoriesSummaryWidget />
                </div>
                <div className='mb-md'>
                  <ThreatActorsSummaryWidget />
                </div>
                <div className='mb-md'>
                  <CampaignsSummaryWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
SidebarRight.displayName = NAME
SidebarRight.propTypes = propTypes

export default withRouter(observer(['stores'], SidebarRight))

