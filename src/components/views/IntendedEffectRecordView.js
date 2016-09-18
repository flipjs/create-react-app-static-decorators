import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { IntendedEffects, ThreatActors, Campaigns } from '../../stores/collections'
import { IntendedEffect, ThreatActor, Campaign } from '../../stores/models'
import { ApiIntendedEffects, ApiThreatActors, ApiCampaigns } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'IntendedEffectRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class IntendedEffectRecordView extends Component {
  intendedEffects = new IntendedEffects(new ApiIntendedEffects(IntendedEffect, 'intended_effects'), ui)
  relatedIntendedEffects = new IntendedEffects(new ApiIntendedEffects(IntendedEffect, 'intended_effects'), ui)
  relatedCampaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)
  relatedThreatActors = new ThreatActors(new ApiThreatActors(ThreatActor, 'threat_actors'), ui)

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
    this.intendedEffects = null
    this.relatedIntendedEffects = null
    this.relatedCampaigns = null
    this.relatedThreatActors = null
  }

  fetchData (id) {
    this.intendedEffects.fetchById(id)
      .then(record => {
        this.intendedEffects.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedIntendedEffects.api.setUrl(`intended_effects/${record.id}/intended_effects`)
    this.relatedIntendedEffects.clearSelected()
    this.relatedIntendedEffects.fetchAll()
    this.relatedCampaigns.api.setUrl(`intended_effects/${record.id}/campaigns`)
    this.relatedCampaigns.clearSelected()
    this.relatedCampaigns.fetchAll()
    this.relatedThreatActors.api.setUrl(`intended_effects/${record.id}/threat_actors`)
    this.relatedThreatActors.clearSelected()
    this.relatedThreatActors.fetchAll()
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
    this.intendedEffects.ui.setNotification({
      title: this.intendedEffects.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Intended Effects' />
        <RecordSection store={this.intendedEffects} />
        <CampaignsSection
          store={this.relatedCampaigns}
          title='Related Campaigns'
          actionsDisabled
        />
        <ThreatActorsSection
          store={this.relatedThreatActors}
          title='Related Threat Actors'
          actionsDisabled
        />
        <IntendedEffectsSection
          store={this.relatedIntendedEffects}
          title='Related Intended Effects'
          actionsDisabled
        />
      </section>
    )
  }
}
IntendedEffectRecordView.displayName = NAME
IntendedEffectRecordView.propTypes = propTypes

export default withRouter(observer(IntendedEffectRecordView))
