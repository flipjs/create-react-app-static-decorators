import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'

import AdvisoriesSection from '../advisories/AdvisoriesSection'
import CampaignsSection from '../campaigns/CampaignsSection'
import CoasSection from '../coas/CoasSection'
import ExploitTargetsSection from '../exploit-targets/ExploitTargetsSection'
import IncidentsSection from '../incidents/IncidentsSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import TtpsSection from '../ttps/TtpsSection'
import VulnerabilitiesSection from '../vulnerabilities/VulnerabilitiesSection'
import AddressesSection from '../addresses/AddressesSection'
import DomainNamesSection from '../domain-names/DomainNamesSection'

const NAME = 'SearchView'

const propTypes = {
  location: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

export class SearchView extends Component {
  componentWillMount () {
    this.loadData(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.loadData(nextProps)
  }

  fetchData (props, store) {
    const params = {q: props.location.query.q || ''}
    props.stores.searches[store].api.setParams(params)
    props.stores.searches[store].clearSelected()
    props.stores.searches[store].fetchAll()
  }

  loadData (props) {
    Object.keys(props.stores.searches)
      .forEach(store => this.fetchData(props, store))
  }

  render () {
    const {
      advisories,
      campaigns,
      coas,
      exploitTargets,
      incidents,
      threatActors,
      ttps,
      vulnerabilities,
      addresses,
      domainNames
    } = this.props.stores.searches

    const advisoriesTitle = advisories.api.params.q
      ? `Advisories (query: ${advisories.api.params.q})`
      : 'Advisories'
    const campaignsTitle = campaigns.api.params.q
      ? `Campaigns (query: ${campaigns.api.params.q})`
      : 'Campaigns'
    const coasTitle = coas.api.params.q
      ? `COAs (query: ${coas.api.params.q})`
      : 'COAs'
    const exploitTargetsTitle = exploitTargets.api.params.q
      ? `Exploit Targets (query: ${exploitTargets.api.params.q})`
      : 'Exploit Targets'
    const incidentsTitle = incidents.api.params.q
      ? `Incidents (query: ${incidents.api.params.q})`
      : 'Incidents'
    const threatActorsTitle = threatActors.api.params.q
      ? `Threat Actors (query: ${threatActors.api.params.q})`
      : 'Threat Actors'
    const ttpsTitle = ttps.api.params.q
      ? `TTPs (query: ${ttps.api.params.q})`
      : 'TTPs'
    const vulnerabilitiesTitle = vulnerabilities.api.params.q
      ? `Vulnerabilities (query: ${vulnerabilities.api.params.q})`
      : 'Vulnerabilities'
    const addressesTitle = addresses.api.params.q
      ? `Addresses (query: ${addresses.api.params.q})`
      : 'Addresses'
    const domainNamesTitle = domainNames.api.params.q
      ? `Domain Names (query: ${domainNames.api.params.q})`
      : 'Domain Names'

    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Search' />
        <AdvisoriesSection
          store={advisories}
          title={advisoriesTitle}
          actionsDisabled
        />
        <CampaignsSection
          store={campaigns}
          title={campaignsTitle}
          actionsDisabled
        />
        <CoasSection
          store={coas}
          title={coasTitle}
          actionsDisabled
        />
        <ExploitTargetsSection
          store={exploitTargets}
          title={exploitTargetsTitle}
          actionsDisabled
        />
        <IncidentsSection
          store={incidents}
          title={incidentsTitle}
          actionsDisabled
        />
        <ThreatActorsSection
          store={threatActors}
          title={threatActorsTitle}
          actionsDisabled
        />
        <TtpsSection
          store={ttps}
          title={ttpsTitle}
          actionsDisabled
        />
        <VulnerabilitiesSection
          store={vulnerabilities}
          title={vulnerabilitiesTitle}
          actionsDisabled
        />
        <AddressesSection
          store={addresses}
          title={addressesTitle}
          actionsDisabled
        />
        <DomainNamesSection
          store={domainNames}
          title={domainNamesTitle}
          actionsDisabled
        />
      </section>
    )
  }
}
SearchView.displayName = NAME
SearchView.propTypes = propTypes

export default observer(['stores'], SearchView)
