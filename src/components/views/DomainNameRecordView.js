import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import DomainNamesSection from '../domain-names/DomainNamesSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { DomainNames, Campaigns } from '../../stores/collections'
import { DomainName, Campaign } from '../../stores/models'
import { ApiDomainNames, ApiCampaigns } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'DomainNameRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class DomainNameRecordView extends Component {
  domainNames = new DomainNames(new ApiDomainNames(DomainName, 'domain_names'), ui)
  relatedDomainNames = new DomainNames(new ApiDomainNames(DomainName, 'domain_names'), ui)
  relatedCampaigns = new Campaigns(new ApiCampaigns(Campaign, 'campaigns'), ui)

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
    this.domainNames = null
    this.relatedDomainNames = null
    this.relatedCampaigns = null
  }

  fetchData (id) {
    this.domainNames.fetchById(id)
      .then(record => {
        this.domainNames.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedDomainNames.api.setUrl(`domain_names/${record.id}/domain_names`)
    this.relatedDomainNames.clearSelected()
    this.relatedDomainNames.fetchAll()
    this.relatedCampaigns.api.setUrl(`domain_names/${record.id}/campaigns`)
    this.relatedCampaigns.clearSelected()
    this.relatedCampaigns.fetchAll()
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
    this.domainNames.ui.setNotification({
      title: this.domainNames.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Domain Names' />
        <RecordSection store={this.domainNames} />
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
      </section>
    )
  }
}
DomainNameRecordView.displayName = NAME
DomainNameRecordView.propTypes = propTypes

export default withRouter(observer(DomainNameRecordView))
