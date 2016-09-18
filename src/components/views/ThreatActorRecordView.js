import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import IncidentsSection from '../incidents/IncidentsSection'
import TtpsSection from '../ttps/TtpsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { ThreatActors, Ttps, Incidents, Campaigns, IntendedEffects } from '../../stores/collections'
import { ThreatActor, Ttp, Incident, Campaign, IntendedEffect } from '../../stores/models'
import { ApiThreatActors, ApiTtps, ApiIncidents, ApiCampaigns, ApiIntendedEffects } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'ThreatActorRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class ThreatActorRecordView extends Component {
  threatActors = new ThreatActors(new ApiThreatActors(ThreatActor, 'threat_actors'), ui)
  relatedThreatActors = new ThreatActors(new ApiThreatActors(ThreatActor, 'threat_actors'), ui)
  relatedIntendedEffects = new IntendedEffects(new ApiIntendedEffects(IntendedEffect, 'intended_effects'), ui)
  relatedCampaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)
  relatedIncidents = new Incidents(new ApiIncidents(Incident, 'incidents'), ui)
  relatedTtps = new Ttps(new ApiTtps(Ttp, 'ttps'), ui)

  componentWillMount () {
    this.loadSelected(this.props.params.id)
  }

  componentWillReceiveProps (nextProps) {
    this.loadSelected(nextProps.params.id)
  }

  componentWillUnmount () {
    this.cleanUp()
  }

  cleanUp () {
    this.threatActors = null
    this.relatedThreatActors = null
    this.relatedIntendedEffects = null
  }

  fetchData (id) {
    this.threatActors.fetchById(id)
      .then(record => {
        this.threatActors.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedThreatActors.api.setUrl(`threat_actors/${record.id}/threat_actors`)
    this.relatedThreatActors.clearSelected()
    this.relatedThreatActors.fetchAll()
    this.relatedIntendedEffects.api.setUrl(`threat_actors/${record.id}/intended_effects`)
    this.relatedIntendedEffects.clearSelected()
    this.relatedIntendedEffects.fetchAll()
    this.relatedCampaigns.api.setUrl(`threat_actors/${record.id}/campaigns`)
    this.relatedCampaigns.clearSelected()
    this.relatedCampaigns.fetchAll()
    this.relatedIncidents.api.setUrl(`threat_actors/${record.id}/incidents`)
    this.relatedIncidents.clearSelected()
    this.relatedIncidents.fetchAll()
    this.relatedTtps.api.setUrl(`threat_actors/${record.id}/ttps`)
    this.relatedTtps.clearSelected()
    this.relatedTtps.fetchAll()
  }

  loadSelected (id) {
    if (id) {
      this.fetchData(id)
    }
  }

  redirectToPage404 (error) {
    this.showNotification(NOTIFICATION_TYPES.ERROR, error.message)
    this.props.router.push('/404')
  }

  showNotification (type, message) {
    this.threatActors.ui.setNotification({
      title: this.threatActors.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Threat Actors' />
        <RecordSection store={this.threatActors} />
        <IntendedEffectsSection
          store={this.relatedIntendedEffects}
          title='Related Intended Effects'
          actionsDisabled
        />
        <CampaignsSection
          store={this.relatedCampaigns}
          title='Related Campaigns'
          actionsDisabled
        />
        <IncidentsSection
          store={this.relatedIncidents}
          title='Related Incidents'
          actionsDisabled
        />
        <TtpsSection
          store={this.relatedTtps}
          title='Related TTPs'
          actionsDisabled
        />
        <ThreatActorsSection
          store={this.relatedThreatActors}
          title='Related Threat Actors'
          actionsDisabled
        />
      </section>
    )
  }
}
ThreatActorRecordView.displayName = NAME
ThreatActorRecordView.propTypes = propTypes

export default withRouter(observer(ThreatActorRecordView))
