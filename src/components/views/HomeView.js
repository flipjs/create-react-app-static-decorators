/* eslint-disable react/jsx-no-bind */

import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoriesWidget from '../dashboard/AdvisoriesWidget'
import ThreatActorsWidget from '../dashboard/ThreatActorsWidget'
import CampaignsWidget from '../dashboard/CampaignsWidget'
import IncidentsWidget from '../dashboard/IncidentsWidget'
import IncidentsSummaryWidget from '../dashboard/IncidentsSummaryWidget'
import AdvisoriesSummaryWidget from '../dashboard/AdvisoriesSummaryWidget'
import ThreatActorsSummaryWidget from '../dashboard/ThreatActorsSummaryWidget'
import CampaignsSummaryWidget from '../dashboard/CampaignsSummaryWidget'

const NAME = 'HomeView'

const grid6 = 'col-md-6 col-lg-12 col-xl-6'
const grid4 = 'col-md-4 col-lg-12 col-xl-4'
const grid6sub = 'col-md-12 col-lg-6 col-xl-6'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

export class HomeView extends Component {
  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Home' />
        <div className='row'>
          <div className={grid6}>
            <div className='row'>
              <div className={grid6sub}>
                <IncidentsSummaryWidget />
              </div>
              <div className={grid6sub}>
                <AdvisoriesSummaryWidget />
              </div>
            </div>
            <div className='row'>
              <div className={grid6sub}>
                <ThreatActorsSummaryWidget />
              </div>
              <div className={grid6sub}>
                <CampaignsSummaryWidget />
              </div>
            </div>
          </div>
          <div className={grid6}>
            <IncidentsWidget />
          </div>
        </div>
        <div className='row'>
          <div className={grid4}>
            <AdvisoriesWidget />
          </div>
          <div className={grid4}>
            <ThreatActorsWidget />
          </div>
          <div className={grid4}>
            <CampaignsWidget />
          </div>
        </div>
      </section>
    )
  }
}
HomeView.displayName = NAME
HomeView.propTypes = propTypes

export default withRouter(observer(['stores'], HomeView))

