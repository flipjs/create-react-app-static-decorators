import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import AddressesSection from '../addresses/AddressesSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Campaigns, Addresses, ThreatActors, IntendedEffects } from '../../stores/collections'
import { Campaign, Address, ThreatActor, IntendedEffect } from '../../stores/models'
import { ApiCampaigns, ApiAddresses, ApiThreatActors, ApiIntendedEffects } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'CampaignRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class CampaignRecordView extends Component {
  campaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)
  relatedCampaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)
  relatedIntendedEffects = new IntendedEffects(new ApiIntendedEffects(IntendedEffect, 'intended_effects'), ui)
  relatedThreatActors = new ThreatActors(new ApiThreatActors(ThreatActor, 'threat_actors'), ui)
  relatedAddresses = new Addresses(new ApiAddresses(Address, 'addresses'), ui)

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
    this.campaigns = null
    this.relatedCampaigns = null
    this.relatedIntendedEffects = null
    this.relatedThreatActors = null
  }

  fetchData (id) {
    this.campaigns.fetchById(id)
      .then(record => {
        this.campaigns.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedCampaigns.api.setUrl(`campaigns/${record.id}/campaigns`)
    this.relatedCampaigns.clearSelected()
    this.relatedCampaigns.fetchAll()
    this.relatedIntendedEffects.api.setUrl(`campaigns/${record.id}/intended_effects`)
    this.relatedIntendedEffects.clearSelected()
    this.relatedIntendedEffects.fetchAll()
    this.relatedThreatActors.api.setUrl(`campaigns/${record.id}/threat_actors`)
    this.relatedThreatActors.clearSelected()
    this.relatedThreatActors.fetchAll()
    this.relatedAddresses.api.setUrl(`campaigns/${record.id}/addresses`)
    this.relatedAddresses.clearSelected()
    this.relatedAddresses.fetchAll()
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
    this.campaigns.ui.setNotification({
      title: this.campaigns.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Campaigns' />
        <RecordSection store={this.campaigns} />
        <IntendedEffectsSection
          store={this.relatedIntendedEffects}
          title='Related Intended Effects'
          actionsDisabled
        />
        <ThreatActorsSection
          store={this.relatedThreatActors}
          title='Related Threat Actors'
          actionsDisabled
        />
        <AddressesSection
          store={this.relatedAddresses}
          title='Related Addresses'
          actionsDisabled
        />
        <CampaignsSection
          store={this.relatedCampaigns}
          title='Related Campaigns'
          actionsDisabled
        />
      </section>
    )
  }
}
CampaignRecordView.displayName = NAME
CampaignRecordView.propTypes = propTypes

export default withRouter(observer(CampaignRecordView))
