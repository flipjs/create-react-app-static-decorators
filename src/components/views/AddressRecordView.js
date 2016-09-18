import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import AddressesSection from '../addresses/AddressesSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import DomainNamesSection from '../domain-names/DomainNamesSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Addresses, Campaigns, DomainNames } from '../../stores/collections'
import { Address, Campaign, DomainName } from '../../stores/models'
import { ApiAddresses, ApiCampaigns, ApiDomainNames } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'AddressRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class AddressRecordView extends Component {
  addresses = new Addresses(new ApiAddresses(Address, 'addresses'), ui)
  relatedAddresses = new Addresses(new ApiAddresses(Address, 'addresses'), ui)
  relatedCampaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)
  relatedDomainNames = new DomainNames(new ApiDomainNames(DomainName, 'domain_names'), ui)

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
    this.addresses = null
    this.relatedAddresses = null
    this.relatedCampaigns = null
    this.relatedDomainNames = null
  }

  fetchData (id) {
    this.addresses.fetchById(id)
      .then(record => {
        this.addresses.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedAddresses.api.setUrl(`addresses/${record.id}/addresses`)
    this.relatedAddresses.clearSelected()
    this.relatedAddresses.fetchAll()
    this.relatedCampaigns.api.setUrl(`addresses/${record.id}/campaigns`)
    this.relatedCampaigns.clearSelected()
    this.relatedCampaigns.fetchAll()
    this.relatedDomainNames.api.setUrl(`addresses/${record.id}/domain_names`)
    this.relatedDomainNames.clearSelected()
    this.relatedDomainNames.fetchAll()
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
    this.addresses.ui.setNotification({
      title: this.addresses.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Addresses' />
        <RecordSection store={this.addresses} />
        <CampaignsSection
          store={this.relatedCampaigns}
          title='Related Campaigns'
          actionsDisabled
        />
        <DomainNamesSection
          store={this.relatedDomainNames}
          title='Related Domain Names'
          actionsDisabled
        />
        <AddressesSection
          store={this.relatedAddresses}
          title='Related Addresses'
          actionsDisabled
        />
      </section>
    )
  }
}
AddressRecordView.displayName = NAME
AddressRecordView.propTypes = propTypes

export default withRouter(observer(AddressRecordView))
